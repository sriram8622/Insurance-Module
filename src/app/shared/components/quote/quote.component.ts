import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  vehicleCat!:string;
  flag:boolean=false;
  phoneNumber!:string;
  onradio(flag:boolean){
      this.flag = flag;    
  }
}
