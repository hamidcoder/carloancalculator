import { Component } from '@angular/core';



@Component({
  moduleId:  module.id,
  selector: 'salary-component',
  templateUrl: 'component-salary.html',
  styleUrls:['forms.css',
    'styles.css']
})
export class SalaryIndividuals {

  age: number;
  income: number;
  msg: string;
  salary: number= 50000;
  citizen: string;
  redirect: String;



   checkValidation():void {


     if (isNaN(this.age) || this.age < 12 || this.age > 66 || isNaN(this.income) || this.income < this.salary || this.citizen != "Pakistan") {
       this.msg = "Sorry...!! You are not Eligible";
     } else {
       this.msg = "You are Eligible for Car Loan as Salary Individual....";
        this.redirect= "Go for Plan";


     }


   }


}
