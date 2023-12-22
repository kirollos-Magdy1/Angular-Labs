import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  imgCnt: number = 5;
  currentImg: number = 0;
  imgSrc: string = `assets/Images/${this.currentImg}.jpg`;
  intervalId: any;

  nextImg() {
    this.currentImg++;
    if (this.currentImg > this.imgCnt) {
      this.currentImg = 5;
    }
    this.imgSrc = `assets/Images/${this.currentImg}.jpg`;
  }

  prevImg() {
    this.currentImg--;
    if (this.currentImg < 0) {
      this.currentImg = 0;
    }
    this.imgSrc = `assets/Images/${this.currentImg}.jpg`;
  }

  startSlideShow() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.currentImg++;
      if (this.currentImg > this.imgCnt) {
        this.currentImg = 0;
      }
      this.imgSrc = `assets/Images/${this.currentImg}.jpg`;
    }, 500);
  }
  stopSlideShow() {
    clearInterval(this.intervalId);
  }
}
