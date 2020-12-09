import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwiperComponent } from './swiper/swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperNavComponent } from './swiper-nav/swiper-nav.component';


@NgModule({
  declarations: [SwiperComponent, SwiperNavComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    NgxUsefulSwiperModule
  ],
  exports: [SwiperComponent, SwiperNavComponent]
})
export class TemplateModule { }
