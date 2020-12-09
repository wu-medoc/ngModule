import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  swiperOptionDataBn = {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopPreventsSlide: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
