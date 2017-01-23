import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'component-calculator.html',
  styleUrls:['forms.css',
    'styles.css']
})

export class InstallmentCalculator{

  msg: string;
  carModel: number;
  dwpymt: number;
  markup: number;
  years: number;
  totalPayment: number;
  installmenst: number;

  installmentPerMonth: number;



  plan():void{
    // lets substract downpayment from total payment of car
    this.totalPayment= this.carModel-this.dwpymt;

    //calculate installents

     this.installmenst= this.totalPayment/12*this.years;


     // lets calculate markup
    if (this.years=3){

       this.markup = 12/this.totalPayment*0.12
    }
    else if(this.years=4){
      this.markup = 12/this.totalPayment*0.13
    }
    else {
      this.markup = 12/this.totalPayment*0.15
    }

      this.installmentPerMonth= this.markup+this.installmenst;

      this.msg = "Total payment value per month :"+this.installmentPerMonth;
  }

}
