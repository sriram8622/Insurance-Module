import { Component, OnInit } from '@angular/core';
import { demoService } from '../../services/demo.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private demoService: demoService){}

  ngOnInit() {
    this.getBrand();
  }

  getBrand(){
    this.demoService.getBrand().subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }
}
