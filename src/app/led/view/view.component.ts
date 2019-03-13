import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../services/view.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public Ledshow: boolean;
  public Led: any = 'Ledshow';

  constructor(private viewService: ViewService) {
    this.Ledshow = false;
  }

  ledList = [];
  leds  = [ 'Red', 'Blue', 'Green'];

  ngOnInit() {
    this.viewService.getData().subscribe( res => {
      console.log(res);
      this.ledList = res.data;
    });
    this.viewService.deleteData().subscribe( res => {
      console.log(res);
      this.ledList = res.data;
    });
  }
  Ledtoggle() {
    this.Ledshow = !this.Ledshow;
  }


}
