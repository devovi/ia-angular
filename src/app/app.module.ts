import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { SharedModule } from './shared/shared.module';
import { RequestService  } from './shared/services/request.service';
import { TempsensorService } from './shared/services/tempsensor.service'
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material';
import { SidebarModule } from './sidebar/sidebar.module';
import { WidgetContainerComponent } from './sidebar/widget-container/widget-container.component';
import { LedCardComponent } from './device/led-card/led-card.component';
import { DialogOverviewExampleDialog } from './device/led-card/led-card.component';
import { DialogImageDialog } from './device/led-card/led-card.component';

import {LedMasterComponent} from './led/led/led-master.component';
import {ViewComponent} from './led/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { SensorviewComponent } from './sensor/pressureSensor/sensorview/sensorview.component';
import { SensoraddComponent } from './sensor/pressureSensor/sensoradd/sensoradd.component';
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

// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {LedMasterService} from './services/led-master.service';
// import { DeleteComponent } from './led/delete/delete.component';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog,MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TempsensorCardComponent } from './device/tempsensor-card/tempsensor-card.component';



@NgModule({
  declarations: [
    AppComponent,
    LedCardComponent,
    // DeleteComponent,
    WidgetContainerComponent,
    LedMasterComponent,
    SensorviewComponent,
    SensoraddComponent,
    DialogOverviewExampleDialog,
    DialogImageDialog,
    ViewComponent,
    TempsensorCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    SidebarModule,
    // MatSlideToggleModule,
    // SharedModule,
    routing,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    DialogImageDialog
  ],

  providers: [RequestService,LedMasterComponent,TempsensorService,DatePipe,ViewComponent,SensoraddComponent,SensorviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
