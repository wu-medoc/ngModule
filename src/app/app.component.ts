import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngModule Demo';
  slidestabData = [
    'Home', 'Travel', 'Explore'
  ];
  swiperOptionData = {
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false
  };
}
