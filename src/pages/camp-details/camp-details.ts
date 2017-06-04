import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})
export class CampDetailsPage {

  campDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: DataProvider) {

    // Since we defined the formGroup as campDetailsForm in the template, we can assign 
    // a new Form Builder group to it here. To create the group, we supply all of the 
    // formControlName names we added to the inputs. Notice that we also supply an array
    // that contains an empty string, this is used to initialse the value of the input

    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      ammenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: ['']
    });
  }

// the saveForm function gets triggered every time the user makes a change to any input field, so whenever they make a change we read the values and send them off for saving.

  saveForm(): void {
    let data = this.campDetailsForm.value;
    //this.dataService.setCampDetails(data); 
  }
}