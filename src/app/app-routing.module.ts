import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AppComponent} from "./app.component";
import {AuthModule} from "./modules/auth/auth.module";

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // admin views
  // { path: "", component: AppComponent },
  // { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
