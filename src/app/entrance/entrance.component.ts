import { Component, OnInit } from '@angular/core';
import { explorePath } from '../explore/explore-path';
import { storePath } from './stroe-path';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  public id: Number;
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
  slidestabData = explorePath;
  slidestabData2 = storePath;
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
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(data => this.id = data.id);
  }

}
