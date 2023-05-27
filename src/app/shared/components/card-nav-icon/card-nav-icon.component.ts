import { Component, OnInit, Input } from '@angular/core';
import { DynamicNavigation } from '../../models/dynamic-navigation.model';

@Component({
  selector: 'app-card-nav-icon',
  templateUrl: './card-nav-icon.component.html',
  styleUrls: ['./card-nav-icon.component.css']
})
export class CardNavIconComponent implements OnInit {
  @Input() navList!: DynamicNavigation[];
  constructor() { }

  ngOnInit() {
  }

}
