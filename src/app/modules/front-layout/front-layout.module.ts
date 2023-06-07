import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
// import {SidebarComponent} from "./components/sidebar/sidebar.component";
// import {NavbarComponent} from "./components/navbar/navbar.component";
// import {FooterAdminComponent} from "./components/footer-admin/footer-admin.component";
// import {ComponentsComponent} from "../admin-layout/pages/components/components.component";
import {EditorComponent} from "../admin-layout/pages/editor/editor.component";
import {ComponentsModule} from "../../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {RouterOutlet} from "@angular/router";
import {FrontLayoutRoutingModule} from "./front-layout-routing.module";
import {AppComponent} from "../../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
// import { BreadcrumbsComponent } from './pages/landing-pages3/components/breadcrumbs/breadcrumbs.component';
// import {MenuComponent} from "./components/sidebar/menu/menu.component";
// import {SubmenuComponent} from "./components/sidebar/submenu/submenu.component";



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FrontLayoutRoutingModule
  ],
  exports: [IndexComponent],
})
export class FrontLayoutModule { }
