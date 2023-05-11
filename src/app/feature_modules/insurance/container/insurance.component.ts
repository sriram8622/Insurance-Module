import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  images: string[] = ["./assets/insurance-1.jpg", "./assets/insurance-2.jpg", "./assets/insurance-3.jpg"];
  image!: string;
  count: number = 0;
  imageCount: number = 0;
  currentSlideIndex = 0;

  ngOnInit() {
    this.autoSlideShow();

  }

  autoSlideShow() {
    this.imageCount = this.images.length;
    setInterval(() => {
      if (this.count < this.imageCount - 1) {
        this.currentSlideIndex = this.count;
        this.count++;
      } else {
        this.currentSlideIndex = this.count;
        this.count = 0;
      }
    }, 3000);
  }


  changeSlide(n: number, type: string) {
    if (type === "next") {
      if (this.currentSlideIndex < this.imageCount - 1) {
        this.currentSlideIndex += n;
      }
      else {
        this.currentSlideIndex = 0;
      }
    } else {
      if (this.currentSlideIndex === 0) {
        this.currentSlideIndex = this.imageCount - 1;
      }
      else {
        this.currentSlideIndex += n;
      }
    }

  }

}
