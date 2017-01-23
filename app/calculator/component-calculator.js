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
var InstallmentCalculator = (function () {
    function InstallmentCalculator() {
    }
    InstallmentCalculator.prototype.plan = function () {
        // lets substract downpayment from total payment of car
        this.totalPayment = this.carModel - this.dwpymt;
        //calculate installents
        this.installmenst = this.totalPayment / 12 * this.years;
        // lets calculate markup
        if (this.years = 3) {
            this.markup = 12 / this.totalPayment * 0.12;
        }
        else if (this.years = 4) {
            this.markup = 12 / this.totalPayment * 0.13;
        }
        else {
            this.markup = 12 / this.totalPayment * 0.15;
        }
        this.installmentPerMonth = this.markup + this.installmenst;
        this.msg = "Total payment value per month :" + this.installmentPerMonth;
    };
    InstallmentCalculator = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'component-calculator.html',
            styleUrls: ['forms.css',
                'styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InstallmentCalculator);
    return InstallmentCalculator;
}());
exports.InstallmentCalculator = InstallmentCalculator;
//# sourceMappingURL=component-calculator.js.map