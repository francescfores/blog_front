import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {LoginAdminComponent} from "./pages/admin/login-admin/login-admin.component";
import {RegisterAdminComponent} from "./pages/admin/register-admin/register-admin.component";
import {NonAuthGuard} from "../../services/guards/non-auth.guard";
import {LoginComponent} from "./pages/client/login/login.component";
import {RegisterComponent} from "./pages/client/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ]
  },
  {
    path: "admin",
    component: IndexComponent,
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    children: [
      { path: "login", component: LoginAdminComponent },
      { path: "register", component: RegisterAdminComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
