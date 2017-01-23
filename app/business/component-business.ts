import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl:'component-business.html',
  styleUrls: ['forms.css', 'styles.css']
})

export class BusinessPersons{

  age: number;
  income: number;
  msg: string;
  salary: number= 75000;
  citizen: string;
  redirect: String;

  checkValidation():void {


    if (isNaN(this.age) || this.age < 12 || this.age > 70 || isNaN(this.income) || this.income < this.salary || this.citizen != "Pakistan") {
      this.msg = "Sorry...!! You are not Eligible";
    } else {
      this.msg = "You are Eligible for Car Loan as Business Person.....";
      this.redirect= "Go for Plan";
    }


  }



}
