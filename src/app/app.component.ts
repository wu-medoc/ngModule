import { appPath } from './app-path';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../dist/style/index.min.css']
})
export class AppComponent {
  title = 'ngModule Demo';
  slidestabData = appPath;
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
