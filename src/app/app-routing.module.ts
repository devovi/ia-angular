import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LedMasterComponent} from './led/led/led-master.component';
import {ViewComponent} from './led/view/view.component';
const routes: Routes = [
  // {path: '', component: LedMasterComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [LedMasterComponent, ViewComponent];
