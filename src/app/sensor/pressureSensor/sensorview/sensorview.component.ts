import { Component, OnInit } from '@angular/core';
import {PressureSensorService} from '../../../shared/services/pressure-sensor.service';
@Component({
  selector: 'app-sensorview',
  templateUrl: './sensorview.component.html',
  styleUrls: ['./sensorview.component.css']
})
export class SensorviewComponent implements OnInit {
public sensorMinValue: number;
public sensorMaxValue: number;
public modevalue: string;
public sensorName: string;
public addCard: boolean;
public isEdit: boolean;
public selectedEditLed: object;
public sensorEditId = null;
  constructor(public pressureSensorService: PressureSensorService ) {
    this.isEdit = false;
    this.selectedEditLed = {};
   }
  mintemps  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
  maxtemps  = [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
                55, 56, 57, 58, 59, 60 ];
  modes = ['disable', 'enable'] ;
  // sensorList = [];
  public sensorList: Array<any> = [];
  ngOnInit() {
    this.getAllLedList();
  }
  addandView() {
    this.addCard = true;
  }
  sensorvalue(e) {
    this.sensorName = (e.target.value);
  }
  tempminvalueChanged(e) {
    this.sensorMinValue = (e.target.value);
  }
  tempmaxvalueChanged(e) {
    this.sensorMaxValue = (e.target.value);
  }
  modevalueChanged(e) {
    this.modevalue = (e.target.value);
  }
  changeStatus(sensorItem) {
    this.selectedEditLed = sensorItem;
    this.isEdit = true;
    this.sensorName = sensorItem.tempname;
    this.sensorMinValue = sensorItem.mintemp;
    this.sensorMaxValue = sensorItem.maxtemp;
    this.modevalue = sensorItem.mode;
    this.sensorEditId = sensorItem._id;
  }
  deleteData(item) {
    const fToDelete = confirm(`Are you sure to delete?`);
    if (fToDelete === true) {
      this.pressureSensorService.deleteData({id: item._id}).subscribe( res => {
        this.getAllLedList();
      });
    }
  }
  onCancelClick() {
   this.isEdit =  false;
  }
  onLedUpdate() {
 const data = {
  tempname: this.sensorName ,
  mintemp: this.sensorMinValue,
  maxtemp: this.sensorMaxValue,
  mode: this.modevalue,
  id: this.sensorEditId
 };
 this.pressureSensorService.updateSensor(data).subscribe (res => {
  this.isEdit = false;
  this.getAllLedList();
 });
}
  getAllLedList() {
    this.pressureSensorService.getData().subscribe( res => {
      console.log(res.data);
      this.sensorList = res.data;
      this.sensorList.reverse();
    });
  }
}
