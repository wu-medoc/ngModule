(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrance-entrance-module"],{

/***/ "2t8/":
/*!*********************************************!*\
  !*** ./src/app/entrance/entrance.module.ts ***!
  \*********************************************/
/*! exports provided: EntranceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntranceModule", function() { return EntranceModule; });
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../template/template.module */ "fo52");
/* harmony import */ var _function_function_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../function/function.module */ "dVhO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _entrance_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entrance-routing.module */ "5CtC");






class EntranceModule {
}
EntranceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EntranceModule });
EntranceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EntranceModule_Factory(t) { return new (t || EntranceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _entrance_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntranceRoutingModule"],
            _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
            _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EntranceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _entrance_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntranceRoutingModule"],
        _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
        _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EntranceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _entrance_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntranceRoutingModule"],
                    _function_function_module__WEBPACK_IMPORTED_MODULE_1__["FunctionModule"],
                    _template_template_module__WEBPACK_IMPORTED_MODULE_0__["TemplateModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5CtC":
/*!*****************************************************!*\
  !*** ./src/app/entrance/entrance-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EntranceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntranceRoutingModule", function() { return EntranceRoutingModule; });
/* harmony import */ var _entrance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrance.component */ "UXzO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _entrance_component__WEBPACK_IMPORTED_MODULE_0__["EntranceComponent"] }
];
class EntranceRoutingModule {
}
EntranceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EntranceRoutingModule });
EntranceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EntranceRoutingModule_Factory(t) { return new (t || EntranceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EntranceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntranceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=entrance-entrance-module.js.map