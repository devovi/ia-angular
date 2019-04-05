import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';


import { LedCardComponent } from './device/led-card/led-card.component';
import { ViewComponent } from './led/view/view.component';
import {TempsensorCardComponent} from './device/tempsensor-card/tempsensor-card.component'
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: 'led', component: LedCardComponent },
  { path: 'led/view', component: ViewComponent },
  {path: 'view', component: ViewComponent},
  {path: 'sensor', component: TempsensorCardComponent}



  // {
  //   path: '',
  //   // component: ThirdCompComponent,
  //   children: [
  //     {
  //       path: "chil-mod1",
  //       loadChildren: './first/first.module#FirstModule'
  //     }
  //   ]
  // }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
