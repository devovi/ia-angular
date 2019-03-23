import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  clickEvent(data) {
    console.log(data)
  }

}
