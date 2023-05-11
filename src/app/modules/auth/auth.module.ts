import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {RouterOutlet} from "@angular/router";
import {AdminLayoutRoutingModule} from "../admin-layout/admin-layout-routing.module";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [IndexComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [IndexComponent],
})
export class AuthModule { }
