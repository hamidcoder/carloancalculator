import { Component } from '@angular/core';
import {SalaryIndividuals} from './salary/component-salary' ;

@Component({
  selector: 'my-app',
  template: `<div align="center">
  <h1>Car Loan System</h1>
  <a [routerLink] = "['/salary']" > Salary Individual</a>
  <a [routerLink] = "['/business']"> Business Person</a>
</div>
            <div class='container'>
            <router-outlet></router-outlet>
        </div>
`,
})
export class AppComponent  { name = 'Angular'; }
