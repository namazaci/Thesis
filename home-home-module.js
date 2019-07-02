(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons class=\"logo\">\r\n        <ion-button [routerLink]=\"['/home']\"> \r\n          Home\r\n        </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar value=\"Search My Courses\" showCancelButton cancelButtonText=\"Cancel\" debounce=\"500\" animated>\r\n  </ion-searchbar>\r\n  <ion-grid class=\"dashboard\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n          <ion-icon name=\"briefcase\" slot=\"start\"></ion-icon>\r\n          <ion-label>7 Courses in Progress</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n          <ion-icon name=\"school\" slot=\"start\"></ion-icon>\r\n          <ion-label>0 Courses Completed</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n          <ion-icon name=\"clock\" slot=\"start\"></ion-icon>\r\n          <ion-label>0h 0m Training Time</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n          <ion-icon name=\"trophy\" slot=\"start\"></ion-icon>\r\n          <ion-label>0 badges</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"course\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card class=\"course1\" no-margin class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course1.png\"></ion-img>\r\n          <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n            <ion-label>Introduction to TalentLMS</ion-label>\r\n          </ion-item>\r\n          <ion-progress-bar color=\"success\" value=\"0.25\"></ion-progress-bar>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"course2\" no-margin class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course2.png\"></ion-img>\r\n          <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n            <ion-label>Advance features of TalentLMS</ion-label>\r\n            <ion-ripple-effect>testing</ion-ripple-effect>\r\n          </ion-item>\r\n          <ion-progress-bar color=\"success\" value=\"0\"></ion-progress-bar>\r\n        </ion-card>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card class=\"course3\" no-margin class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course3.png\"></ion-img>\r\n          <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n            <ion-label>Content and TalentLMS</ion-label>\r\n          </ion-item>\r\n          <ion-progress-bar color=\"success\" value=\"0\"></ion-progress-bar>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"course4\" no-margin class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course4.png\"></ion-img>\r\n          <ion-item [routerLink]=\"['/course']\" class=\"activated\">\r\n            <ion-label>eLearning Basics</ion-label>\r\n          </ion-item>\r\n          <ion-progress-bar color=\"success\" value=\"0\"></ion-progress-bar>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.logo ion-img {\n  max-height: 20vh;\n  overflow: hidden;\n  width: 76%; }\n\nion-searchbar {\n  --ion-background-color: #ffffff; }\n\nion-card {\n  --ion-background-color: #ffffff; }\n\n.course2 ion-card > ion-img:hover {\n  --ion-background-color:#000000;\n  --ion-opacity: 70%; }\n\n/* .logo ion-buttons .points {\r\n  margin-left: -100px;\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG5hbWF6XFxPbmVEcml2ZVxcRGVza3RvcFxcUHJvamVjdFxcVGhlc2lzUHJvamVjdFxcVGhlc2lzUHJvamVjdC1hcHBcXFRoZXNpc0FwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsK0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsK0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsOEJBQXVCO0VBQ3ZCLGtCQUFjLEVBQUE7O0FBRWhCOztHQ0ZHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9nbyBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAyMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDc2JTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufSBcclxuXHJcbi5jb3Vyc2UyIGlvbi1jYXJkID4gaW9uLWltZzpob3ZlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XHJcbiAgLS1pb24tb3BhY2l0eTogNzAlO1xyXG59XHJcbi8qIC5sb2dvIGlvbi1idXR0b25zIC5wb2ludHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn0gKi8iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmxvZ28gaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDIwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3NiU7IH1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5jb3Vyc2UyIGlvbi1jYXJkID4gaW9uLWltZzpob3ZlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcbiAgLS1pb24tb3BhY2l0eTogNzAlOyB9XG5cbi8qIC5sb2dvIGlvbi1idXR0b25zIC5wb2ludHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map