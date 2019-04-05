import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public showled:boolean=true;
  public showledmaster:boolean=true;

  config = {
    panels: [
      {
        name: 'Add Devices',
        description: 'First section',
        component: {
          selector: 'app-sidebar-widget-1',
          settings: {}
        }
      },
      {
        name: 'View Devices',
        description: 'Second section',
        component: {
          selector: 'app-sidebar-widget-2',
          settings: {}
        }
      },
      {
        name: 'Configure Device',
        description: 'Third section',
        component: {
          selector: 'app-sidebar-widget-3',
          settings: {}
        }
      }
    ]
  };

  showfn(){

    this.showled=false;
  }

  showfnn(){
    console.log("insideapp")
    this.showledmaster=false;
  }

  changfn(value){
    console.log(value);
    if(value==""){

    this.showled=true;
  }

  }

}
