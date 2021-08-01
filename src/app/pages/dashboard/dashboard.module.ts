
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes = [
{
  path: "",
  component: DashboardComponent
},
{
  path: "login",
  component: LoginComponent
}
]


@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
