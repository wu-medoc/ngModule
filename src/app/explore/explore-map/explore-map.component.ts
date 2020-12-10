import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { explorePath } from '../explore-path';

@Component({
  selector: 'app-explore-map',
  templateUrl: './explore-map.component.html',
  styleUrls: ['./explore-map.component.css']
})
export class ExploreMapComponent implements OnInit, AfterViewInit {
  slidestabData = explorePath;
  swiperOptionData = {
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false
  };

  constructor() { }
  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}

