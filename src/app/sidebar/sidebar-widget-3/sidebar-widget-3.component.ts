import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-widget-3',
  templateUrl: './sidebar-widget-3.component.html',
  styleUrls: ['./sidebar-widget-3.component.css']
})
export class SidebarWidget3Component implements OnInit {
  Devices = {
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

}
