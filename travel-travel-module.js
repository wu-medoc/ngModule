(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-travel-module"],{

/***/ "PK3c":
/*!***************************************************!*\
  !*** ./src/app/travel/travel/travel.component.ts ***!
  \***************************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TravelComponent {
    constructor() { }
    ngOnInit() {
    }
}
TravelComponent.ɵfac = function TravelComponent_Factory(t) { return new (t || TravelComponent)(); };
TravelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TravelComponent, selectors: [["app-travel"]], decls: 2, vars: 0, template: function TravelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "travel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC90cmF2ZWwvdHJhdmVsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-travel',
                templateUrl: './travel.component.html',
                styleUrls: ['./travel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bcv+":
/*!*************************************************!*\
  !*** ./src/app/travel/travel-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TravelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRoutingModule", function() { return TravelRoutingModule; });
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel/travel.component */ "PK3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _travel_travel_component__WEBPACK_IMPORTED_MODULE_0__["TravelComponent"] }
];
class TravelRoutingModule {
}
TravelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TravelRoutingModule });
TravelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TravelRoutingModule_Factory(t) { return new (t || TravelRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TravelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TravelRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ydd2":
/*!*****************************************!*\
  !*** ./src/app/travel/travel.module.ts ***!
  \*****************************************/
/*! exports provided: TravelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModule", function() { return TravelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _travel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel-routing.module */ "bcv+");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel/travel.component */ "PK3c");





class TravelModule {
}
TravelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TravelModule });
TravelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TravelModule_Factory(t) { return new (t || TravelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _travel_routing_module__WEBPACK_IMPORTED_MODULE_2__["TravelRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TravelModule, { declarations: [_travel_travel_component__WEBPACK_IMPORTED_MODULE_3__["TravelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _travel_routing_module__WEBPACK_IMPORTED_MODULE_2__["TravelRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_travel_travel_component__WEBPACK_IMPORTED_MODULE_3__["TravelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _travel_routing_module__WEBPACK_IMPORTED_MODULE_2__["TravelRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=travel-travel-module.js.map