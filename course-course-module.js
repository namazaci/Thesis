(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-course-module"],{

/***/ "./src/app/course/course.module.ts":
/*!*****************************************!*\
  !*** ./src/app/course/course.module.ts ***!
  \*****************************************/
/*! exports provided: CoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageModule", function() { return CoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course.page */ "./src/app/course/course.page.ts");







var routes = [
    {
        path: '',
        component: _course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]
    }
];
var CoursePageModule = /** @class */ (function () {
    function CoursePageModule() {
    }
    CoursePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]]
        })
    ], CoursePageModule);
    return CoursePageModule;
}());



/***/ }),

/***/ "./src/app/course/course.page.html":
/*!*****************************************!*\
  !*** ./src/app/course/course.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Course</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n    \r\n\r\n<ion-content padding>\r\n    <ion-list>\r\n        <ion-item [routerLink]=\"['/introduction-to-lms']\" class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course1.png\"></ion-img>\r\n          <ion-label>Introduction to TalentLMS</ion-label>\r\n        </ion-item>\r\n        <ion-item [routerLink]=\"['/advance-features-of-talent-lms']\" class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course2.png\"></ion-img>\r\n          <ion-label class=\"course\">Advance features of TalentLMS</ion-label>\r\n        </ion-item>\r\n        <ion-item [routerLink]=\"['/content-and-talent-lms']\" class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course3.png\"></ion-img>\r\n          <ion-label>Content and TalentLMS</ion-label>\r\n        </ion-item>\r\n        <ion-item [routerLink]=\"['/e-learning-basics']\" class=\"activated\">\r\n          <ion-img src=\"/assets/courses/course4.png\"></ion-img>\r\n          <ion-label>eLearning Basics</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/course/course.page.scss":
/*!*****************************************!*\
  !*** ./src/app/course/course.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-img {\n  width: 100px;\n  padding: 10px; }\n\n.course {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL0M6XFxVc2Vyc1xcbmFtYXpcXE9uZURyaXZlXFxEZXNrdG9wXFxQcm9qZWN0XFxUaGVzaXNQcm9qZWN0XFxUaGVzaXNQcm9qZWN0LWFwcFxcVGhlc2lzQXBwL3NyY1xcYXBwXFxjb3Vyc2VcXGNvdXJzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb3Vyc2V7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/course/course.page.ts":
/*!***************************************!*\
  !*** ./src/app/course/course.page.ts ***!
  \***************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursePage = /** @class */ (function () {
    function CoursePage() {
    }
    CoursePage.prototype.ngOnInit = function () {
    };
    CoursePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.page.html */ "./src/app/course/course.page.html"),
            styles: [__webpack_require__(/*! ./course.page.scss */ "./src/app/course/course.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoursePage);
    return CoursePage;
}());



/***/ })

}]);
//# sourceMappingURL=course-course-module.js.map