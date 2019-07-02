(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");







var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]],
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/message/message.page.html":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Message</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div *ngFor=\"let message of messages\">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label>{{message.to}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>{{message.cc}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>{{message.bcc}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>{{message.subject}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>{{message.message}}</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"presentModal()\">\r\n        <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/message/message.page.ts":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_message_new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-message/new-message.page */ "./src/app/new-message/new-message.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var MessagePage = /** @class */ (function () {
    function MessagePage(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.messages = [];
    }
    MessagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('messages').then(function (messages) {
            _this.messages = messages || [];
        });
    };
    MessagePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _new_message_new_message_page__WEBPACK_IMPORTED_MODULE_3__["NewMessagePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (info) {
                            if (info.data.message !== undefined)
                                _this.messages.push(info.data.message);
                            _this.storage.set('messages', _this.messages).then(function (success) { console.log(success); });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.page.html */ "./src/app/message/message.page.html"),
            styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/message/message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module.js.map