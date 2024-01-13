import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {ButtonsComponent} from "./pages/components/buttons/buttons.component";
import {CardsComponent} from "./pages/components/cards/cards.component";
import {InputsComponent} from "./pages/components/inputs/inputs.component";
import {Buttons3dComponent} from "./pages/components/buttons3d/buttons3d.component";
import {TutorialComponent} from "./pages/tutorial/tutorial.component";
import {EditorComponent} from "./pages/editor/editor.component";
import {AuthGuard} from "../../services/guards/auth.guard";
import {NonAuthGuard} from "../../services/guards/non-auth.guard";
// import {LandingPage1Component} from "../front-layout/pages/landing-pages/landing-page1/landing-page1.component";
// import {LandingPage2Component} from "../front-layout/pages/landing-pages/landing-page2/landing-page2.component";
// import {LandingPagesComponent} from "../front-layout/pages/landing-pages/landing-pages.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent,
        data: { breadcrumb: 'dashboard' },
      },
      // { path: "landings", component: LandingPagesComponent,
      //   children: [
      //     {path: "landing1", component: LandingPagesComponent},
      //     {path: "landing1", component: LandingPage1Component},
      //     {path: "landing2", component: LandingPage2Component},
      //   ],
      // },
      { path: "users", component: UsersComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tutorials", component: TutorialComponent },
      { path: "editor", component: EditorComponent },
      { path: "components", component: ComponentsComponent,
      children:[
        { path: "buttons", component: ButtonsComponent },
        { path: "buttons3d", component: Buttons3dComponent },
        { path: "cards", component: CardsComponent },
        { path: "inputs", component: InputsComponent }
      ],
      },
      {
        path: '',
        loadChildren: () => import('./../../modules/blog/blog.module').then(m => m.BlogModule)
      },
      // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
