import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterAdminComponent} from "./footer-admin/footer-admin.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuComponent} from "./sidebar/menu/menu.component";
import {SubmenuComponent} from "./sidebar/submenu/submenu.component";
import {SliderMarvelComponent} from "./slider-marvel/slider-marvel.component";
import {ComponentsModule} from "../../../../../../components/components.module";

@NgModule({
  declarations: [
    FooterAdminComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    SubmenuComponent,
    NavbarComponent,
    FooterAdminComponent,
    SliderMarvelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
    exports: [
        FooterAdminComponent,
        SidebarComponent,
        NavbarComponent,
        SliderMarvelComponent
    ]
})
export class ComponentsModuleLanding2 { }
