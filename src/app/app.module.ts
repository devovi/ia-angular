import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { SharedModule } from './shared/shared.module';
import { RequestService  } from './shared/services/request.service';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material';
import { SidebarModule } from './sidebar/sidebar.module';
import { WidgetContainerComponent } from './sidebar/widget-container/widget-container.component';
import { LedCardComponent } from './device/led-card/led-card.component';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LedCardComponent,
    WidgetContainerComponent
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
    FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
