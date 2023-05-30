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

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "users", component: UsersComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tutorials", component: TutorialComponent },
      { path: "components", component: ComponentsComponent,
      children:[
        { path: "buttons", component: ButtonsComponent },
        { path: "buttons3d", component: Buttons3dComponent },
        { path: "cards", component: CardsComponent },
        { path: "inputs", component: InputsComponent }
      ],
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
