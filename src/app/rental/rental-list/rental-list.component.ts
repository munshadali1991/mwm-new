import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.modal';

@Component({
  selector: 'mwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];
  
  /*testVarible: string = "";*/

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    /*const testNumber: number = 23;
    this.testVarible = this.rentalService.testFunction(testNumber);*/

    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
    (rentals: Rental[]) => {
        this.rentals = rentals;
    },
    (err)=>{

    },
    ()=>{

    });
  }

}
