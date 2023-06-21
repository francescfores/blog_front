import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AppComponent} from "./app.component";
import {AuthModule} from "./modules/auth/auth.module";
import {LoginAdminComponent} from "./modules/auth/pages/admin/login-admin/login-admin.component";
import {NonAuthGuard} from "./services/guards/non-auth.guard";
import {BlogModule2} from "./modules/blog2/blog.module";

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
    path: 'front',
    loadChildren: () => import('./modules/front-layout/front-layout.module').then(m => m.FrontLayoutModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  // },
  {
    path: '',
    loadChildren: () => import('./modules/blog2/blog.module').then(m => m.BlogModule2)
  },
  // admin views
  // { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
