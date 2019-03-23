import {Routes, RouterModule} from '@angular/router';


import { LedCardComponent } from './device/led-card/led-card.component';

import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: 'led', component: LedCardComponent },


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
