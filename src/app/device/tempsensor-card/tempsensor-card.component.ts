import { Component, OnInit,Inject } from '@angular/core';
import{ TempsensorService } from '../../shared/services/tempsensor.service';
@Component({
  selector: 'app-tempsensor-card',
  templateUrl: './tempsensor-card.component.html',
  styleUrls: ['./tempsensor-card.component.css']
})
export class TempsensorCardComponent implements OnInit {

  public sensortypes:Array<any>=[];
  public sensornamedata:Array<any>=[];
  updatetime='';
  currentstate='';

  constructor( public tempservice: TempsensorService ) { }

  ngOnInit() {
    this.getalltempsensormaster();
  }

  getalltempsensormaster(){
    this.tempservice.findalltempsensormaster().subscribe(res=>{

      console.log(res.data);
      this.sensortypes = res.data
      for(var i=0;i<this.sensortypes.length;i++){
      // this
      // this.name =this.ledtypes[i].ledname;
      this.updatetime= this.sensortypes[i].createdAt;
      this.currentstate=this.sensortypes[i].mintemp;
      console.log(this.sensortypes[i].tempname);
       this.tempservice.findallsensorname(this.sensortypes[i].tempname).subscribe(res_=>{
         console.log(res_.data)
         if(res_.data.length != 0){

           // this.lednamedata.push(res_.data[res_.data.length - 1])
           this.sensornamedata.push(res_.data[res_.data.length - 1])
           // this.sensornamealldata.push(res_.data);
           // console.log(this.lednamealldata)

           console.log( this.sensornamedata)

         }

       })
     }
   })
 }







}
