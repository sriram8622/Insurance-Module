import { Component, OnInit } from '@angular/core';
import { demoService } from './core/services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('vignesh');
    
  }

}
