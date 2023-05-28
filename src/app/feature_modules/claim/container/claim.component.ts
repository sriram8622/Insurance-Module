import { Component } from '@angular/core';
import { DynamicNavigation } from 'src/app/shared/models/dynamic-navigation.model';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent {
  displayNavList: DynamicNavigation[] = [
    {
      label: 'Car',
      url: 'car-claim',
      icon: 'directions_car'
    },
    {
      label: 'Bike',
      url: 'bike-claim',
      icon: 'two_wheeler'
    },
    {
      label: 'Health',
      url: 'health-claim',
      icon: 'health_and_safety'
    }
  ]

}
