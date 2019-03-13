import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedMasterComponent } from './led/led/led-master.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './led/view/view.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {LedMasterService} from './services/led-master.service';
import { DeleteComponent } from './led/delete/delete.component';

import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    LedMasterComponent,
    ViewComponent,
    DeleteComponent
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
    routing
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule],
  providers: [LedMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
