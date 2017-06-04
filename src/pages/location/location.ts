import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public dataService: DataProvider, public alertCtrl: AlertController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(): void {

  }

  setLocation(): void {

  }

  takeMeHome(): void {


  }
  
}