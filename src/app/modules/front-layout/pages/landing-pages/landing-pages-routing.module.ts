import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {IndexComponent} from './index/index.component';
import {LandingPage1Component} from "./landing-page1/landing-page1.component";
import {LandingPage2Component} from "./landing-page2/landing-page2.component";
import {IndexComponent} from "./index/index.component";
import {LandingPage3Component} from "./landing-page3/landing-page3.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { breadcrumb: 'landings' },
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    children: [
      {
        path: "landing1", component: LandingPage1Component,
        data: { breadcrumb: 'landing1' },
      },
      {
        path: "landing2", component: LandingPage2Component,
        data: {breadcrumb: 'landing2'},
      },
      {
        path: "landing3", component: LandingPage3Component,
        data: { breadcrumb: 'landing3' },
      },
      // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
