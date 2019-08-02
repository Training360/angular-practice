import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { NavComponent } from './page/nav/nav.component';
import { BillComponent } from './page/bill/bill.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EmployeeComponent,
    QuizComponent,
    NavComponent,
    BillComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
