import { Component } from '@angular/core';
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // imports: [NgFor]
})
export class HomeComponent {
  constructor() {
    console.log('home Component Loaded');
  }

  giftImages = [
    { src: '/assets/images/article1.jpg', alt: 'Handmade Jewelry' },
    { src: '/assets/images/article2.jpg', alt: 'Customized Mugs' },
    { src: '/assets/images/article3.jpg', alt: 'Photo Frames' },
    { src: '/assets/images/article4.jpg', alt: 'Scented Candles' }
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.giftImages.length;
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.giftImages.length) % this.giftImages.length;
  }
}