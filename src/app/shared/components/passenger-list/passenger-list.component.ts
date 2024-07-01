import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

  @Input() getPassengerArr !: Array<Ipassenger> 
  constructor() { }

  ngOnInit(): void {
  }

}
