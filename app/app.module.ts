import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {SalaryIndividuals} from './salary/component-salary';
import {BusinessPersons} from './business/component-business';
import {InstallmentCalculator} from './calculator/component-calculator';
import { AppComponent }  from './app.component';
import { RouterModule }   from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ,RouterModule.forRoot([
    {path: 'salary', component: SalaryIndividuals},
    {path: 'business', component: BusinessPersons},
    {path: 'plan', component: InstallmentCalculator},
    {path: ' ', component: AppComponent},
    {path: '', redirectTo: 'AppComponent', pathMatch: 'full'}
      ]) ],
  declarations: [ AppComponent,SalaryIndividuals,BusinessPersons,InstallmentCalculator ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
