import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html'
})
export class MyDetailsPage {
  myDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: DataProvider) {

    this.myDetailsForm = formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    });

  }
  saveForm(): void {
    let data = this.myDetailsForm.value;
    //this.dataService.setMyDetails(data);
  }

}