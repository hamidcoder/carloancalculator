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
var core_1 = require("@angular/core");
var BusinessPersons = (function () {
    function BusinessPersons() {
        this.salary = 75000;
    }
    BusinessPersons.prototype.checkValidation = function () {
        if (isNaN(this.age) || this.age < 12 || this.age > 70 || isNaN(this.income) || this.income < this.salary || this.citizen != "Pakistan") {
            this.msg = "Sorry...!! You are not Eligible";
        }
        else {
            this.msg = "You are Eligible for Car Loan as Business Person.....";
            this.redirect = "Go for Plan";
        }
    };
    BusinessPersons = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'component-business.html',
            styleUrls: ['forms.css', 'styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BusinessPersons);
    return BusinessPersons;
}());
exports.BusinessPersons = BusinessPersons;
//# sourceMappingURL=component-business.js.map