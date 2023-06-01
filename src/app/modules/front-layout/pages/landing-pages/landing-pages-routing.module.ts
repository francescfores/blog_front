import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {IndexComponent} from './index/index.component';
import {LandingPage1Component} from "./landing-page1/landing-page1.component";
import {LandingPage2Component} from "./landing-page2/landing-page2.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    children: [
          {path: "landing1", component: LandingPage1Component},
          {path: "landing2", component: LandingPage2Component},
      // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
