import { Component, OnInit , ElementRef ,ViewChild ,Inject} from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Chart } from 'chart.js';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-led-card',
  templateUrl: './led-card.component.html',
  styleUrls: ['./led-card.component.css']
})
export class LedCardComponent implements OnInit {

  public name='';
  updatetime='';
  currentstate='';
  formatdate='';

  public nname='';
  nupdatetime='';
  ncurrentstate='';

    public tname='';

    public ledtypes:Array<any>=[];
    public lednamedata:Array<any>=[];
    public lednamealldata:Array<any>=[];
    public newdevname:Array<any>=[];
    showhistory:boolean=true;
      chart : any ;
      // public state:boolean = false;


  constructor(
    private requestCall: RequestService, public dialog: MatDialog, private elementRef: ElementRef,
     private datePipe: DatePipe) { }

  ngOnInit() {
    // this.getallleddata();
    this.getallledmaster();


  // this.id = setInterval(() => {
  //   this.getallledmaster();
  // }, 5000);

/*
    this.chart = new Chart('canvas', {
        type: 'line',
        data: temp_max,
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
    */
    let ctx = this.elementRef.nativeElement.querySelector('#canvas');
    var ctx1 = document.getElementById("canvas");
//    console.log(ctx1)


  }

  save() {
  this.requestCall.insert("http://localhost:8000/test/create", {"test": "data to backend"}).subscribe(data => {
    console.log(data);
  });
}

// this.id = setInterval(() => {
public checkstatuss:any[]=[]
  getallledmaster(){
    // this.id = setInterval(() => {
    this.requestCall.getallledmaster().subscribe(res=>{
      console.log(res.data);
      this.ledtypes = res.data
      var index = 0;
      for(var i=0;i<this.ledtypes.length;i++){

      // this
      // this.name =this.ledtypes[i].ledname;
      this.updatetime= this.ledtypes[i].createdAt;
      this.currentstate=this.ledtypes[i].currentstatus;
      console.log(this.ledtypes[i].ledname);
       this.requestCall.getallledname(this.ledtypes[i].ledname).subscribe(res_=>{
         console.log(res_.data)
         if(res_.data.length != 0){

           // this.lednamedata.push(res_.data[res_.data.length - 1])


           this.lednamedata.push(res_.data[res_.data.length - 1])
           this.checkstatuss[index] = res_.data[res_.data.length - 1]['currentstatus'];
           console.log(this.checkstatuss[index])
           index++;
           console.log(this.lednamedata)
           // this.lednamealldata.push(res_.data);
           // this.lednamealldata[];
           // console.log(this.lednamealldata)

           // console.log( this.lednamedata)

         }
         // this.lednamedata.splice(0);
         // console.log( this.lednamedata)
         // var ledarr = [];
         // var temp = '';
         // for(var j=0;j<res_.data.length; j++){
         //   if(temp == res_.data[j].ledname){
         //     console.log(temp)
         //     temp = res_.data[j].ledname;
         //   }else{
         //     console.log(temp);
         //     temp = res_.data[j].ledname;
         //     ledarr.push(res_.data[j-1]);
         //   }
         // }
         // console.log("****************")
         // console.log(ledarr);
         // this.lednamedata=res.data;
         // for(var i=0;i<this.lednamedata.length;i++){
         //   if(this.lednamedata[i].ledname == 'led2'){
         //     console.log(this.lednamedata[i].ledname)
         //     this.nname=this.lednamedata[i].ledname;
         //     this.nupdatetime= this.lednamedata[i].createdAt;
         //     this.ncurrentstate=this.lednamedata[i].currentstatus;
         //   }
         //   if(this.lednamedata[i].ledname == 'thermal_led'){
         //     console.log(this.lednamedata[i].ledname)
         //     this.tname=this.lednamedata[i].ledname;
         //     this.tupdatetime= this.lednamedata[i].createdAt;
         //     this.tcurrentstate=this.lednamedata[i].currentstatus;
         //   }
         //
         // }
       })
        // this.lname =this.ledtypes[i].ledname
        // for(var i=0;i<this.lname.length;i++){
        // console.log(this.lname);

        }
        this.lednamedata=[];
      })
       //  this.lname =this.ledtypes[i].ledname
       //  for(var i=0;i<this.lname.length;i++){
       //  console.log(this.lname);
       //
       //  // this.requestCall.getallledname(this.lname).subscribe(res=>{
       //  //   console.log(res.data);
       // })
     // }
     // }, 5000);
  }




  getallleddata(){


    this.requestCall.getallled().subscribe(res=>{
      console.log(res.data);
      // for
      this.ledtypes = res.data
      for(var i=0;i<this.ledtypes.length;i++){
      // this
      this.name =this.ledtypes[i].ledname;
      this.updatetime= this.ledtypes[i].createdAt;
      this.currentstate=this.ledtypes[i].currentstatus;
      console.log(this.ledtypes[i].ledname)

    }
    // this.offertypes = res.data.reverse();
    // this.localdata=this.offertypes;

    })

  }
  cvalu='';
  chanval(data_ctrl,i){
    this.cvalu=data_ctrl;
    console.log(data_ctrl,i);
    this.requestCall.getledctrl(data_ctrl).subscribe(res_=>{
      console.log(res_.data)
    })


  }

  changefnn(){

    this.showhistory=!this.showhistory;
  }

 openDialog(data): void {

   console.log(data)
   ///////////////////////////
   this.requestCall.getallledname(data).subscribe(res_=>{
     console.log(res_.data)
     if(res_.data.length != 0){
       this.lednamealldata =res_.data;
     }
   })






   /////////////////////////
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',

         // data: {value:this.ledtypes}
    });
    var ctx1 = document.getElementById("canvas");
    console.log(ctx1)
    //let temp_max = [5,0,5]
    let weatherDates = []
    let led_data = []

    for(var i=0;i< this.lednamealldata.length;i++){

      this.name =this.lednamealldata[i].ledname;
      console.log("*********"+this.name)
      this.updatetime= this.lednamealldata[i].createdAt;
      this.currentstate=this.lednamealldata[i].currentstatus;

  this.formatdate =  this.datePipe.transform(this.updatetime,"yyyy-MM-dd")
    weatherDates.push(this.formatdate );
    led_data.push(this.currentstate == true ? 5 : 3)
    console.log("#################"+weatherDates)
    console.log("#################"+led_data)



    }
     this.lednamealldata=[];

    //let leddata = this.ledtypes.currentstatus
    //let alldates = this.ledtypes.createdAt;
    let temp_min = [1,3,5]

  //  console.log(alldates)
  //  console.log(leddata)
  /*  alldates.forEach((res) => {
    let jsdate = new Date(res * 1000)
    weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    })

    leddata.forEach((res) => {
      let value = res == 'true' ? 5 : 1
      led_data.push(value)
    })
*/
    //let weatherDates = ['2019-jan-10','2019-jan-11','2019-jan-12']
    this.chart = new Chart(ctx1, {
               type: 'bar',
               data: {
                 labels: weatherDates,
                 datasets: [
                   {
                     data: led_data,
                     borderColor: "#3cba9f",
                     fill: true
                   },
                 ]
               },
               options: {
                 legend: {
                   display: false
                 },
                 scales: {
                   xAxes: [{
                     display: true
                   }],
                   yAxes: [{
                     display: true
                   }],
                 }
               }
             });


             this.weatherDates=[];
             this.led_data=[];

    dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');

   });
 }

 // for location

 openImageDialog(): void {
    const dialogReff = this.dialog.open(DialogImageDialog, {
      width: '450px',
        // height: '50%',
      // this.ledtypes;

       // data: {value:this.ledtypes}
    });

    dialogReff.afterClosed().subscribe(result => {
     console.log('The dialog was closed');

   });

 }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'dialog-image',
  templateUrl: 'dialog-image.html',
})
export class DialogImageDialog {

  constructor(
    public dialogReff: MatDialogRef<DialogImageDialog>,
    @Inject(MAT_DIALOG_DATA) ) {}

  onNoClick(): void {
    this.dialogReff.close();
  }

}
