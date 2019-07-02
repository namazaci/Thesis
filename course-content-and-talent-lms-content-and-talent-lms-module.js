(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-content-and-talent-lms-content-and-talent-lms-module"],{

/***/ "./src/app/course/content-and-talent-lms/content-and-talent-lms.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/course/content-and-talent-lms/content-and-talent-lms.module.ts ***!
  \********************************************************************************/
/*! exports provided: ContentAndTalentLMSPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAndTalentLMSPageModule", function() { return ContentAndTalentLMSPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _content_and_talent_lms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-and-talent-lms.page */ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.ts");







var routes = [
    {
        path: '',
        component: _content_and_talent_lms_page__WEBPACK_IMPORTED_MODULE_6__["ContentAndTalentLMSPage"]
    }
];
var ContentAndTalentLMSPageModule = /** @class */ (function () {
    function ContentAndTalentLMSPageModule() {
    }
    ContentAndTalentLMSPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_content_and_talent_lms_page__WEBPACK_IMPORTED_MODULE_6__["ContentAndTalentLMSPage"]]
        })
    ], ContentAndTalentLMSPageModule);
    return ContentAndTalentLMSPageModule;
}());



/***/ }),

/***/ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/course/content-and-talent-lms/content-and-talent-lms.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Content and TalentLMS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-label class=\"title\">Description:</ion-label>\r\n    <p class=\"content\">What type of content can you use with TalentLMS? \r\n        Let's find out on this quick course.\r\n    </p>\r\n    <ion-button expand=\"full\" (click)=\"openLocalPdf()\">Open PDF</ion-button>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/course/content-and-talent-lms/content-and-talent-lms.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #ffffff; }\n\n.title {\n  color: #748073;\n  font-size: 14px; }\n\n.content {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.pdf {\n  margin-top: 20px;\n  width: 90vw;\n  height: 60vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvbnRlbnQtYW5kLXRhbGVudC1sbXMvQzpcXFVzZXJzXFxuYW1helxcT25lRHJpdmVcXERlc2t0b3BcXFByb2plY3RcXFRoZXNpc1Byb2plY3RcXFRoZXNpc1Byb2plY3QtYXBwXFxUaGVzaXNBcHAvc3JjXFxhcHBcXGNvdXJzZVxcY29udGVudC1hbmQtdGFsZW50LWxtc1xcY29udGVudC1hbmQtdGFsZW50LWxtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb250ZW50LWFuZC10YWxlbnQtbG1zL2NvbnRlbnQtYW5kLXRhbGVudC1sbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogIzc0ODA3MztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5wZGZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/course/content-and-talent-lms/content-and-talent-lms.page.ts ***!
  \******************************************************************************/
/*! exports provided: ContentAndTalentLMSPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAndTalentLMSPage", function() { return ContentAndTalentLMSPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");







var ContentAndTalentLMSPage = /** @class */ (function () {
    function ContentAndTalentLMSPage(platform, file, ft, fileOpener, document) {
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
    }
    ContentAndTalentLMSPage.prototype.openLocalPdf = function () {
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
    ContentAndTalentLMSPage.prototype.ngOnInit = function () {
    };
    ContentAndTalentLMSPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-and-talent-lms',
            template: __webpack_require__(/*! ./content-and-talent-lms.page.html */ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.html"),
            styles: [__webpack_require__(/*! ./content-and-talent-lms.page.scss */ "./src/app/course/content-and-talent-lms/content-and-talent-lms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["DocumentViewer"]])
    ], ContentAndTalentLMSPage);
    return ContentAndTalentLMSPage;
}());



/***/ })

}]);
//# sourceMappingURL=course-content-and-talent-lms-content-and-talent-lms-module.js.map