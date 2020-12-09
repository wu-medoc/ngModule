import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit, AfterViewInit {
  slides = [
    'https://picsum.photos/id/2/500/300/',
    'https://picsum.photos/id/4/300/400/',
    'https://picsum.photos/id/6/300/300/'
  ];
  @Input() swiperOptionBn: string;

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

}
