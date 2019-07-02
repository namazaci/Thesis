(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-e-learning-basics-e-learning-basics-module"],{

/***/ "./src/app/course/e-learning-basics/e-learning-basics.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/course/e-learning-basics/e-learning-basics.module.ts ***!
  \**********************************************************************/
/*! exports provided: ELearningBasicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELearningBasicsPageModule", function() { return ELearningBasicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_learning_basics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-learning-basics.page */ "./src/app/course/e-learning-basics/e-learning-basics.page.ts");







var routes = [
    {
        path: '',
        component: _e_learning_basics_page__WEBPACK_IMPORTED_MODULE_6__["ELearningBasicsPage"]
    }
];
var ELearningBasicsPageModule = /** @class */ (function () {
    function ELearningBasicsPageModule() {
    }
    ELearningBasicsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_learning_basics_page__WEBPACK_IMPORTED_MODULE_6__["ELearningBasicsPage"]]
        })
    ], ELearningBasicsPageModule);
    return ELearningBasicsPageModule;
}());



/***/ }),

/***/ "./src/app/course/e-learning-basics/e-learning-basics.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/course/e-learning-basics/e-learning-basics.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>eLearning Basics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-label class=\"title\">Description:</ion-label>\r\n    <p class=\"content\">A few interesting presentations on basic elearning topics. This is a collection of things you must know in order to succeed in the tech supported learning world!\r\n    </p>\r\n    <ion-button expand=\"full\" (click)=\"openLocalPdf()\">Open PDF</ion-button>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/course/e-learning-basics/e-learning-basics.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/course/e-learning-basics/e-learning-basics.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #ffffff; }\n\n.title {\n  color: #748073;\n  font-size: 14px; }\n\n.content {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.pdf {\n  margin-top: 20px;\n  width: 90vw;\n  height: 60vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2UtbGVhcm5pbmctYmFzaWNzL0M6XFxVc2Vyc1xcbmFtYXpcXE9uZURyaXZlXFxEZXNrdG9wXFxQcm9qZWN0XFxUaGVzaXNQcm9qZWN0XFxUaGVzaXNQcm9qZWN0LWFwcFxcVGhlc2lzQXBwL3NyY1xcYXBwXFxjb3Vyc2VcXGUtbGVhcm5pbmctYmFzaWNzXFxlLWxlYXJuaW5nLWJhc2ljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9lLWxlYXJuaW5nLWJhc2ljcy9lLWxlYXJuaW5nLWJhc2ljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiAjNzQ4MDczO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLnBkZntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/course/e-learning-basics/e-learning-basics.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/course/e-learning-basics/e-learning-basics.page.ts ***!
  \********************************************************************/
/*! exports provided: ELearningBasicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELearningBasicsPage", function() { return ELearningBasicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");







var ELearningBasicsPage = /** @class */ (function () {
    function ELearningBasicsPage(platform, file, ft, fileOpener, document) {
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
    }
    ELearningBasicsPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'Exam.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'My PDF'
            };
            this.document.viewDocument(filePath + "/Exam.pdf", 'application/pdf', options);
        }
    };
    ELearningBasicsPage.prototype.ngOnInit = function () {
    };
    ELearningBasicsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-learning-basics',
            template: __webpack_require__(/*! ./e-learning-basics.page.html */ "./src/app/course/e-learning-basics/e-learning-basics.page.html"),
            styles: [__webpack_require__(/*! ./e-learning-basics.page.scss */ "./src/app/course/e-learning-basics/e-learning-basics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["DocumentViewer"]])
    ], ELearningBasicsPage);
    return ELearningBasicsPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-e-learning-basics-e-learning-basics-module.js.map