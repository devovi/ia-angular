import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../services/view.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public Ledshow: boolean;
  public isEdit: boolean;
  public Led: any = 'Ledshow';
  public inActive: boolean;
  public selectedEditLed: Object;
  public rangevalue = 0  ;
  public ledcolor = null;
  public ledname = null;
  public buildingname = null;
  public floorno = 0;
  public ledEditId = null;

  constructor(private viewService: ViewService) {
    this.Ledshow = true;
    this.isEdit = false;
    this.selectedEditLed = {};
  }
  ledList = [];
  leds  = [ 'Red', 'Blue', 'Green'];
  valueChanged(e) {
    this.rangevalue = (e.target.value);
  }
  ledcolorvalueChanged(e) {
    this.ledcolor = (e.target.value);
  }
  lednamevalue(e) {
    this.ledname = (e.target.value);
 }
 bulidingnamevalue(e) {
   this.buildingname = (e.target.value);
 }
 floornumbervalue(e) {
    this.floorno = (e.target.value);
 }
  ngOnInit() {
    this.getAllLedList();
  }
  getAllLedList() {
    this.viewService.getData().subscribe( res => {
      console.log(res);
      this.ledList = res.data;
    });
  }
  Ledtoggle() {
    this.Ledshow = !this.Ledshow;
  }

  deleteData(item) {
    const fToDelete = confirm(`Are you sure to delete?`);
    if (fToDelete === true) {
      this.viewService.deleteData({id: item._id}).subscribe( res => {
        this.getAllLedList();
      });
    }
  }
  changeStatus(ledItem) {
    this.selectedEditLed = ledItem;
    this.isEdit = true;
    this.rangevalue = ledItem.brightness;
    this.ledcolor = ledItem.color;
    this.ledname = ledItem.ledname;
    this.buildingname = ledItem.buildingname;
    this.floorno = ledItem.floorno;
    this.ledEditId = ledItem._id;
  }

  onCancelClick() {
    this.isEdit = false;
  }

  onLedUpdate() {
    const data = {
      brightness: this.rangevalue,
      ledname: this.ledname,
      buildingname: this.buildingname,
      floorno: this.floorno,
      color: this.ledcolor,
      id: this.ledEditId
    };
    console.log(data);
    this.viewService.updateLed(data).subscribe(res => {
      this.isEdit = false;
      this.getAllLedList();
    });
  }


}
