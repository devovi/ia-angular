import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from './services/request.service';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports:[
    CommonModule,
    // MatSlideToggleModule
  ],
  declarations:[
    // RequestService
  ],
  providers:[
    RequestService
  ],
  exports:[
    // MatSlideToggleModule

  ]
})
export class SharedModule{

}
