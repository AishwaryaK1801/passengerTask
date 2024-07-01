import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  @ViewChild('passName') passName !: ElementRef
  @ViewChild('editBtn') editRef !: ElementRef
  @ViewChild('doneBtn') updateRef !: ElementRef
  @Input() getPassengerArr !: Array<Ipassenger> 
  @Input() getPassengerObj !: Ipassenger
  @Output() emitPassengerObj : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    console.log(this.passName.nativeElement);
    
    this.passName.nativeElement.removeAttribute('disabled')
    this.passName.nativeElement.style.borderColor="grey"
    this.editRef.nativeElement.style.display = 'none'
    this.updateRef.nativeElement.style.display = 'block'
  }
  onDone(){
    let inputControl = this.passName.nativeElement as HTMLInputElement;

    let val = inputControl.value as string;

    this.getPassengerObj.passengerName=val;

    this.passName.nativeElement.setAttribute('disabled', 'disabled');

    this.passName.nativeElement.style.backgroundColor="#fff";
    this.passName.nativeElement.style.borderColor="transparent";

    this.editRef.nativeElement.style.display ='block';
    this.updateRef.nativeElement.style.display='none';

  }

  
  onDelete(){
    confirm('are you sure you want to remove this passenger!')
    this.emitPassengerObj.emit(this.getPassengerObj)
  }

}
