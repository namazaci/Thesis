(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discussion-discussion-module"],{

/***/ "./src/app/discussion/discussion.module.ts":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.module.ts ***!
  \*************************************************/
/*! exports provided: DiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/app/discussion/discussion.page.ts");







var routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]
    }
];
var DiscussionPageModule = /** @class */ (function () {
    function DiscussionPageModule() {
    }
    DiscussionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]]
        })
    ], DiscussionPageModule);
    return DiscussionPageModule;
}());



/***/ }),

/***/ "./src/app/discussion/discussion.page.html":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    <ion-title>Discussion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div *ngFor=\"let discussion of discussions\">\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>{{discussion.title}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{discussion.description}}</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>{{discussion.everybody}}</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentModal()\">\r\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/discussion/discussion.page.scss":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/discussion/discussion.page.ts":
/*!***********************************************!*\
  !*** ./src/app/discussion/discussion.page.ts ***!
  \***********************************************/
/*! exports provided: DiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPage", function() { return DiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_discussion_new_discussion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-discussion/new-discussion.page */ "./src/app/new-discussion/new-discussion.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var DiscussionPage = /** @class */ (function () {
    function DiscussionPage(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.discussions = [];
    }
    DiscussionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('discussions').then(function (discussions) {
            _this.discussions = discussions || [];
        });
    };
    DiscussionPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _new_discussion_new_discussion_page__WEBPACK_IMPORTED_MODULE_3__["NewDiscussionPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (info) {
                            if (info.data.discussion !== undefined)
                                _this.discussions.push(info.data.discussion);
                            _this.storage.set('discussions', _this.discussions).then(function (success) { console.log(success); });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscussionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion',
            template: __webpack_require__(/*! ./discussion.page.html */ "./src/app/discussion/discussion.page.html"),
            styles: [__webpack_require__(/*! ./discussion.page.scss */ "./src/app/discussion/discussion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], DiscussionPage);
    return DiscussionPage;
}());



/***/ })

}]);
//# sourceMappingURL=discussion-discussion-module.js.map