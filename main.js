(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\eyesmedia\GitHub\ngModule\src\main.ts */"zUnb");


/***/ }),

/***/ "13DZ":
/*!*****************************************************!*\
  !*** ./src/app/function/function-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FunctionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionRoutingModule", function() { return FunctionRoutingModule; });
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404/error404.component */ "zvxH");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "LefO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: 'Footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"] },
    { path: 'Error404', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__["Error404Component"] }
];
class FunctionRoutingModule {
}
FunctionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FunctionRoutingModule });
FunctionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FunctionRoutingModule_Factory(t) { return new (t || FunctionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FunctionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FunctionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "2pz4":
/*!*****************************************!*\
  !*** ./src/app/explore/explore-path.ts ***!
  \*****************************************/
/*! exports provided: explorePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explorePath", function() { return explorePath; });
const explorePath = [
    { title: 'ExploreMap', path: '/Explore/ExploreMap' },
    { title: 'ExploreDetail', path: '/Explore/ExploreDetail' },
    { title: 'ExploreList', path: '/Explore/ExploreList' },
    { title: 'DeliveryInfo', path: '/Explore/DeliveryInfo' }
];


/***/ }),

/***/ "4BHx":
/*!*****************************!*\
  !*** ./src/app/app-path.ts ***!
  \*****************************/
/*! exports provided: appPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPath", function() { return appPath; });
const appPath = [
    { title: 'Home', path: '/Home' },
    { title: 'Travel', path: '/Travel' },
    { title: 'Explore', path: '/Explore' }
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LefO":
/*!*****************************************************!*\
  !*** ./src/app/function/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "[function.module] footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MTV9":
/*!**************************************************************!*\
  !*** ./src/app/explore/explore-map/explore-map.component.ts ***!
  \**************************************************************/
/*! exports provided: ExploreMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapComponent", function() { return ExploreMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _explore_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-path */ "2pz4");
/* harmony import */ var _template_swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../template/swiper-nav/swiper-nav.component */ "WABW");
/* harmony import */ var _function_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../function/footer/footer.component */ "LefO");





class ExploreMapComponent {
    constructor() {
        this.slidestabData = _explore_path__WEBPACK_IMPORTED_MODULE_1__["explorePath"];
        this.swiperOptionData = {
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
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
    }
}
ExploreMapComponent.ɵfac = function ExploreMapComponent_Factory(t) { return new (t || ExploreMapComponent)(); };
ExploreMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreMapComponent, selectors: [["app-explore-map"]], decls: 4, vars: 2, consts: [[3, "slidestab", "swiperOption"]], template: function ExploreMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "explore-map works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-swiper-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slidestab", ctx.slidestabData)("swiperOption", ctx.swiperOptionData);
    } }, directives: [_template_swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_2__["SwiperNavComponent"], _function_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS1tYXAvZXhwbG9yZS1tYXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explore-map',
                templateUrl: './explore-map.component.html',
                styleUrls: ['./explore-map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-path */ "4BHx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _template_swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/swiper-nav/swiper-nav.component */ "WABW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'ngModule Demo';
        this.slidestabData = _app_path__WEBPACK_IMPORTED_MODULE_0__["appPath"];
        this.swiperOptionData = {
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[3, "slidestab", "swiperOption"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-swiper-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("slidestab", ctx.slidestabData)("swiperOption", ctx.swiperOptionData);
    } }, directives: [_template_swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_2__["SwiperNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UXzO":
/*!************************************************!*\
  !*** ./src/app/entrance/entrance.component.ts ***!
  \************************************************/
/*! exports provided: EntranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntranceComponent", function() { return EntranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _template_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/swiper/swiper.component */ "fET8");
/* harmony import */ var _function_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../function/footer/footer.component */ "LefO");




class EntranceComponent {
    constructor() {
        this.swiperOptionDataBn = {
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
    }
    ngOnInit() {
    }
}
EntranceComponent.ɵfac = function EntranceComponent_Factory(t) { return new (t || EntranceComponent)(); };
EntranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntranceComponent, selectors: [["app-entrance"]], decls: 4, vars: 1, consts: [[3, "swiperOptionBn"]], template: function EntranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "entrance works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-swiper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiperOptionBn", ctx.swiperOptionDataBn);
    } }, directives: [_template_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"], _function_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJhbmNlL2VudHJhbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entrance',
                templateUrl: './entrance.component.html',
                styleUrls: ['./entrance.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WABW":
/*!*************************************************************!*\
  !*** ./src/app/template/swiper-nav/swiper-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: SwiperNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperNavComponent", function() { return SwiperNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return [a0]; };
function SwiperNavComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemtab_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-history", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, itemtab_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemtab_r1.title);
} }
class SwiperNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
SwiperNavComponent.ɵfac = function SwiperNavComponent_Factory(t) { return new (t || SwiperNavComponent)(); };
SwiperNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperNavComponent, selectors: [["app-swiper-nav"]], inputs: { slidestab: "slidestab", swiperOption: "swiperOption" }, decls: 7, vars: 2, consts: [[1, "afp-tab-box"], [1, "afp-tab"], [1, "nav-tabs-box", "swiper-container", 3, "config"], ["id", "nav-tab-member", "role", "tablist", 1, "swiper-wrapper", "nav", "nav-tabs"], ["class", "swiper-slide", "role", "presentation", 4, "ngFor", "ngForOf"], ["role", "presentation", 1, "swiper-slide"], ["routerLinkActive", "active", 1, "tablist-link", "show", 3, "routerLink"]], template: function SwiperNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "swiper-nav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "swiper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SwiperNavComponent_li_6_Template, 3, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.swiperOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidestab);
    } }, directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3N3aXBlci1uYXYvc3dpcGVyLW5hdi5jb21wb25lbnQuY3NzIn0= */", ".afp-tab-box[_ngcontent-%COMP%]   #nav-tab[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-hitArea[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-deliveryArea[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-member[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-featured[_ngcontent-%COMP%]{display:inline-table;overflow:visible;white-space:nowrap}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-hitArea[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-deliveryArea[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-member[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-featured[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9em;text-align:center;list-style:none;display:inline-block;white-space:nowrap;overflow:hidden}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab.nav-tabs[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-hitArea.nav-tabs[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-deliveryArea.nav-tabs[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-member.nav-tabs[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab-featured.nav-tabs[_ngcontent-%COMP%]{border-bottom:0px}.afp-tab-box[_ngcontent-%COMP%]   .tablist-panes[_ngcontent-%COMP%]{position:relative;display:block}.afp-tab-box[_ngcontent-%COMP%]   .nav-tab-list[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab.nav-tabs[_ngcontent-%COMP%]{display:flex;flex-wrap:inherit;padding-left:0;margin-bottom:0;list-style:none;text-align:center;border-bottom:0px}.afp-tab-box[_ngcontent-%COMP%]   .nav-tab-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#8E8E93;text-decoration:none;position:relative;transition:.5s color;border:none;display:block;flex-grow:1;flex-basis:0;text-align:center;white-space:nowrap}.afp-tab-box[_ngcontent-%COMP%]   .nav-tab-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-table;width:100%;height:100%;color:#8E8E93;width:100%;background-color:transparent}.afp-tab-box[_ngcontent-%COMP%]   .nav-tab-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .afp-tab-box[_ngcontent-%COMP%]   #nav-tab.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700;color:#FD5F00;border-bottom:solid 3px #FD5F00;animation-name:tabline;animation-duration:0.7s;animation-fill-mode:forwards}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab-storedetail.nav-tabs[_ngcontent-%COMP%]{display:flex;flex-wrap:inherit;padding-left:0;margin-bottom:0;list-style:none;text-align:center;border-bottom:0px;line-height:3.8em;background-color:#fff}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab-storedetail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9em;color:#8E8E93;text-decoration:none;position:relative;transition:.5s color;border:none;display:block;flex-grow:1;flex-basis:0;text-align:center;white-space:nowrap}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab-storedetail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.1em;display:inline-table;width:100%;height:100%;color:#8E8E93;width:100%;background-color:transparent}.afp-tab-box[_ngcontent-%COMP%]   #nav-tab-storedetail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700;color:#FD5F00;border-bottom:solid 3px #FD5F00;animation-name:tabline;animation-duration:0.7s;animation-fill-mode:forwards}.store-tab-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#8E8E93;text-decoration:none;position:relative;transition:.5s color;border:none;display:block;flex-grow:1;flex-basis:0;text-align:center;white-space:nowrap}.store-tab-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .store-tab-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{display:inline-table;width:100%;height:100%;color:#8E8E93;width:100%;background-color:transparent;border-color:transparent}.store-tab-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .store-tab-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]{font-weight:700;color:#FD5F00;border-bottom:solid 3px #FD5F00;animation-name:tabline;animation-duration:0.7s;animation-fill-mode:forwards}.afp-tab-box[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]{min-height:50px}.afp-tab-box[_ngcontent-%COMP%]   a.tablist-link[_ngcontent-%COMP%]{display:inline-table;width:100%;height:100%;color:#8E8E93;width:100%;background-color:transparent}.afp-tab-box[_ngcontent-%COMP%]   a.tablist-link.active[_ngcontent-%COMP%]{font-weight:700;color:#FD5F00;border-bottom:solid 3px #FD5F00;animation-name:tabline;animation-duration:0.7s;animation-fill-mode:forwards}@keyframes tabline{from{width:0}to{width:100%}}\n/*# sourceMappingURL=navlink.min.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaXN0L3N0eWxlL25hdmxpbmsubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtSkFBbUosb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsa0tBQWtLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGdNQUFnTSxpQkFBaUIsQ0FBQyw0QkFBNEIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLDBEQUEwRCxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsb0VBQW9FLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxrRkFBa0YsZUFBZSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsQ0FBQywyQ0FBMkMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLDhDQUE4QyxjQUFjLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxnREFBZ0QsZUFBZSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyx1REFBdUQsZUFBZSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsQ0FBQyxrQkFBa0IsYUFBYSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyx5REFBeUQsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLHVFQUF1RSxlQUFlLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLHVCQUF1QixlQUFlLENBQUMsNEJBQTRCLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxtQ0FBbUMsZUFBZSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsQ0FBQyxtQkFBbUIsS0FBSyxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FDcnJHLDBDQUEwQyIsImZpbGUiOiJzcmMvZGlzdC9zdHlsZS9uYXZsaW5rLm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWZwLXRhYi1ib3ggI25hdi10YWIsLmFmcC10YWItYm94ICNuYXYtdGFiLWhpdEFyZWEsLmFmcC10YWItYm94ICNuYXYtdGFiLWRlbGl2ZXJ5QXJlYSwuYWZwLXRhYi1ib3ggI25hdi10YWItbWVtYmVyLC5hZnAtdGFiLWJveCAjbmF2LXRhYi1mZWF0dXJlZHtkaXNwbGF5OmlubGluZS10YWJsZTtvdmVyZmxvdzp2aXNpYmxlO3doaXRlLXNwYWNlOm5vd3JhcH0uYWZwLXRhYi1ib3ggI25hdi10YWIgbGksLmFmcC10YWItYm94ICNuYXYtdGFiLWhpdEFyZWEgbGksLmFmcC10YWItYm94ICNuYXYtdGFiLWRlbGl2ZXJ5QXJlYSBsaSwuYWZwLXRhYi1ib3ggI25hdi10YWItbWVtYmVyIGxpLC5hZnAtdGFiLWJveCAjbmF2LXRhYi1mZWF0dXJlZCBsaXtmb250LXNpemU6LjllbTt0ZXh0LWFsaWduOmNlbnRlcjtsaXN0LXN0eWxlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn0uYWZwLXRhYi1ib3ggI25hdi10YWIubmF2LXRhYnMsLmFmcC10YWItYm94ICNuYXYtdGFiLWhpdEFyZWEubmF2LXRhYnMsLmFmcC10YWItYm94ICNuYXYtdGFiLWRlbGl2ZXJ5QXJlYS5uYXYtdGFicywuYWZwLXRhYi1ib3ggI25hdi10YWItbWVtYmVyLm5hdi10YWJzLC5hZnAtdGFiLWJveCAjbmF2LXRhYi1mZWF0dXJlZC5uYXYtdGFic3tib3JkZXItYm90dG9tOjBweH0uYWZwLXRhYi1ib3ggLnRhYmxpc3QtcGFuZXN7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uYWZwLXRhYi1ib3ggLm5hdi10YWItbGlzdCwuYWZwLXRhYi1ib3ggI25hdi10YWIubmF2LXRhYnN7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDppbmhlcml0O3BhZGRpbmctbGVmdDowO21hcmdpbi1ib3R0b206MDtsaXN0LXN0eWxlOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLWJvdHRvbTowcHh9LmFmcC10YWItYm94IC5uYXYtdGFiLWxpc3QgbGksLmFmcC10YWItYm94ICNuYXYtdGFiLm5hdi10YWJzIGxpe2NvbG9yOiM4RThFOTM7dGV4dC1kZWNvcmF0aW9uOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjouNXMgY29sb3I7Ym9yZGVyOm5vbmU7ZGlzcGxheTpibG9jaztmbGV4LWdyb3c6MTtmbGV4LWJhc2lzOjA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5hZnAtdGFiLWJveCAubmF2LXRhYi1saXN0IGxpIGEsLmFmcC10YWItYm94ICNuYXYtdGFiLm5hdi10YWJzIGxpIGF7ZGlzcGxheTppbmxpbmUtdGFibGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjb2xvcjojOEU4RTkzO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uYWZwLXRhYi1ib3ggLm5hdi10YWItbGlzdCBsaSBhLmFjdGl2ZSwuYWZwLXRhYi1ib3ggI25hdi10YWIubmF2LXRhYnMgbGkgYS5hY3RpdmV7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiNGRDVGMDA7Ym9yZGVyLWJvdHRvbTpzb2xpZCAzcHggI0ZENUYwMDthbmltYXRpb24tbmFtZTp0YWJsaW5lO2FuaW1hdGlvbi1kdXJhdGlvbjowLjdzO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHN9LmFmcC10YWItYm94ICNuYXYtdGFiLXN0b3JlZGV0YWlsLm5hdi10YWJze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tYm90dG9tOjA7bGlzdC1zdHlsZTpub25lO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1ib3R0b206MHB4O2xpbmUtaGVpZ2h0OjMuOGVtO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYWZwLXRhYi1ib3ggI25hdi10YWItc3RvcmVkZXRhaWwubmF2LXRhYnMgbGl7Zm9udC1zaXplOi45ZW07Y29sb3I6IzhFOEU5Mzt0ZXh0LWRlY29yYXRpb246bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOi41cyBjb2xvcjtib3JkZXI6bm9uZTtkaXNwbGF5OmJsb2NrO2ZsZXgtZ3JvdzoxO2ZsZXgtYmFzaXM6MDt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9LmFmcC10YWItYm94ICNuYXYtdGFiLXN0b3JlZGV0YWlsLm5hdi10YWJzIGxpIGF7Zm9udC1zaXplOjEuMWVtO2Rpc3BsYXk6aW5saW5lLXRhYmxlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6IzhFOEU5Mzt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmFmcC10YWItYm94ICNuYXYtdGFiLXN0b3JlZGV0YWlsLm5hdi10YWJzIGxpIGEuYWN0aXZle2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojRkQ1RjAwO2JvcmRlci1ib3R0b206c29saWQgM3B4ICNGRDVGMDA7YW5pbWF0aW9uLW5hbWU6dGFibGluZTthbmltYXRpb24tZHVyYXRpb246MC43czthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzfS5zdG9yZS10YWItYm94IGxpe2NvbG9yOiM4RThFOTM7dGV4dC1kZWNvcmF0aW9uOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjouNXMgY29sb3I7Ym9yZGVyOm5vbmU7ZGlzcGxheTpibG9jaztmbGV4LWdyb3c6MTtmbGV4LWJhc2lzOjA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5zdG9yZS10YWItYm94IGxpIC5uYXYtbGluaywuc3RvcmUtdGFiLWJveCBsaSBhLm5hdi1saW5re2Rpc3BsYXk6aW5saW5lLXRhYmxlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6IzhFOEU5Mzt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5zdG9yZS10YWItYm94IGxpIC5uYXYtbGluay5hY3RpdmUsLnN0b3JlLXRhYi1ib3ggbGkgYS5uYXYtbGluay5hY3RpdmV7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiNGRDVGMDA7Ym9yZGVyLWJvdHRvbTpzb2xpZCAzcHggI0ZENUYwMDthbmltYXRpb24tbmFtZTp0YWJsaW5lO2FuaW1hdGlvbi1kdXJhdGlvbjowLjdzO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHN9LmFmcC10YWItYm94IC50YWItcGFuZXttaW4taGVpZ2h0OjUwcHh9LmFmcC10YWItYm94IGEudGFibGlzdC1saW5re2Rpc3BsYXk6aW5saW5lLXRhYmxlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6IzhFOEU5Mzt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmFmcC10YWItYm94IGEudGFibGlzdC1saW5rLmFjdGl2ZXtmb250LXdlaWdodDo3MDA7Y29sb3I6I0ZENUYwMDtib3JkZXItYm90dG9tOnNvbGlkIDNweCAjRkQ1RjAwO2FuaW1hdGlvbi1uYW1lOnRhYmxpbmU7YW5pbWF0aW9uLWR1cmF0aW9uOjAuN3M7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkc31Aa2V5ZnJhbWVzIHRhYmxpbmV7ZnJvbXt3aWR0aDowfXRve3dpZHRoOjEwMCV9fVxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1uYXZsaW5rLm1pbi5jc3MubWFwICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwiperNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-swiper-nav',
                templateUrl: './swiper-nav.component.html',
                styleUrls: ['./swiper-nav.component.css', '../../../dist/style/navlink.min.css']
            }]
    }], function () { return []; }, { slidestab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], swiperOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/template.module */ "fo52");
/* harmony import */ var _function_function_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/function.module */ "dVhO");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _entrance_entrance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entrance/entrance.component */ "UXzO");
/* harmony import */ var _explore_explore_map_explore_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore/explore-map/explore-map.component */ "MTV9");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
            _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _entrance_entrance_component__WEBPACK_IMPORTED_MODULE_7__["EntranceComponent"],
        _explore_explore_map_explore_map_component__WEBPACK_IMPORTED_MODULE_8__["ExploreMapComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
        _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _entrance_entrance_component__WEBPACK_IMPORTED_MODULE_7__["EntranceComponent"],
                    _explore_explore_map_explore_map_component__WEBPACK_IMPORTED_MODULE_8__["ExploreMapComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
                    _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cxkG":
/*!*****************************************************!*\
  !*** ./src/app/template/template-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRoutingModule", function() { return TemplateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class TemplateRoutingModule {
}
TemplateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateRoutingModule });
TemplateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateRoutingModule_Factory(t) { return new (t || TemplateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dVhO":
/*!*********************************************!*\
  !*** ./src/app/function/function.module.ts ***!
  \*********************************************/
/*! exports provided: FunctionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionModule", function() { return FunctionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _function_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function-routing.module */ "13DZ");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LefO");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error404/error404.component */ "zvxH");






class FunctionModule {
}
FunctionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FunctionModule });
FunctionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FunctionModule_Factory(t) { return new (t || FunctionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _function_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _function_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionRoutingModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _function_routing_module__WEBPACK_IMPORTED_MODULE_2__["FunctionRoutingModule"],
                ],
                exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fET8":
/*!*****************************************************!*\
  !*** ./src/app/template/swiper/swiper.component.ts ***!
  \*****************************************************/
/*! exports provided: SwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SwiperComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SwiperComponent {
    constructor() {
        this.slides = [
            'https://picsum.photos/id/2/500/300/',
            'https://picsum.photos/id/4/300/400/',
            'https://picsum.photos/id/6/300/300/'
        ];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
}
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(); };
SwiperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["app-swiper"]], inputs: { swiperOptionBn: "swiperOptionBn" }, decls: 8, vars: 2, consts: [[1, "swiper-container", 3, "config"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-slide"], ["alt", "", 3, "src"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "swiper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SwiperComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.swiperOptionBn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3N3aXBlci9zd2lwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwiperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-swiper',
                templateUrl: './swiper.component.html',
                styleUrls: ['./swiper.component.css']
            }]
    }], function () { return []; }, { swiperOptionBn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fo52":
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _template_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-routing.module */ "cxkG");
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper/swiper.component */ "fET8");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-useful-swiper */ "wSAv");
/* harmony import */ var _swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swiper-nav/swiper-nav.component */ "WABW");







class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _template_routing_module__WEBPACK_IMPORTED_MODULE_2__["TemplateRoutingModule"],
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__["NgxUsefulSwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_5__["SwiperNavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _template_routing_module__WEBPACK_IMPORTED_MODULE_2__["TemplateRoutingModule"],
        ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__["NgxUsefulSwiperModule"]], exports: [_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_5__["SwiperNavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_5__["SwiperNavComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _template_routing_module__WEBPACK_IMPORTED_MODULE_2__["TemplateRoutingModule"],
                    ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_4__["NgxUsefulSwiperModule"]
                ],
                exports: [_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _swiper_nav_swiper_nav_component__WEBPACK_IMPORTED_MODULE_5__["SwiperNavComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', loadChildren: () => __webpack_require__.e(/*! import() | entrance-entrance-module */ "entrance-entrance-module").then(__webpack_require__.bind(null, /*! ./entrance/entrance.module */ "2t8/")).then(m => m.EntranceModule) },
    { path: 'Explore', loadChildren: () => __webpack_require__.e(/*! import() | explore-explore-module */ "explore-explore-module").then(__webpack_require__.bind(null, /*! ./explore/explore.module */ "vwuq")).then(m => m.ExploreModule) },
    { path: 'Function', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./function/function.module */ "dVhO")).then(m => m.FunctionModule) },
    { path: 'Travel', loadChildren: () => __webpack_require__.e(/*! import() | travel-travel-module */ "travel-travel-module").then(__webpack_require__.bind(null, /*! ./travel/travel.module */ "ydd2")).then(m => m.TravelModule) },
    { path: 'Template', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./template/template.module */ "fo52")).then(m => m.TemplateModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zvxH":
/*!*********************************************************!*\
  !*** ./src/app/function/error404/error404.component.ts ***!
  \*********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Error404Component {
    constructor() { }
    ngOnInit() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 2, vars: 0, template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmN0aW9uL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error404',
                templateUrl: './error404.component.html',
                styleUrls: ['./error404.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map