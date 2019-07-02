(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");







var routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]
    }
];
var EventPageModule = /** @class */ (function () {
    function EventPageModule() {
    }
    EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
        })
    ], EventPageModule);
    return EventPageModule;
}());



/***/ }),

/***/ "./src/app/event/event.page.html":
/*!***************************************!*\
  !*** ./src/app/event/event.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Events</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>Today</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      <div *ngFor=\"let item of filteredEvents\">\r\n        <ion-list-header>{{ item.date.day}} {{ item.date.month }} {{ item.date.year }}</ion-list-header>\r\n        <ion-item *ngFor=\"let event of item.events\">\r\n          <ion-label>{{event.title}}</ion-label>\r\n          <ion-label>{{event.starttime}}</ion-label>\r\n          <ion-label>{{event.endtime}}</ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentCalendarModal()\">\r\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/event/event.page.scss":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/event/event.page.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/calendar.page */ "./src/app/calendar/calendar.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var EventPage = /** @class */ (function () {
    function EventPage(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.events = [];
        this.filteredEvents = [];
    }
    EventPage.prototype.ngOnInit = function () {
        var _this = this;
        // Or to get a key/value pair
        this.storage.get('events').then(function (events) {
            _this.setEvents(events || []);
        });
    };
    EventPage.prototype.presentCalendarModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _calendar_calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (info) {
                            if (info.data.event !== undefined)
                                _this.events.push(info.data.event);
                            _this.storage.set('events', _this.events).then(function (success) { console.log('events saved'); });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventPage.prototype.setEvents = function (events) {
        var _this = this;
        this.events = events;
        this.filteredEvents = [];
        events.forEach(function (item) {
            var foundIndex = -1;
            _this.filteredEvents.filter(function (ev, index) {
                if (ev.date.day == item.date && ev.date.month == item.month && ev.date.year == item.year)
                    foundIndex = index;
            });
            console.log(foundIndex);
            if (foundIndex > -1) {
                _this.filteredEvents[foundIndex].events.push(item);
            }
            else {
                _this.filteredEvents.push({
                    date: {
                        day: item.date,
                        month: item.month,
                        year: item.year
                    },
                    events: [item]
                });
            }
        });
        console.log(this.filteredEvents);
    };
    EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.page.html */ "./src/app/event/event.page.html"),
            styles: [__webpack_require__(/*! ./event.page.scss */ "./src/app/event/event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], EventPage);
    return EventPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-event-module.js.map