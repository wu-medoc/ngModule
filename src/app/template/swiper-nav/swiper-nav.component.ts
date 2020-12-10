import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-nav',
  templateUrl: './swiper-nav.component.html',
  styleUrls: ['./swiper-nav.component.css', '../../../dist/style/navlink.min.css']
})
export class SwiperNavComponent implements OnInit {
  @Input() slidestab: string;
  @Input() swiperOption: string;
  public headingPage = '';

  /** 判斷routerLinkActive 預設0 */
  public idxNav = 0;
  // tslint:disable-next-line: typedef
  clickEvent(i) {
    this.idxNav = i;
  }

  constructor() { }
  ngOnInit(): void {
  }

}
