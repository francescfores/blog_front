import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {RouterOutlet} from "@angular/router";
import {AdminLayoutRoutingModule} from "../admin-layout/admin-layout-routing.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginAdminComponent} from "./pages/admin/login-admin/login-admin.component";
import {RegisterAdminComponent} from "./pages/admin/register-admin/register-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";
import {LoginComponent} from "./pages/client/login/login.component";
import {RegisterComponent} from "./pages/client/register/register.component";
import {ComponentsModule} from "../../components/components.module";
import {AdminLayoutModule} from "../admin-layout/admin-layout.module";
import {ComponentsAuthModule} from "./components/components-auth.module";



@NgModule({
  declarations: [IndexComponent, SignInComponent, LoginAdminComponent, RegisterAdminComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleSigninButtonModule,
    ComponentsModule,
    AdminLayoutModule,
    ComponentsAuthModule
  ],
  exports: [IndexComponent],
})
export class AuthModule { }
