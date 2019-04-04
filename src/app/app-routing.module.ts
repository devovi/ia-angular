import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LedMasterComponent} from './led/led/led-master.component';
import {ViewComponent} from './led/view/view.component';
import {SensorviewComponent} from './sensor/pressureSensor/sensorview/sensorview.component';
const routes: Routes = [
  // {path: '', component: LedMasterComponent},
  {path: 'view', component: ViewComponent},
  {path: 'pressureSensorView', component: SensorviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
export const  routingComponents = [LedMasterComponent, ViewComponent];
