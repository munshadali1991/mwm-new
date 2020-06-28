const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String, 
		min: [4, 'To short! Minimum is 4 charecter'], 
		max: [32, 'To long, max is 32 charecter']
	},
	email: {type: String,
		required: 'Email is required',
		min: [4, 'To short! Minimum is 4 charecter'], 
		max:  [32, 'To long, max is 32 charecter'],
		unique: true,
		lowercase: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]

	},
	password: {
		type: String,
		min: [4, 'To short! Minimum is 4 charecter'], 
		max:  [32, 'To long, max is 32 charecter'],
		required: 'Password is required'
	},
	rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});

userSchema.methods.hasSamePassword = function(requestedPassword) {
	return bcrypt.compareSync(requestedPassword, this.password);
}

userSchema.pre('save', function(next) {
	const user = this; 
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			user.password = hash;
			next();
		});
	});
})

module.exports = mongoose.model('User', userSchema);