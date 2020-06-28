const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const FakeDb = require('./fake-db');
require("dotenv").config();
const Rental = require("./models/rental");

const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users');


const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

//DB
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(()=>{
	const fakeDb = new FakeDb();
	/*fakeDb.seedDb();*/
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
	console.log('Server running on url http://localhost:3001');
});