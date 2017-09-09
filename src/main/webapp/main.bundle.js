webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#close {\r\n\tposition: absolute;\r\n    left: 48%;\r\n    top: 8px;\r\n    margin: auto;\r\n    color: red;\r\n    font-family: Verdana, Arial, Helvetica, sans-serif;\r\n\ttext-shadow: 2px 2px 2px rgba(0,0,0,0.3);\r\n\tfont-weight: bold;\r\n\tfont-size: 25px;\r\n\tborder-radius: 10px;\r\n\tbackground: white;\r\n\tborder: 1px solid red;\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='gruk'>\n\t<button id='close' *ngIf='!closed' (click)=\"shutdown()\">STOP</button>\n\t<gruk-header></gruk-header>\n\t<gruk-login [app]=\"this\"></gruk-login>\n\t<gruk-registration [app]=\"this\"></gruk-registration>\n\t<router-outlet></router-outlet>\n\t<footer></footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__ = __webpack_require__("../../../../../src/app/appservice/citizen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
        this.closed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authorized = false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.shutdown = function () {
        var _this = this;
        this.http.post("http://localhost:8080/shutdown", { headers: this.getHeaders() }).subscribe(function (resp) {
            console.log(resp);
            _this.closed = true;
            window.location.replace("https://plus.google.com/+JenyaPolischuk");
        });
    };
    AppComponent.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__["a" /* CitizenService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__citizen_citizen_component__ = __webpack_require__("../../../../../src/app/citizen/citizen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__community_community_component__ = __webpack_require__("../../../../../src/app/community/community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__appservice_logup_service__ = __webpack_require__("../../../../../src/app/appservice/logup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_stomp_service__ = __webpack_require__("../../../../ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_stomp_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__citizen_citizen_component__["a" /* CitizenComponent */],
            __WEBPACK_IMPORTED_MODULE_8__community_community_component__["a" /* CommunityComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__message_message_component__["a" /* MessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC4_vqUuV5u6VKXeQiVxp-SYuP-qZZ_iTw',
                libraries: ["places"]
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__appservice_logup_service__["a" /* LogupService */], __WEBPACK_IMPORTED_MODULE_19_ng2_stomp_service__["StompService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_13__map_map_component__["a" /* MapComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citizen_citizen_component__ = __webpack_require__("../../../../../src/app/citizen/citizen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_community_component__ = __webpack_require__("../../../../../src/app/community/community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");





var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    //    { path: ':me', component: CitizenComponent },
    { path: 'user/:me/:id', component: __WEBPACK_IMPORTED_MODULE_2__citizen_citizen_component__["a" /* CitizenComponent */] },
    { path: 'community/:id', component: __WEBPACK_IMPORTED_MODULE_3__community_community_component__["a" /* CommunityComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a" /* NotFoundComponent */] },
    // otherwise redirect to not-found
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/appclass/citizen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Citizen; });
var Citizen = (function () {
    function Citizen() {
    }
    return Citizen;
}());

//# sourceMappingURL=citizen.js.map

/***/ }),

/***/ "../../../../../src/app/appclass/dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
var Dialog = (function () {
    function Dialog() {
    }
    return Dialog;
}());

//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "../../../../../src/app/appclass/fullname.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullName; });
var FullName = (function () {
    function FullName() {
    }
    return FullName;
}());

//# sourceMappingURL=fullname.js.map

/***/ }),

/***/ "../../../../../src/app/appclass/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/appservice/citizen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitizenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CitizenService = (function () {
    function CitizenService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api';
    }
    CitizenService.prototype.save = function (ctzn, pwd) {
        console.log("CITIZED: " + JSON.stringify(ctzn));
        console.log("PASSWORD: " + pwd);
        return this.http.post(this.baseUrl + "/registration", { citizen: ctzn, password: pwd }, { headers: this.getHeaders() });
    };
    CitizenService.prototype.logIn = function (mail, pwd) {
        return this.http.post(this.baseUrl + "/login", { email: mail, password: pwd }, { headers: this.getHeaders() });
    };
    CitizenService.prototype.getCitizen = function (id) {
        return this.http.get(this.baseUrl + "/" + id, { headers: this.getHeaders() });
    };
    CitizenService.prototype.getReceiver = function (pairKey, id) {
        return this.http.get(this.baseUrl + "/receiver/" + pairKey + "/" + id).map(function (resp) {
            var receiver = resp.json().citizen;
            return receiver;
        });
    };
    CitizenService.prototype.searchFriends = function (id) {
        return this.http.get(this.baseUrl + "/citizens/" + id, { headers: this.getHeaders() });
    };
    CitizenService.prototype.keyOf = function (id1, id2) {
        return this.http.get(this.baseUrl + "/keyOf/" + id1 + "/" + id2, { headers: this.getHeaders() });
    };
    CitizenService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return CitizenService;
}());
CitizenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CitizenService);

var _a;
//# sourceMappingURL=citizen.service.js.map

/***/ }),

/***/ "../../../../../src/app/appservice/community.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommunityService = (function () {
    function CommunityService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/community/';
    }
    CommunityService.prototype.findCommunities = function (keyword) {
        keyword = (keyword === null || keyword === '') ? 'аб' : keyword;
        var url = this.baseUrl + 'find/' + keyword;
        return this.http.get(url).map(function (resp) {
            var communityList = resp.json();
            return communityList;
        });
    };
    CommunityService.prototype.getCommunity = function (id) {
        var url = this.baseUrl + id;
        return this.http.get(url).map(function (resp) {
            var communityResponse = resp.json().community;
            console.log(JSON.stringify(communityResponse));
            return communityResponse;
        });
    };
    CommunityService.prototype.getCommunityList = function () {
        return this.http.get('communities.json').map(function (resp) {
            var communityList = resp.json().communities;
            return communityList;
        });
    };
    return CommunityService;
}());
CommunityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommunityService);

var _a;
//# sourceMappingURL=community.service.js.map

/***/ }),

/***/ "../../../../../src/app/appservice/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogService = (function () {
    function DialogService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/msg';
    }
    DialogService.prototype.getDialog = function (key, red, sender) {
        return this.http.post(this.baseUrl + "/dialog", { pairKey: key, isRed: red, senderId: sender }, { headers: this.getHeaders() });
    };
    DialogService.prototype.getDialogs = function (id, keys) {
        return this.http.post(this.baseUrl + "/dialogs", { holder: id, pairKeys: keys }, { headers: this.getHeaders() });
    };
    DialogService.prototype.sendMessage = function (msg) {
        return this.http.post(this.baseUrl + "/send", JSON.stringify(msg), { headers: this.getHeaders() });
    };
    DialogService.prototype.deleteMessage = function (id, sender) {
        return this.http.post(this.baseUrl + "/deleteMsg", { messageId: id, holder: sender }, { headers: this.getHeaders() });
    };
    DialogService.prototype.countUnred = function (id) {
        return this.http.get(this.baseUrl + "/count/" + id, { headers: this.getHeaders() });
    };
    DialogService.prototype.getDialogKeys = function (id) {
        return this.http.post(this.baseUrl + "/dialogKeys", id, { headers: this.getHeaders() });
    };
    DialogService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return DialogService;
}());
DialogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/appservice/logup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__ = __webpack_require__("../../../../../src/app/appclass/citizen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appclass_fullname__ = __webpack_require__("../../../../../src/app/appclass/fullname.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogupService = (function () {
    function LogupService() {
        this.citizenSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.authSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    LogupService.prototype.getCitizen = function () {
        return this.citizenSource.asObservable();
    };
    LogupService.prototype.getAuth = function () {
        return this.authSource.asObservable();
    };
    LogupService.prototype.changeCitizen = function (citizen) {
        console.log("in logup: " + citizen.citizenName.secondName);
        this.citizenSource.next(citizen);
    };
    LogupService.prototype.changeAuth = function (auth) {
        console.log('in logup auth = ' + auth);
        this.authSource.next(auth);
    };
    LogupService.prototype.newCitizen = function () {
        console.log('before logup clearCitizen');
        var citizen = new __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__["a" /* Citizen */]();
        citizen.citizenName = new __WEBPACK_IMPORTED_MODULE_3__appclass_fullname__["a" /* FullName */]();
        this.citizenSource.next(citizen);
        console.log('after logup clearCitizen');
    };
    return LogupService;
}());
LogupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LogupService);

//# sourceMappingURL=logup.service.js.map

/***/ }),

/***/ "../../../../../src/app/appservice/subscription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscriptionService = (function () {
    function SubscriptionService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/subscript';
    }
    SubscriptionService.prototype.subscriptionsOf = function (id) {
        return this.http.get(this.baseUrl + "/" + id, { headers: this.getHeaders() });
    };
    SubscriptionService.prototype.createSubscript = function (ids) {
        return this.http.post(this.baseUrl + "/new", ids, { headers: this.getHeaders() });
    };
    SubscriptionService.prototype.updateSubscript = function (subscript) {
        return this.http.put(this.baseUrl + "/update", JSON.stringify(subscript), { headers: this.getHeaders() });
    };
    SubscriptionService.prototype.deleteSubscript = function (subscript) {
        return this.http.delete(this.baseUrl + "/delete", new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ body: JSON.stringify(subscript), headers: this.getHeaders() }));
    };
    SubscriptionService.prototype.getSubscribers = function (id) {
        return this.http.get(this.baseUrl + "/to/" + id, { headers: this.getHeaders() });
    };
    SubscriptionService.prototype.getSubscribeds = function (id) {
        return this.http.get(this.baseUrl + "/of/" + id, { headers: this.getHeaders() });
    };
    SubscriptionService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return SubscriptionService;
}());
SubscriptionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SubscriptionService);

var _a;
//# sourceMappingURL=subscription.service.js.map

/***/ }),

/***/ "../../../../../src/app/citizen/citizen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cwrap {\r\n\tposition: absolute;\r\n    left: 0px;\r\n    top: 50px;\r\n    padding: 5px;\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\n#photo {\r\n\tmargin: auto;\r\n\twidth: 128px;\r\n\theight: 128px;\r\n\tborder-radius: 5px;\r\n/*\tpadding: 5px;*/\r\n\ttext-align: center;\r\n\tborder: 1px solid blue;\r\n\tbackground: white;\r\n}\r\n\r\n#unsub {\r\n\tcolor: #57d2fb;\r\n\tfont-weight: bold;\r\n\tbackground: white;\r\n\tborder: 1px solid #57d2fb;\r\n\twidth: 128px;\r\n\tmargin: 2px;\r\n\tpadding: 2px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#sub, #mess {\r\n\twidth: 128px;\r\n\tmargin: 2px;\r\n\tpadding: 2px;\r\n\tborder-radius: 5px;\r\n\talign: center;\r\n\tbackground: #ffff80;\r\n\tcolor: blue;\r\n\tfont-size: 12px;\r\n\tborder: 1px solid blue;\r\n}\r\n\r\n#com {\r\n\tcursor: pointer;\r\n\tcolor: blue;\r\n\tbackground: white;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: bold;\r\n/*\theight: 32px;\r\n\ttext-align: center;\r\n    border-radius: 10px;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);*/\r\n \tborder: 0px solid SlateGray; /*  */\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#name {\r\n\tcolor: red;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: bold;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n#mail {\r\n\tcolor: blue;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-style: italic;\r\n\tfont-size: 14px;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n#main {\r\n\tposition: absolute;\r\n    right: 15px;\r\n    top: 5px;\r\n\twidth: 20%;\r\n\tmargin: auto;\r\n \tborder: 1px solid #ccc;\r\n \tborder-radius: 5px;\r\n \tpadding: 1%;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#dial {\r\n\twidth: 98%;\r\n\tmargin: auto;;\r\n}\r\n\r\n.option {\r\n\twidth: 100%;\r\n\talign: center;\r\n\tpadding: 2px;\r\n\tmargin: 2px;\r\n\tborder-radius: 5px;\r\n\tbackground: #ffff80;\r\n\tcolor: blue;\r\n\tfont-size: 12px;\r\n\tborder: 1px solid blue;\r\n}\r\n\r\n.btn {\r\n\tmargin: auto;\r\n\ttext-align: left;\r\n\twidth: 100%;\r\n\tcursor: pointer;\r\n\tcolor: red;\r\n\tbackground: LightCyan;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\ttext-shadow: 2px 2px 2px rgba(0,0,0,0.3);\r\n/*\theight: 32px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n    border-radius: 10px;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);*/\r\n \tborder: 0px solid SlateGray; /*  */\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/citizen/citizen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cwrap\">\n\t<div>\n\t\t<input id=\"photo\" type=\"image\" src='./../assets/icon.png'>\n\t\t<!-- value={{citizen?.profilePhoto?.fileData}} -->\n\t</div>\n\t<div *ngIf=\"!authorized && main\">\n\t\t<div>\n\t\t\t<button *ngIf='!checkSub' id='sub' (click)=\"subscribeCitizen(true)\">ПІДПИСАТИСЯ</button>\n\t\t\t<button *ngIf='checkSub' id='unsub' (click)=\"subscribeCitizen(false)\">ВІДПИСАТИСЯ</button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"!authorized && main\">\n\t\t<div *ngIf=\"!isMsg\">\n\t\t\t<button id='mess' (click)=\"showMessage()\">ПОВІДОМЛЕННЯ</button>\n\t\t</div>\n\t\t<div>\n\t\t\t<span *ngIf=\"isMsg\"><textarea rows=\"2\" cols=\"30\"\n\t\t\t\t\t[(ngModel)]=\"message\" (keydown.enter)=\"sendMessage();false\"></textarea></span>\n\t\t</div>\n\t</div>\n\t<br>\n\t<div>\n\t\t<p id='name'>{{citizen?.citizenName?.firstName + \" \" +\n\t\t\tcitizen?.citizenName?.secondName}}</p>\n\t\tГромада:\n\t\t<button id='com' (click)=\"toCommunity()\">{{citizen?.community?.communityName}}</button>\n\t\t<p>\n\t\t\tE-mail:<span id='mail'> {{citizen?.email}}</span>\n\t\t</p>\n\t\t<p>Phone: {{citizen?.phone}}</p>\n\t</div>\n\n\t<div id='main' *ngIf=\"main\">\n\t\t<div>\n\t\t\t<button class='option' (click)=\"dialogConvert()\">{{\"МОЇ\n\t\t\t\tПОВІДОМЛЕННЯ\" + (unredCount>0 ? \" (\" + unredCount + \")\" : \"\")}}</button>\n\t\t\t<div *ngIf=\"dialogShow\" id='dial'>\n\t\t\t\t<gruk-dialog *ngFor=\"let item of dialogs\" [chat]=\"item\"\n\t\t\t\t\t[receiver]=\"receiver(item)\" [citizen]=\"this\"></gruk-dialog>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button class='option' (click)=\"mysubConvert()\">МОЇ ПІДПИСКИ</button>\n\t\t\t<div *ngIf=\"mysubShow\">\n\t\t\t\t<button class='btn' *ngFor=\"let item of subscribed\"\n\t\t\t\t\t(click)=\"toCitizen(item.id)\">{{item.citizenName.firstName\n\t\t\t\t\t+ \" \" + item.citizenName.secondName}}</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button class='option' (click)=\"subConvert()\">МОЇ ПІДПИСНИКИ</button>\n\t\t\t<div *ngIf=\"subShow\">\n\t\t\t\t<button class='btn' *ngFor=\"let item of subscribers\"\n\t\t\t\t\t(click)=\"toCitizen(item.id)\">{{item.citizenName.firstName\n\t\t\t\t\t+ \" \" + item.citizenName.secondName}}</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button class='option' (click)=\"friendConvert()\">ЗНАЙТИ\n\t\t\t\tДРУЗІВ</button>\n\t\t\t<div *ngIf=\"friendShow\">\n\t\t\t\t<button class='btn' *ngFor=\"let item of friends\"\n\t\t\t\t\t(click)=\"toCitizen(item.id)\">{{item.citizenName.firstName\n\t\t\t\t\t+ \" \" + item.citizenName.secondName}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/citizen/citizen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitizenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appservice_citizen_service__ = __webpack_require__("../../../../../src/app/appservice/citizen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__ = __webpack_require__("../../../../../src/app/appservice/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appservice_subscription_service__ = __webpack_require__("../../../../../src/app/appservice/subscription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appclass_citizen__ = __webpack_require__("../../../../../src/app/appclass/citizen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appclass_fullname__ = __webpack_require__("../../../../../src/app/appclass/fullname.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appclass_message__ = __webpack_require__("../../../../../src/app/appclass/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_stomp_service__ = __webpack_require__("../../../../ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_stomp_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CitizenComponent = (function () {
    function CitizenComponent(citizenService, activatedRoute, stomp, router, dialogService, subscriptionService) {
        var _this = this;
        this.citizenService = citizenService;
        this.activatedRoute = activatedRoute;
        this.stomp = stomp;
        this.router = router;
        this.dialogService = dialogService;
        this.subscriptionService = subscriptionService;
        this.callback = function (data) {
            console.log(data.key);
            if (data.key === "msg") {
                var visibles_1 = [];
                var keys = '';
                var end = _this.dialogs.length;
                for (var i = 0; i < end; i++) {
                    var visible = _this.dialogs[i].visible;
                    visibles_1.push(visible);
                    if (visible === true)
                        keys = keys + (keys !== '' ? '/' : '') + _this.dialogs[i].pairKey;
                }
                _this.dialogService.getDialogs(_this.main.id, keys).subscribe(function (resp) {
                    _this.dialogs = resp.json();
                    _this.unredCount = 0;
                    var len = _this.dialogs.length;
                    console.log(visibles_1);
                    for (var i = 0; i < len; i++) {
                        _this.unredCount = _this.unredCount + _this.dialogs[i].unredCount;
                        if (visibles_1[i] && visibles_1[i] === true)
                            _this.dialogs[i].visible = visibles_1[i];
                    }
                });
            }
            else if (data.key === "sub") {
                _this.updateSubscripts("not");
            }
        };
        this.stomp.configure({
            host: 'http://localhost:8080/websocket',
            debug: true,
            queue: { 'init': false }
        });
    }
    CitizenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        this.citizenService.getCitizen(params.id).subscribe(function (response) {
            _this.citizen = response.json().citizen;
            console.log("Citizen: " + _this.citizen.id);
            var me = params['me'];
            if (me > 0) {
                _this.citizenService.getCitizen(me).subscribe(function (response) {
                    _this.main = response.json().citizen;
                    console.log("Main citizen: " + _this.main.id);
                    if (_this.main.id === _this.citizen.id)
                        _this.authorized = true;
                    _this.renderMsg();
                    _this.openSocket();
                    _this.updateSubscripts("not");
                });
            }
        });
    };
    CitizenComponent.prototype.ngOnDestroy = function () {
        this.closeSocket();
    };
    CitizenComponent.prototype.openSocket = function () {
        var _this = this;
        this.stomp.startConnect().then(function () {
            _this.stomp.done('init');
            console.log('connected');
            _this.stompSub = _this.stomp.subscribe('/queue/' + _this.main.id, _this.callback);
            _this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                    _this.closeSocket();
                }
            });
        });
    };
    CitizenComponent.prototype.closeSocket = function () {
        this.stompSub.unsubscribe();
        this.stomp.disconnect().then(function () {
            console.log('Connection closed');
        });
    };
    CitizenComponent.prototype.showMessage = function () {
        this.isMsg = !this.isMsg;
    };
    CitizenComponent.prototype.sendMessage = function () {
        var _this = this;
        //        console.log(JSON.stringify(this.message, null, 4));
        this.citizenService.keyOf(this.citizen.id, this.main.id).subscribe(function (resp) {
            var msg = new __WEBPACK_IMPORTED_MODULE_7__appclass_message__["a" /* Message */]();
            msg.pairKey = resp.json().key;
            msg.sender = _this.main;
            msg.receiver = _this.citizen;
            msg.textContent = _this.message;
            console.log(msg);
            _this.dialogService.sendMessage(msg).subscribe(function (resp1) {
                _this.dialogService.getDialogs(_this.main.id, '').subscribe(function (resp2) {
                    _this.dialogs = resp2.json();
                    _this.message = '';
                    _this.showMessage();
                });
            });
        });
    };
    CitizenComponent.prototype.dialogConvert = function () {
        if (this.main) {
            this.dialogShow = !this.dialogShow;
            this.renderMsg();
        }
    };
    CitizenComponent.prototype.reduce = function (count) {
        this.unredCount = this.unredCount - count;
    };
    CitizenComponent.prototype.renderMsg = function () {
        var _this = this;
        this.dialogService.getDialogs(this.main.id, '').subscribe(function (resp) {
            _this.dialogs = resp.json();
            _this.unredCount = 0;
            var len = _this.dialogs.length;
            for (var i = 0; i < len; i++) {
                _this.unredCount = _this.unredCount + _this.dialogs[i].unredCount;
            }
        });
    };
    ;
    CitizenComponent.prototype.updateSubscripts = function (param) {
        var _this = this;
        this.subscriptionService.subscriptionsOf(this.main.id).subscribe(function (resp) {
            _this.subscriptions = resp.json();
            _this.checkSub = false;
            _this.subscribers = [];
            _this.subscribed = [];
            console.log("PARAM: " + param);
            for (var i = 0; i < _this.subscriptions.length; i++) {
                var sub = _this.subscriptions[i];
                if (sub.firstCitizen.id === _this.main.id && sub.secondSubscriber === true) {
                    _this.subscribers.push(sub.secondCitizen);
                }
                else if (sub.secondCitizen.id === _this.main.id && sub.firstSubscriber === true) {
                    _this.subscribers.push(sub.firstCitizen);
                }
                if (sub.firstCitizen.id === _this.main.id && sub.firstSubscriber === true) {
                    _this.subscribed.push(sub.secondCitizen);
                    if (sub.secondCitizen.id === _this.citizen.id)
                        _this.checkSub = true;
                }
                else if (sub.secondCitizen.id === _this.main.id && sub.secondSubscriber === true) {
                    _this.subscribed.push(sub.firstCitizen);
                    if (sub.firstCitizen.id === _this.citizen.id)
                        _this.checkSub = true;
                }
            }
            if (param === "subscribed") {
                _this.mysubShow = !_this.mysubShow;
            }
            else if (param === "subscribers") {
                _this.subShow = !_this.subShow;
            }
        });
    };
    CitizenComponent.prototype.mysubConvert = function () {
        this.updateSubscripts("subscribed");
    };
    CitizenComponent.prototype.subConvert = function () {
        this.updateSubscripts("subscribers");
    };
    CitizenComponent.prototype.subscribeCitizen = function (on) {
        var subscript = null;
        var operation = "create";
        var len = this.subscriptions.length;
        for (var i = 0; i < len; i++) {
            var sub = this.subscriptions[i];
            if (sub.firstCitizen.id === this.citizen.id) {
                subscript = sub;
                subscript.secondSubscriber = on;
                if (on === true || subscript.firstSubscriber === true) {
                    operation = "update";
                }
                else {
                    operation = "delete";
                }
                break;
            }
            if (sub.secondCitizen.id === this.citizen.id) {
                subscript = sub;
                subscript.firstSubscriber = on;
                if (on === true || subscript.secondSubscriber === true) {
                    operation = "update";
                }
                else {
                    operation = "delete";
                }
                break;
            }
        }
        if (operation === "create") {
            var ids = [this.main.id, this.citizen.id];
            this.subscriptionService.createSubscript(ids).subscribe(function (resp) {
                console.log("NEW SUBSCRIPT: " + JSON.stringify(resp.json(), null, 4));
            });
        }
        else if (operation === "update") {
            this.subscriptionService.updateSubscript(subscript).subscribe(function (resp) {
                console.log("UPDATED SUBSCRIPT: " + JSON.stringify(resp.json(), null, 4));
            });
        }
        else if (operation === "delete") {
            this.subscriptionService.deleteSubscript(subscript).subscribe(function (resp) {
                console.log("DELETED SUBSCRIPT: " + resp);
            });
        }
    };
    CitizenComponent.prototype.friendConvert = function () {
        var _this = this;
        if (this.main) {
            this.friendShow = !this.friendShow;
            this.citizenService.searchFriends(this.main.id).subscribe(function (resp) {
                _this.friends = resp.json();
            });
        }
    };
    CitizenComponent.prototype.toCitizen = function (id) {
        var _this = this;
        if (this.router.navigated === false) {
            this.router.navigateByUrl("/user/" + this.main.id + "/" + id);
        }
        else {
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/user/" + _this.main.id + "/" + id);
            });
        }
    };
    CitizenComponent.prototype.receiver = function (chat) {
        var msg = chat.dialog[0];
        if (msg) {
            if (msg.sender.id === this.main.id) {
                return msg.receiver;
            }
            else {
                return msg.sender;
            }
        }
        else {
            var receiver = new __WEBPACK_IMPORTED_MODULE_5__appclass_citizen__["a" /* Citizen */]();
            receiver.citizenName = new __WEBPACK_IMPORTED_MODULE_6__appclass_fullname__["a" /* FullName */]();
            return receiver;
        }
    };
    CitizenComponent.prototype.toCommunity = function () {
        this.router.navigateByUrl("/community/" + this.citizen.community.id);
    };
    return CitizenComponent;
}());
CitizenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-citizen',
        template: __webpack_require__("../../../../../src/app/citizen/citizen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/citizen/citizen.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__appservice_citizen_service__["a" /* CitizenService */], __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_4__appservice_subscription_service__["a" /* SubscriptionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__appservice_citizen_service__["a" /* CitizenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appservice_citizen_service__["a" /* CitizenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_stomp_service__["StompService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_stomp_service__["StompService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__appservice_subscription_service__["a" /* SubscriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appservice_subscription_service__["a" /* SubscriptionService */]) === "function" && _f || Object])
], CitizenComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=citizen.component.js.map

/***/ }),

/***/ "../../../../../src/app/community/community.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/community/community.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<p>Адміністративно-територіальна одиниця №{{community?.id}}:</p>\n\t<p>Назва: <a target=\"_blank\" href={{community?.wikiLink}}>{{community?.communityName}}</a></p>\n\t<p>Локація: {{community?.rayon + \" \" + community?.oblast}}</p>\n\t<p>Сайт: {{community?.ownSite}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/community/community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appservice_community_service__ = __webpack_require__("../../../../../src/app/appservice/community.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunityComponent = (function () {
    function CommunityComponent(communityService, activatedRoute, router) {
        this.communityService = communityService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        this.communityService.getCommunity(params.id).subscribe(function (resp) {
            _this.community = resp;
            console.log(_this.community);
        });
    };
    return CommunityComponent;
}());
CommunityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-community',
        template: __webpack_require__("../../../../../src/app/community/community.component.html"),
        styles: [__webpack_require__("../../../../../src/app/community/community.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__appservice_community_service__["a" /* CommunityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__appservice_community_service__["a" /* CommunityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appservice_community_service__["a" /* CommunityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CommunityComponent);

var _a, _b, _c;
//# sourceMappingURL=community.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dia {\r\n/*\tborder: 1px solid SlateGray;\r\n\tmargin: auto;*/\r\n\twidth: 100%;\r\n\tborder: 0px solid #ccc;\r\n\tpadding: 5px 5px 5px 5px;\r\n\tbackground: LightCyan;\r\n}\r\n\r\n#chat {\r\n\tcursor: pointer;\r\n\tcolor: #0000ff;\r\n\tbackground: LightYellow;\r\n \tfont-size: 13px;\r\n \ttext-align: center;\r\n \tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \ttext-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n/*\tfont-weight: bold;\r\n\theight: 32px;\r\n\tfont-style: italic;\r\n\ttext-align: center;\r\n    border-radius: 10px;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);*/\r\n \tborder: 0px solid SlateGray; /*  */\r\n    overflow: hidden;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.chat.dialog.length!==0\" id='dia'>\n\t<button id='chat' (click)=\"convert()\">{{receiver.citizenName.firstName + \" \" + receiver.citizenName.secondName + (chat.unredCount>0 ? \" (\"+ chat.unredCount +\")\" : \"\")}}</button>\n\t\n\t<div *ngIf=\"chat.visible\">\n\t\t<div>\n\t\t\t<gruk-message *ngFor=\"let item of chat.dialog\" [message]=\"item\" [dialogComponent]=\"this\"></gruk-message>\n\t\t</div>\t\n\t\t<div>\n\t\t\t<textarea rows=\"2\" cols=\"30\" [(ngModel)]=\"textContent\" (keydown.enter)=\"send();false\"></textarea>\n\t\t</div>\n\t</div>\t\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appclass_dialog__ = __webpack_require__("../../../../../src/app/appclass/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__ = __webpack_require__("../../../../../src/app/appclass/citizen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appclass_message__ = __webpack_require__("../../../../../src/app/appclass/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appservice_dialog_service__ = __webpack_require__("../../../../../src/app/appservice/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citizen_citizen_component__ = __webpack_require__("../../../../../src/app/citizen/citizen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogComponent = (function () {
    function DialogComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.ngOnDestroy = function () { };
    DialogComponent.prototype.convert = function () {
        var _this = this;
        var visible = !this.chat.visible;
        var red = (this.chat.holder === this.chat.dialog[this.chat.dialog.length - 1].receiver.id);
        if (red === true)
            this.citizen.reduce(this.chat.unredCount);
        this.dialogService.getDialog(this.chat.pairKey, red, this.citizen.main.id).subscribe(function (resp) {
            _this.chat = resp.json();
            _this.chat.visible = visible;
            var len = _this.citizen.dialogs.length;
            for (var i = 0; i < len; i++) {
                var key = _this.citizen.dialogs[i].pairKey;
                if (_this.chat.pairKey === key) {
                    _this.citizen.dialogs[i] = _this.chat;
                    break;
                }
            }
        });
    };
    DialogComponent.prototype.rerender = function () {
        var _this = this;
        var visible = this.chat.visible;
        this.dialogService.getDialog(this.chat.pairKey, false, this.citizen.main.id).subscribe(function (resp) {
            _this.chat = resp.json();
            _this.chat.visible = visible;
            var len = _this.citizen.dialogs.length;
            for (var i = 0; i < len; i++) {
                var key = _this.citizen.dialogs[i].pairKey;
                if (_this.chat.pairKey === key) {
                    _this.citizen.dialogs[i] = _this.chat;
                    break;
                }
            }
        });
    };
    DialogComponent.prototype.send = function () {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_3__appclass_message__["a" /* Message */]();
        var m = this.chat.dialog[0];
        msg.pairKey = this.chat.pairKey;
        if (m.receiver.id === this.receiver.id) {
            msg.sender = m.sender;
            msg.receiver = m.receiver;
        }
        else {
            msg.sender = m.receiver;
            msg.receiver = m.sender;
        }
        msg.textContent = this.textContent;
        this.dialogService.sendMessage(msg).subscribe(function (resp) {
            _this.chat.dialog.push(resp.json());
            _this.textContent = '';
            //            this.mail.embeddedFile = null;
        });
    };
    return DialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__appclass_dialog__["a" /* Dialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appclass_dialog__["a" /* Dialog */]) === "function" && _a || Object)
], DialogComponent.prototype, "chat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__["a" /* Citizen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__["a" /* Citizen */]) === "function" && _b || Object)
], DialogComponent.prototype, "receiver", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__citizen_citizen_component__["a" /* CitizenComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__citizen_citizen_component__["a" /* CitizenComponent */]) === "function" && _c || Object)
], DialogComponent.prototype, "citizen", void 0);
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-dialog',
        template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__appservice_dialog_service__["a" /* DialogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__appservice_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appservice_dialog_service__["a" /* DialogService */]) === "function" && _d || Object])
], DialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\r\n\theight: 50px;\r\n\t/*     border:1px solid #CCC; */\r\n\twidth: 100%;\r\n\t/*     margin:0px auto; dodgerblue*/\r\n\tbackground: deepskyblue; /* For browsers that do not support gradients */\r\n\t/* For Safari 5.1 to 6.0 */\r\n\t/* For Opera 11.1 to 12.0 */\r\n\t/* For Firefox 3.6 to 15 */\r\n\tbackground: linear-gradient(deepskyblue, deepskyblue, deepskyblue, yellow, yellow, yellow);\r\n\t/* Standard syntax */\r\n\t/* position: fixed;*/\r\n\tz-index: 100\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='head'>\n\t<a routerLink=\"home\"><img [src]=\"fullImagePath\"></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.fullImagePath = './../../assets/grk.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#home-wrap {\r\n/* \tbackground-image: url(background.png); */\r\n}\r\n\r\n#welcom {\r\n\taling: center;\r\n\tmargin: auto;\r\n\twidth: 60%;\r\n\tborder: 0px solid #ccc;\r\n\tpadding: 50px 0px 0px 0px;\r\n\tbackground: white;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\np {\r\n\tcolor: #696969;\r\n\tmargin: 10px;\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n\ttext-align: justify;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n/* \ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3); */\r\n}\r\n\r\nukraine-map {\r\n\ttext-align: center;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\ttext-decoration: none;\r\n\tcontent-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='home-wrap'>\n\t<div id='welcom'>\n\t\t<img [src]=\"fullImagePath\">\n\t\t<p> <b>Шановний Гостю</b>, запрошуємо до розвитку та встановлення \n\t\t\t<b>громадянського суспільства України</b>.</p>\n\t\t<p> <b>\"ГрУк\"</b> - соціальна мережа, що моделює адміністративно-територіальний \n\t\t\tустрій України, в перспективі, створюючи можливість\n\t\t\tдля єднання та коммунікації на різних рівнях цього устрою. \n\t\t\tКожен \"груківець\" має можливість поширювати власний контент \n\t\t\tкрім особистої аудиторії підписників, ще й на рівнях \n\t\t\tадміністративно-територіального поділу.</p>\t\n\t\t<p> Соціально-політичні теми, настрої громади, самоорганізація та\n\t\t\tкоординація діяльності активістів, контроль роботи чиновників на\n\t\t\tрізних рівнях - очікувані напрями для загальних площадок комунікації. \n\t\t\tПри цьому, повна свобода самовираження у власному профілі.</p>\n\t\t<p> Ласкаво просимо до простору громадянського суспільства України!</p>\t\t\n\n\t\t<ukraine-map></ukraine-map>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.fullImagePath = './../../assets/gruk.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#log_wrap {\r\n\tposition: absolute;\r\n/*\tposition: fixed;*/\r\n    right: 20px;\r\n    top: 15px;\r\n    z-index: 110;\r\n}\r\n\r\ninput[name=email], input[name=pwd]  {\r\n\twidth: 160px;\r\n\theight: 16px;\r\n\tbackground: white;\r\n\tborder: solid yellow 1px;\r\n/* \ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3); */\r\n\tborder-radius: 5px; \r\n\tcolor: LightSlateGray;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: normal;\r\n\ttext-align: center;\r\n\tborder: 1px solid #ccc;\r\n\toverflow: hidden;\r\n    outline: none;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput::placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\n#in {\r\n \tcolor: white; /* #FEFE60 dodgerblue */\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\tfont-weight: bold;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n \ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);\r\n/* \tbackground-color: white 100%; */\r\n/* \tborder: solid dodgerblue 1px; */\r\n\tborder-radius: 5px 5px 5px 5px;\t\r\n\tbackground-color: Transparent;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n/*#hi {\r\n\tposition: absolute;\r\n\tposition: fixed;\r\n    right: 20px;\r\n    top: 15px;\r\n    z-index: 110;\r\n    \r\n    font-style: italic;\r\n}*/\r\n\r\nbutton {\r\n \tcolor: white; /* #FEFE60 dodgerblue */\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\tfont-weight: bold;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n \ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);\r\n/* \tbackground-color: white 100%; */\r\n/* \tborder: solid dodgerblue 1px; */\r\n\tborder-radius: 5px 5px 5px 5px;\t\r\n\tbackground-color: Transparent;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#name {\r\n \tfont-size: 13px;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n\tborder: solid red 1px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n \tborder: solid green 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='log_wrap'>\n\t<div *ngIf=\"!app.authorized\">\n\t\t<form id='login' #formIn=\"ngForm\" novalidate (ngSubmit)=\"login()\">\n\t\t<span class=\"form-group\">\n\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"email\"\n\t\t\t\trequired pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\"/>\n\t\t</span> &nbsp;\n\t\t<span class=\"form-group\">\n\t\t\t<input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Password\" [(ngModel)]=\"password\"\n\t\t\t\trequired pattern=\"^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$\"/>\n\t\t</span> \n\t\t<span class=\"form-group\">\n\t\t\t<input id=\"in\" type=\"submit\" [disabled]=\"formIn.invalid\" class=\"btn btn-default\" value=\"УВІЙТИ\"/>\n\t\t</span>\n\t</form>\t\n\t</div>\n\t<div id='hi' *ngIf=\"app.authorized\">\n\t\t<button id='name' (click)=\"toCitizen()\">{{app?.citizen?.citizenName?.firstName + \" \" + app?.citizen?.citizenName?.secondName}}</button> &nbsp;&nbsp;\n\t\t<button id=\"out\" (click)=\"logout()\">ВИЙТИ</button>\n\t</div>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__ = __webpack_require__("../../../../../src/app/appservice/citizen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    //    authorized: boolean = false;
    function LoginComponent(router, citizenService) {
        this.router = router;
        this.citizenService = citizenService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("LOGIN: email=" + this.email + ", password=" + this.password);
        this.citizenService.logIn(this.email, this.password).subscribe(function (response) {
            _this.app.citizen = response.json().citizen;
            _this.form.reset();
            console.log(_this.app.citizen.id);
            if (_this.app.citizen) {
                _this.app.authorized = true;
                _this.goto(_this.app.citizen.id);
            }
        });
    };
    LoginComponent.prototype.toCitizen = function () {
        this.goto(this.app.citizen.id);
    };
    LoginComponent.prototype.goto = function (id) {
        var _this = this;
        if (this.router.navigated === false) {
            this.router.navigateByUrl("/user/" + id + "/" + id);
        }
        else {
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/user/" + id + "/" + id);
            });
        }
    };
    LoginComponent.prototype.logout = function () {
        this.app.authorized = false;
        this.app.citizen = undefined;
        this.router.navigateByUrl("/home");
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('formIn'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "form", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _a || Object)
], LoginComponent.prototype, "app", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__["a" /* CitizenService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__["a" /* CitizenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appservice_citizen_service__["a" /* CitizenService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n  \tlayout: row;\r\n  \tlayout-align: center center;\r\n}\r\n\r\n.invisible{\r\n\tdisplay: none;\r\n}\r\n\r\n#btn {\r\n\theight: 32px;\r\n\tcursor: pointer;\r\n\tcolor: dodgerblue;\r\n\tbackground: white;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: bold;\r\n\ttext-align: center;\r\n\tfont-size: 16px;\r\n \tborder: 0px solid SlateGray; /*  */\r\n    border-radius: 10px;\r\n    text-shadow: 1px 3px 2px rgba(0,0,0,0.3);\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#frame {\r\n\twidth: 100%;\r\n\theight: 350px;\r\n\tmargin: auto;\r\n\taling: center;\r\n/*\tborder-radius: 50px;*/\r\n\tborder: none;\r\n\toverflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#geocode {\r\n\twidth: 250px;\r\n\theight: 20px;\r\n\tcolor: SlateGray;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: normal;\r\n\ttext-align: center;\r\n\tfont-size: 14px;\r\n\tborder: 1px solid SlateGray;\r\n    border-radius: 7px;\r\n    overflow: hidden;\r\n    outline: none;\t\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput::placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\n#gmap {\r\n\twidth: 100%;  /* 850px .sebm-google-map-container*/\r\n  \theight: 580px;\r\n  \tborder-radius: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='map'>\n\t<br>\n\t<br>\n\t<button id='btn' (click)=\"toggle()\">ОЗНАЙОМИТИСЬ З АДМІНІСТРАТИВНО-ТЕРИТОРІАЛЬНИМ УСТРОЄМ УКРАЇНИ</button>\n\t<br>\n\t<div [ngClass]=\"{invisible: visibility}\">\n\t\t<iframe id=\"frame\"\n\t\t\tsrc=\"https://uk.wikipedia.org/wiki/Вікіпедія:Проект:Населені_пункти_України/Сільради\">\n\t\t\t<a href=\"https://uk.wikipedia.org/wiki/Вікіпедія:Проект:Населені_пункти_України/Сільради\">АДМІНІСТРАТИВНО-ТЕРИТОРІАЛЬНИЙ УСТРІЙ УКРАЇНИ</a>\n\t\t</iframe>\n\t</div>\n\t<br>\n\t<br>\n\t<!-- this creates a google map on the page with the given lat/lng from -->\n\t<!-- the component as the initial center of the map: -->\n\t<div class=\"container\">\n\t\t<div class=\"form-group\">\n\t\t\t<input id=\"geocode\" placeholder=\"знайти на мапі за назвою\" autocorrect=\"off\"\n\t\t\t\tautocapitalize=\"off\" spellcheck=\"off\" type=\"text\"\n\t\t\t\tclass=\"form-control\" #search [formControl]=\"searchControl\">\n\t\t</div>\n\t\t<agm-map id=\"gmap\" [latitude]=\"lat\"\n\t\t\t\t\t\t\t[longitude]=\"lng\"\n\t\t\t\t\t\t\t[zoom]=\"zoom\"\n\t\t\t\t\t\t\t[disableDefaultUI]=\"true\"\n\t\t\t\t\t\t\t[zoomControl]=\"false\"\n\t\t\t\t\t\t\t[draggable]=\"false\"\n\t\t\t\t\t\t\t[minZoom]=\"6\">\n\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\t\t</agm-map>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.visibility = true;
        this.title = 'КАРТА УКРАЇНИ:';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.lat = 48.35;
        this.lng = 31.15;
        this.zoom = 4;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["geocode"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    MapComponent.prototype.toggle = function () {
        this.visibility = !this.visibility;
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MapComponent.prototype, "searchElementRef", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ukraine-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
], MapComponent);

var _a, _b, _c;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n\tmargin: auto;\r\n\twidth: 100%;\t\r\n}\r\n\r\n#mes {\r\n\tmargin: auto;\r\n\twidth: 100%;\r\n\tfont-size: 12px;\r\n\ttext-align: left;\r\n\tbackground: LightYellow;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#from {\r\n\tcursor: pointer;\r\n\tmargin: auto;\r\n\twidth: 53%;\r\n\tfont-size: 11px;\r\n\tcolor: red;\r\n\tbackground: transparent;\r\n \tfont-weight: bold;\r\n \ttext-align: left;\r\n \ttext-shadow: 2px 2px 2px rgba(0,0,0,0.3);\r\n/*\theight: 32px;\r\n\ttext-align: center;\r\n\tpadding: 5px 5px 5px 5px;\r\n    border-radius: 10px;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);*/\r\n \tborder: 0px solid SlateGray; /*  */\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#time {\r\n\tmargin: auto;\r\n\twidth: 38%;\r\n\ttext-align: left;\r\n\tfont-size: 10px;\r\n\tborder: 0px solid LightYellow;\r\n\tcolor: #39c13d;\r\n\tbackground: transparent;\r\n\toverflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#del {\r\n\tmargin: auto;\r\n\twidth: 5%;\r\n\talign: right;\r\n\tcursor: pointer;\r\n\tcolor: black;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n \ttext-align: right;\r\n \tfont-size: 10px;\r\n/*\theight: 32px;\r\n\tright: 5%;\r\n    top: 5%;\r\n\ttext-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n\tborder-radius: 3px;\r\n\ttext-align: center;\r\n    border-radius: 10px;\r\n\tfont-size: 16px;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);*/\r\n \tborder: 0px solid LightYellow; /*  */\r\n    overflow: hidden;\r\n    outline: none;\r\n}\r\n\r\n#textCont {\r\n\twidth: 95%;\r\n\tborder: 0px solid LightYellow;\r\n\tcolor: black;\r\n\tbackground: transparent;\r\n\toverflow: hidden;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='mes'>\n\t<div>\n\t\t<button id='from' (click)=\"toSender()\" >{{message.sender.citizenName.firstName + \" \" + message.sender.citizenName.secondName}}</button>\n\t\t<button id='time'>{{message.dateTime.year + \"-\" + message.dateTime.monthValue + \"-\" + message.dateTime.dayOfMonth + \"  \"\n\t\t + message.dateTime.hour + \"h:\" + message.dateTime.minute + \"m:\" + message.dateTime.second + \"s\"}}</button>\n\t\t<button id='del' (click)=\"deleteMsg()\" >x</button>\n\t</div>\n\t<div>\n\t\t<div id='textCont'>{{message.textContent}}</div> &nbsp;\n\t\t<span id='fileCont'>{{message.embeddedFile}}</span>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appclass_message__ = __webpack_require__("../../../../../src/app/appclass/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__ = __webpack_require__("../../../../../src/app/appservice/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageComponent = (function () {
    function MessageComponent(router, dialogService, activatedRoute) {
        this.router = router;
        this.dialogService = dialogService;
        this.activatedRoute = activatedRoute;
    }
    MessageComponent.prototype.ngOnInit = function () { };
    MessageComponent.prototype.toSender = function () {
        this.goto(this.message.sender.id);
    };
    MessageComponent.prototype.toReceiver = function () {
        this.goto(this.message.receiver.id);
    };
    MessageComponent.prototype.goto = function (id) {
        var _this = this;
        var mainId = this.activatedRoute.snapshot.params['me'];
        if (this.router.navigated === false) {
            this.router.navigateByUrl("/user/" + mainId + "/" + id);
        }
        else {
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/user/" + mainId + "/" + id);
            });
        }
    };
    MessageComponent.prototype.deleteMsg = function () {
        var _this = this;
        this.dialogService.deleteMessage(this.message.id, this.dialogComponent.citizen.main.id).subscribe(function (resp) {
            _this.dialogComponent.rerender();
        });
    };
    return MessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */]) === "function" && _a || Object)
], MessageComponent.prototype, "dialogComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__appclass_message__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__appclass_message__["a" /* Message */]) === "function" && _b || Object)
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-message',
        template: __webpack_require__("../../../../../src/app/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message/message.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__appservice_dialog_service__["a" /* DialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], MessageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\tfont-size: 60;\r\n \tfont-weight: bold;\r\n\ttext-align: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  NOT FOUND!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#registr {\r\n\tposition: absolute;\r\n\tposition: fixed;\r\n    right: 1%;\r\n    top: 70px;\r\n\twidth: 16%;\r\n\tmargin: auto;\r\n \tborder: 1px solid #ccc;\r\n \tborder-radius: 10px;\r\n \tpadding: 20px 1% 1% 1%;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#lb {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tmargin: auto;\r\n\tfont-size: 22px;\r\n\tfont-weight: bold;\r\n    text-align: center;\r\n    color: #696969;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n\ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);\r\n}\r\n\r\n/* form { */\r\n/* \tdisplay:inline-block; */\r\n/* \tmargin: 0 auto; */\r\n/* } */\r\n\r\ninput {\r\n\twidth: 100%;\r\n\theight: 22px;\r\n\tmargin: auto;\r\n    border: 1px solid #ccc;\r\n    border-radius: 7px;\r\n/*     cursor: pointer; */\r\n    font-size: 14px;\r\n    text-align: center;\r\n/*      */       \r\n    color: LightSlateGray;\r\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\r\n \tfont-weight: normal;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n    outline: none;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput::placeholder {\r\n\tcolor: Gainsboro;\r\n}\r\n\r\ninput[type=submit] {\r\n/* \t */\r\n/* \theight: 30px; */\r\n/* \tmargin: auto; */\r\n/*     border: 1px solid #ccc; */\r\n/*     text-align: center; */\r\n/*     font-family: Verdana, Arial, Helvetica, sans-serif; */\r\n/*     text-align: center; */\r\n \r\n \twidth: 100%;\r\n \theight: 40px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n\tfont-size: 20px; \r\n    color: white;\t\r\n \tfont-weight: bold;\r\n \ttext-shadow: 1px 3px 2px rgba(0,0,0,0.3);\r\n \t\r\n\tbackground: deepskyblue; /* For browsers that do not support gradients    dodgerblue*/ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n\tbackground: linear-gradient(deepskyblue, deepskyblue, deepskyblue, yellow, yellow, yellow); /* Standard syntax */\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n\tborder: solid red 1px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n \tborder: solid green 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!app.authorized && home\">\n<div id='registr'>\n\t<div id='lb'><label>Зареєструватися:</label></div><br>\n\t<form id='reg-form' #myForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"form-group\">\n\t        <input type=\"search\" list=\"communities\" class=\"form-control\" name=\"community\" [(ngModel)]=\"communityStr\" required\n\t\t\t\t\tplaceholder=\"Назва адм.-терит. одиниці\" [formControl]=\"communityControl\"> \n\t\t\t<datalist id=\"communities\">\n\t\t\t\t<option *ngFor=\"let item of communities\">{{item?.communityName + \", \" + item?.rayon + \", \" + item?.oblast + \" (\" + item?.id + \")\"}}</option>\n\t\t   \t</datalist>\n\t    </div><br>\n\t    <div class=\"form-group\">\n\t        <input class=\"form-control\" name=\"firstName\" placeholder=\"Ваше ім'я\" [(ngModel)]=\"citizen.citizenName.firstName\"\n\t        \t\trequired pattern=\"^[а-яєіїА-ЯЄІЇa-zA-Z ]*$\">\n\t    </div><br>\n\t    <div class=\"form-group\">\n\t        <input class=\"form-control\" name=\"secondName\" placeholder=\"Ваше прізвище\" [(ngModel)]=\"citizen.citizenName.secondName\"\n\t        \t\trequired pattern=\"^[а-яєіїА-ЯЄІЇa-zA-Z ]*$\">\n\t    </div><br>\n\t    <div class=\"form-group\">\n\t        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Ваш e-mail\" [(ngModel)]=\"citizen.email\"\n\t\t\t\t\trequired pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\"/>\n\t    </div><br>\n\t    <div class=\"form-group\">\n\t        <input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Ваш пароль\" [(ngModel)]=\"password\"\n\t\t\t\t\trequired pattern=\"^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$\"/>\n\t    </div><br><br>\n\t    <div class=\"form-group\">\n\t        <input type=\"submit\" [disabled]=\"myForm.invalid\" class=\"btn btn-default\" value=\"РЕЄСТРАЦІЯ\" />\n\t    </div>\n\t</form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__ = __webpack_require__("../../../../../src/app/appclass/citizen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appclass_fullname__ = __webpack_require__("../../../../../src/app/appclass/fullname.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appservice_citizen_service__ = __webpack_require__("../../../../../src/app/appservice/citizen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appservice_community_service__ = __webpack_require__("../../../../../src/app/appservice/community.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RegistrationComponent = (function () {
    function RegistrationComponent(router, citizenService, communityService) {
        this.router = router;
        this.citizenService = citizenService;
        this.communityService = communityService;
        this.communities = [];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.home = ('/home' === event.url || '/' === event.url);
            }
        });
        this.newCitizen();
        this.communityControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('аб');
        this.communityControl.valueChanges
            .debounceTime(100)
            .switchMap(function (nameStart) { return _this.communityService.findCommunities(nameStart); })
            .subscribe(function (resp) {
            _this.communities = resp;
        });
    };
    RegistrationComponent.prototype.onBlur = function () {
        var _this = this;
        this.communityService.findCommunities('аб').subscribe(function (resp) { return _this.communities = resp; });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var community = this.communityStr.split(' (');
        var id = community[1].replace(')', '');
        this.communityService.getCommunity(id).subscribe(function (resp) {
            _this.citizen.community = resp;
            _this.citizenService.save(_this.citizen, _this.password).subscribe(function (response) {
                _this.app.citizen = response.json().citizen;
                _this.app.authorized = true;
                _this.newCitizen();
                _this.goto(_this.app.citizen.id);
            });
        });
    };
    RegistrationComponent.prototype.newCitizen = function () {
        if (this.form)
            this.form.reset();
        this.citizen = new __WEBPACK_IMPORTED_MODULE_2__appclass_citizen__["a" /* Citizen */]();
        this.citizen.citizenName = new __WEBPACK_IMPORTED_MODULE_3__appclass_fullname__["a" /* FullName */]();
    };
    RegistrationComponent.prototype.goto = function (id) {
        var _this = this;
        if (this.router.navigated === false) {
            this.router.navigateByUrl("/user/" + id + "/" + id);
        }
        else {
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/user/" + id + "/" + id);
            });
        }
    };
    return RegistrationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('myForm'),
    __metadata("design:type", Object)
], RegistrationComponent.prototype, "form", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]) === "function" && _a || Object)
], RegistrationComponent.prototype, "app", void 0);
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gruk-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__appservice_citizen_service__["a" /* CitizenService */], __WEBPACK_IMPORTED_MODULE_5__appservice_community_service__["a" /* CommunityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__appservice_citizen_service__["a" /* CitizenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__appservice_citizen_service__["a" /* CitizenService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__appservice_community_service__["a" /* CommunityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__appservice_community_service__["a" /* CommunityService */]) === "function" && _d || Object])
], RegistrationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map