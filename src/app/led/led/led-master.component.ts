import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import {LedMasterService} from '../../services/led-master.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-led-master',
  templateUrl: './led-master.component.html',
  styleUrls: ['./led-master.component.css']
})
export class LedMasterComponent  {
public Addshow: boolean ;
public ADD: any = 'Addshow';
public ledmastershow: boolean ;
public LED: any = 'ledmastershow';
public form: FormGroup;
leds  = [ 'Red', 'Blue', 'Green'];
  constructor(private ledMasterservice: LedMasterService) {
    this.Addshow = false;
    this.ledmastershow = false;
    this.form = new FormGroup ({
      key: new FormControl('null'),
      floorNo: new FormControl('', [Validators.required , Validators.minLength(1) , Validators.maxLength(25)]) ,
      ledName: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(25)]),
      Brigthness: new FormControl(''),
      ledcolor: new FormControl(''),
      BulidingName: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(25)] )
    });
  }
  formValidationMessage = {
    ledName: [
      { type: 'required', message: 'ledname is required'},
      { type: 'minlength', message: 'ledname must be at least 5 characters long' },
      { type: 'maxlength', message: 'ledname cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your ledname must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your ledname has already been taken' }
       ]
  };
  rangevalue = 0;
  ledname = null;
  bulidingname = null;
  floorno = 0;
  ledcolor = '';
valueChanged(e) {
  this.rangevalue = (e.target.value);
}
lednamevalue(e) {
   this.ledname = (e.target.value);
}
bulidingnamevalue(e) {
  this.bulidingname = (e.target.value);
}
floornumbervalue(e) {
   this.floorno = (e.target.value);
}
ledcolorvalueChanged(e) {
  this.ledcolor = (e.target.value);
}

 Addtoggle() {
   this.Addshow = !this.Addshow;
 }
 Addtogglledmastertogglee() {
  this.ledmastershow = !this.ledmastershow;
}
save() {
  const data = {
    rangevalue: this.rangevalue,
    ledname: this.ledname,
    bulidingname: this.bulidingname,
    floorno: this.floorno,
    color: this.ledcolor
  };
  console.log(data);
  this.ledMasterservice.saveData(data).subscribe(res => {
    console.log(res);
  });
}
clearall() {
  this.rangevalue = 0;
  this.ledname = null;
  this.bulidingname = null;
  this.floorno = 0;
  this.ledcolor = '';
}

}
