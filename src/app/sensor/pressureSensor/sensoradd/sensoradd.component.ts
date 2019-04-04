import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import {PressureSensorService} from '../../../services/pressure-sensor.service';
import {SensorviewComponent} from '../../../sensor/pressureSensor/sensorview/sensorview.component';
@Component({
  selector: 'app-sensoradd',
  templateUrl: './sensoradd.component.html',
  styleUrls: ['./sensoradd.component.css']
})
export class SensoraddComponent implements OnInit {
  public form: FormGroup;
  public sensorName: string;
  public minValue: '';
  public maxValue: '';
  public mode: '';
    constructor(public PressuresensorService: PressureSensorService, public sensorviewComponent: SensorviewComponent ) {
      this.form = new FormGroup ({
        key: new FormControl('null'),
        sensorName: new FormControl('', [Validators.required]) ,
        minValue: new FormControl('', [Validators.required]),
        maxValue: new FormControl(''),
        mode: new FormControl(''),
      });
    }
    mintemps  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
    maxtemps  = [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 
                  55, 56, 57, 58, 59, 60 ];
    modes = ['disable', 'enable'] ;
    sensorList = [];
    ngOnInit() {
    }
    sensorvalue(e) {
      this.sensorName = (e.target.value);
    }
    tempminvalueChanged(e) {
      this.minValue = (e.target.value);
    }
    tempmaxvalueChanged(e) {
      this.maxValue = (e.target.value);
    }
    modevalueChanged(e) {
      this.mode = (e.target.value);
    }
    save() {
      const data = {
        mintemp: this.minValue,
        tempname: this.sensorName,
        mode: this.mode,
        maxtemp: this.maxValue,
      };
      console.log(data);
      this.PressuresensorService.saveData(data).subscribe(res => {
        console.log(res);
        // this.sensorviewComponent.addandView();
      });
    }
    clearall() {
      this.minValue = '';
      this.sensorName = null;
      this.mode = '';
      this.maxValue = '';

    }

}
