import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { platformBrowser } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { NgModel } from '@angular/forms';
import { SplashScreen, SplashScreenPlugin } from '@capacitor/splash-screen';
import { SplashPage } from './splash/splash.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  // constructor(private platform: Platform, private SplashScreen: SplashScreenPlugin){}
  constructor(){}
}

