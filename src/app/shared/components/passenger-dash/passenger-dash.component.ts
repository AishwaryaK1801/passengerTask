import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dash',
  templateUrl: './passenger-dash.component.html',
  styleUrls: ['./passenger-dash.component.scss']
})
export class PassengerDashComponent implements OnInit {


  passengerArr : Array<Ipassenger> = [
    {
      passengerName : 'Stephen',
      checkInDate : 1746515123625,
      checkInStatus : true,
      children :0,
      id :111
    },
    {
      passengerName : 'Rose',
      checkInDate : 1746515123789,
      checkInStatus : false,
      children :2,
      id :222
    },
    {
      passengerName : 'James',
      checkInDate : 1746515123564,
      checkInStatus : true,
      children :0,
      id :333
    },
    {
      passengerName : 'Louice',
      checkInDate : 1746515123231,
      checkInStatus : true,
      children :1,
      id :444
    },
    {
      passengerName : 'Tina',
      checkInDate : 1746515123753,
      checkInStatus : false,
      children :0,
      id :555
    }
  ]

  checkedInArr!:Array<Ipassenger>

  
  

  constructor() { }

  ngOnInit(): void {
    this.checkedInArr=this.passengerArr.filter(pass=>pass.checkInStatus===true)

   console.log(this.checkedInArr);
   
  }

  onObjGet(obj:Ipassenger){
    console.log(obj);

    let objIndx= this.passengerArr.findIndex(passobj=>{
     return passobj.id===obj.id
    })

    console.log(objIndx);
    
    this.passengerArr.splice(objIndx,1)

   if(obj.checkInStatus===true){
    let objIndx1= this.checkedInArr.findIndex(passobj=>{
      return passobj.id===obj.id
     })
     this.checkedInArr.splice(objIndx1,1)
   }
  }

}
