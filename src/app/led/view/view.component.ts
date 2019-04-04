import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../services/view.service';
import { FormControl, FormGroup } from '@angular/forms';
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
  public hideAdd:boolean = true;
  public addCard: boolean = true;

public Addshow: boolean ;
public ADD: any = 'Addshow';
  public form: FormGroup;
  constructor(private viewService: ViewService) {
    this.Ledshow = true;
    this.isEdit = false;
    this.selectedEditLed = {};
    this.form = new FormGroup ({
      key: new FormControl('null'),
      floorNo: new FormControl() ,
      ledName: new FormControl(''),
      Brigthness: new FormControl(''),
      ledcolor: new FormControl(''),
      buildingname: new FormControl('')
    });
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
 Addtoggle() {
  this.addCard = false;
}

addandView() {
  this.addCard = true;
}

  ngOnInit() {
    this.getAllLedList();
  }
  getAllLedList() {
    this.viewService.getData().subscribe( res => {
      console.log(res);
      this.ledList = res.data;
      this.ledList.reverse();
    });
  }
  Ledtoggle() {
    this.Ledshow = !this.Ledshow;
  }
showHide() {
  this.hideAdd = true;
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
    this.viewService.updateLed(data).subscribe(res => {
      this.isEdit = false;
      this.getAllLedList();
    });
  }


}
