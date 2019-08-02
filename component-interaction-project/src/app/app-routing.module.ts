import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { BillComponent } from './page/bill/bill.component';


const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "employee", component: EmployeeComponent},
  {path: "bill", component: BillComponent},
  {path: "**", component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
