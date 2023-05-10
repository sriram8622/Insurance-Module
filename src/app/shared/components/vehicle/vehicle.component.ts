import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleCat!: string;
  flag: boolean = false;
  phoneNumber!: string;
  onradio(flag: boolean) {
    this.flag = flag;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
