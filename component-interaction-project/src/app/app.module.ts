import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { NavComponent } from './page/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EmployeeComponent,
    QuizComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
