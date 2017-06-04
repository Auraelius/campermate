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

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: DataProvider) {

  }

  saveForm(): void {

  }

}