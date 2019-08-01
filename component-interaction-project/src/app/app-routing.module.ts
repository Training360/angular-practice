import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { QuizComponent } from './page/quiz/quiz.component';


const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "employee", component: EmployeeComponent},
  {path: "quiz", component: QuizComponent},
  {path: "**", component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
