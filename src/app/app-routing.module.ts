import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AppComponent} from "./app.component";
import {AuthModule} from "./modules/auth/auth.module";
import {LoginAdminComponent} from "./modules/auth/pages/admin/login-admin/login-admin.component";
import {NonAuthGuard} from "./services/guards/non-auth.guard";

const routes: Routes = [
  {
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    path: 'admin',
    loadChildren: () => import('./modules/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    path: '',
    loadChildren: () => import('./modules/front-layout/front-layout.module').then(m => m.FrontLayoutModule)
  },

  { path: "",redirectTo: "auth/login",  pathMatch: "full" },
  // admin views
  // { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
