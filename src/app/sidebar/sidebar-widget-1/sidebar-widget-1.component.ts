import { Component, OnInit } from '@angular/core';
import{ AppComponent } from '../../app.component';


@Component({
  selector: 'app-sidebar-widget-1',
  templateUrl: './sidebar-widget-1.component.html',
  styleUrls: ['./sidebar-widget-1.component.css']
})
export class SidebarWidget1Component implements OnInit {

  DeviceList = {
    lists: [
      {
        name: 'LED',
      },
      {
        name: 'Temp-sensor',
      },
      {
        name: 'Pressure-sensor',
      }
    ]
  };
  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

  clickEvent(data) {
    console.log(data.name)
    if(data.name=="LED"){
      // console.log("inside if")
      this.appComponent.showfnn();

    }
  }

}
