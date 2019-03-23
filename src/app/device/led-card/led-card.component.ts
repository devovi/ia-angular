import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';

@Component({
  selector: 'app-led-card',
  templateUrl: './led-card.component.html',
  styleUrls: ['./led-card.component.css']
})
export class LedCardComponent implements OnInit {
  name='';
  updatetime='';
  currentstate='';

    public ledtypes:Array<any>=[];
    showhistory:boolean=true;
    // public state:boolean = false;

  constructor(
    private requestCall: RequestService) { }

  ngOnInit() {

    this.getallleddata();
  }

  save() {
  this.requestCall.insert("http://localhost:8000/test/create", {"test": "data to backend"}).subscribe(data => {
    console.log(data);
  });
}

// var id = setInterval(() => {
//
//   }, 5000);

getallleddata(){
  this.requestCall.getallled().subscribe(res=>{
   console.log(res.data);
    this.ledtypes = res.data
    for(var i=0;i<this.ledtypes.length;i++){
      // this
      this.name =this.ledtypes[i].ledname;
      this.updatetime= this.ledtypes[i].createdAt;
      this.currentstate=this.ledtypes[i].currentstatus;
    console.log(this.ledtypes[i].ledname)
    // console.log(this.currentstate);
    }
  // this.offertypes = res.data.reverse();
  // this.localdata=this.offertypes;

  })
 }
cvalu='';
 chanval(valu){
   this.cvalu=valu;
   // console.log(valu)
 }

 changefnn(){

   this.showhistory=!this.showhistory;
 }


}
