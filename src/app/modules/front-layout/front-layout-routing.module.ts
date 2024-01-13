import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
// import {LandingPagesComponent} from "./pages/landing-pages/landing-pages.component";
// import {LandingPage1Component} from "./pages/landing-pages/landing-page1/landing-page1.component";
// import {LandingPage2Component} from "./pages/landing-pages/landing-page2/landing-page2.component";
// import {DashboardComponent} from "../admin-layout/pages/dashboard/dashboard.component";
// import {UsersComponent} from "../admin-layout/pages/users/users.component";
// import {SettingsComponent} from "../admin-layout/pages/settings/settings.component";
// import {TutorialComponent} from "../admin-layout/pages/tutorial/tutorial.component";
// import {EditorComponent} from "../admin-layout/pages/editor/editor.component";
// import {ComponentsComponent} from "../admin-layout/pages/components/components.component";
// import {ButtonsComponent} from "../admin-layout/pages/components/buttons/buttons.component";
// import {Buttons3dComponent} from "../admin-layout/pages/components/buttons3d/buttons3d.component";
// import {CardsComponent} from "../admin-layout/pages/components/cards/cards.component";
// import {InputsComponent} from "../admin-layout/pages/components/inputs/inputs.component";

const routes: Routes = [
  // {
  //   path: 'landings', data: { breadcrumb: 'landings' },
  //   loadChildren: () => import('./pages/landing-pages/landing-pages.module').then(m => m.LandingPagesModule)
  // },
  {
    path: '',
    component: IndexComponent,
    data: { breadcrumb: '' },
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    children: [
      {
        path: 'landings',
        loadChildren: () => import('./pages/landing-pages/landing-pages.module').then(m => m.LandingPagesModule)
      },
        ],
    //   // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class FrontLayoutRoutingModule { }
