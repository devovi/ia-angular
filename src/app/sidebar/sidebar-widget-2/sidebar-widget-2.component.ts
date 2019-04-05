import { Component, OnInit } from '@angular/core';
import{ AppComponent } from '../../app.component';

@Component({
  selector: 'app-sidebar-widget-2',
  templateUrl: './sidebar-widget-2.component.html',
  styleUrls: ['./sidebar-widget-2.component.css']
})
export class SidebarWidget2Component implements OnInit {


    BuidlingList = {
      blists: [
        {
          name: 'Building-1',
        },
        {
          name: 'Building-2',
        },
        {
          name: 'Building-3',
        },
        {
          name: 'All',
        },
      ]
    };

  constructor( public appComponent:AppComponent) { }

  ngOnInit() {
  }

  changefn(value){
    // console.log(value);
    if(value=="Building-1"|| value=="All"){
      console.log(value);
      this.appComponent.showfn();

    }
  }

}
