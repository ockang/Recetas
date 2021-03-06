import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  home() {

  	this.navCtrl.push(HomePage);

  }

  profilePage() {
    this.navCtrl.push(ProfilePage);
  }

}
