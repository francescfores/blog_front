import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ComponentsComponent} from "./pages/components/components.component";

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
      { path: "components", component: ComponentsComponent },
      // { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
