import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterAuthComponent} from "./footer/footer-auth.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuComponent} from "./sidebar/menu/menu.component";
import {SubmenuComponent} from "./sidebar/submenu/submenu.component";

@NgModule({
  declarations: [
    FooterAuthComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    SubmenuComponent,
    NavbarComponent,
    FooterAuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
    exports: [
        FooterAuthComponent,
        SidebarComponent,
        NavbarComponent,
    ]
})
export class ComponentsAuthModule { }
