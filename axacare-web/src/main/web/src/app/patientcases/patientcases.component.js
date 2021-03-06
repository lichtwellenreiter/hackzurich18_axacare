"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var api_service_1 = require("../_services/api.service");
var PatientcasesComponent = /** @class */ (function () {
    function PatientcasesComponent(api, http) {
        this.api = api;
        this.http = http;
    }
    PatientcasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("../assets/data/cases.json").subscribe(function (data) { return _this.cases = data; }, function (error) { return console.error("cannot load cases"); });
    };
    PatientcasesComponent = __decorate([
        core_1.Component({
            selector: 'app-patientcases',
            templateUrl: './patientcases.component.html',
            styleUrls: ['./patientcases.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, http_1.HttpClient])
    ], PatientcasesComponent);
    return PatientcasesComponent;
}());
exports.PatientcasesComponent = PatientcasesComponent;
//# sourceMappingURL=patientcases.component.js.map