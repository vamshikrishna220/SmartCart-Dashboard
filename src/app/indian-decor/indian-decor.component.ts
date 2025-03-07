import { Component } from '@angular/core';

@Component({
  selector: 'app-indian-decor',
  imports: [],
  templateUrl: './indian-decor.component.html',
  styleUrl: './indian-decor.component.scss'
})
export class IndianDecorComponent {
  decorImages: string[] = [
    'assets/images/decor/decor1.jpeg',
    'assets/images/decor/decor2.jpg',
    'assets/images/decor/decor3.jpeg',
    'assets/images/decor/decor4.jpg',
    'assets/images/decor/decor5.jpeg',
    'assets/images/decor/decor6.jpeg',
    'assets/images/decor/decor7.jpeg',
    'assets/images/decor/decor8.jpeg',
    'assets/images/decor/decor9.jpeg',
    'assets/images/decor/decor10.jpeg',
    'assets/images/decor/decor11.jpeg',
    'assets/images/decor/decor12.jpeg',
    'assets/images/decor/decor13.jpeg'
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.decorImages.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.decorImages.length) % this.decorImages.length;
  }
}
