import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  images: string[] = ["./assets/insurance-1.jpg", "./assets/insurance-2.jpg","./assets/insurance-3.jpg"];
  image!:string;
  ngOnInit() {
    this.slideShow();
    
  }
  slideShow(){
    let count=0;
    

    
      setTimeout(()=>{
       console.log("vignesh");
      },3000)  
    
  
       
  }

  slideIndex: number = 0;

  changeSlide(n: number) {
    this.slideIndex += n;
  }

}
