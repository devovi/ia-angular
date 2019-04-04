import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {LedMasterService} from './services/led-master.service';
import { DeleteComponent } from './led/delete/delete.component';

import { routing } from './app.routing';
import { SensorviewComponent } from './sensor/pressureSensor/sensorview/sensorview.component';
import { SensoraddComponent } from './sensor/pressureSensor/sensoradd/sensoradd.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    routingComponents,
    SensorviewComponent,
    SensoraddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    routing
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule],
  providers: [LedMasterService, routingComponents, SensorviewComponent,SensoraddComponent ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
