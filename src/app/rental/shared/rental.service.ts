import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import  { Rental } from './rental.modal';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {

  }

	/*private rentals: Rental[] = [{
  	id:"1",
  	title:"central Apatment",
  	city: "New York",
  	street: "Times Square",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms:3,
  	description: "Very nice apartment",
  	dailyRate:34,
  	shared: false,
  	createdAt: "24/12/2017"
  },
  {
  	id:"2",
  	title:"central Apatment 2",
  	city: "San Francisco",
  	street: "Main Square",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms:3,
  	description: "Very nice apartment",
  	dailyRate:35,
  	shared: false,
  	createdAt: "24/12/2017"
  },
  {
  	id:"3",
  	title:"central Apatment 3",
  	city: "Washinton D C",
  	street: "Clintan Street",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms:4,
  	description: "Very nice apartment",
  	dailyRate:50,
  	shared: false,
  	createdAt: "24/12/2017"
  },
  {
  	id:"4",
  	title:"central Apatment 4",
  	city: "Berlin",
  	street: "Volvatwa",
  	category: "apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms:4,
  	description: "Very nice apartment",
  	dailyRate:60,
  	shared: false,
  	createdAt: "24/12/2017"
  }];*/

  /*public testFunction(arg:number): string {
  	return "asdfadsf";
  }*/

  /*public getRentalById(rentalId: string): Observable<Rental> {*/
    public getRentalById(rentalId: string): Observable<any> {
    /*return new Observable<Rental>((observer) => {

        setTimeout(() => {
           const foundRental = this.rentals.find((rental) => {
             return rental.id == rentalId;
           });
           observer.next(foundRental);
        }, 500);

    });*/
    return this.http.get('api/v1/rentals/' + rentalId);
  }

  /*public getRentals():Observable<Rental[]> {*/
    public getRentals():Observable<any> {
    	/*return new Observable<Rental[]>((observer) => {
         setTimeout(()=>{
         		observer.next(this.rentals);
         }, 1000);
     });
    }*/
    return this.http.get('api/v1/rentals');
  }
}