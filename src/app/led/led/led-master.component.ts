import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import {LedMasterService} from '../../services/led-master.service';

@Component({
  selector: 'app-led-master',
  templateUrl: './led-master.component.html',
  styleUrls: ['./led-master.component.css']
})
export class LedMasterComponent implements OnInit {
public Addshow: boolean ;
public ADD: any = 'Addshow';
public ledmastershow: boolean ;
public LED: any = 'ledmastershow';
public form: FormGroup;
public message: string;
leds  = [ 'Red', 'Blue', 'Green'];
 public rangevalue = 0;
 public ledname = null;
 public buildingname = null;
 public floorno = 0;
 public ledcolor = '';
 public showFiller = false;
 public listFiller = true;

  constructor(private ledMasterservice: LedMasterService) {
    this.Addshow = false;
    this.ledmastershow = false;
    this.form = new FormGroup ({
      key: new FormControl('null'),
      floorNo: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(25)]) ,
      ledName: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(25)]),
      Brigthness: new FormControl(''),
      ledcolor: new FormControl(''),
      buildingname: new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(25)] )
    });
  }
  // formValidationMessage = {
  //   ledName: [
  //     { type: 'required', message: 'ledname is required'},
  //     { type: 'minlength', message: 'ledname must be at least 5 characters long' },
  //     { type: 'maxlength', message: 'ledname cannot be more than 25 characters long' },
  //     { type: 'pattern', message: 'Your ledname must contain only numbers and letters' },
  //     { type: 'validUsername', message: 'Your ledname has already been taken' }
  //      ]
  // };

  public ngOnInit(): void {
    this.form.controls.floorNo.valueChanges.subscribe(value => {
      if (!value) {
        this.form.controls.floorNo.setErrors({required : true });
        this.message = 'Floor No. is required';
       }// else if(this.form.controls.floorNo.hasError(length)) {
      //   this.message = 'Minlength violation'  ;
      // }
    });
    // this.form.controls.ledName.valueChanges.subscribe(ledValue => {
    //   if (!ledValue) {
    //     this.form.controls.ledName.setErrors({required : true });
    //     this.message = 'ledName. is required';
    //    }// else if(this.form.controls.floorNo.hasError(length)) {
    //   //   this.message = 'Minlength violation'  ;
    //   // }
    // });
  }


valueChanged(e) {
  this.rangevalue = (e.target.value);
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
    brightness: this.rangevalue,
    ledname: this.ledname,
    buildingname: this.buildingname,
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
  this.buildingname = null;
  this.floorno = 0;
  this.ledcolor = '';
}
}
