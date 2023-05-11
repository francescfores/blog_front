import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SignInComponent} from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    children: [
      { path: "sign-in", component: SignInComponent },
      // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
