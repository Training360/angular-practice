import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { UserListComponent } from './page/user-list/user-list.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
