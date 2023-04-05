import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  
];
