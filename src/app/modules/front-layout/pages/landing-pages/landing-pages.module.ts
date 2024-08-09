import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {IndexComponent} from "./index/index.component";
import {SidebarComponent} from "./landing-page1/components/sidebar/sidebar.component";
import {NavbarComponent} from "./landing-page1/components/navbar/navbar.component";
// import {FooterAdminComponent} from "./landing-page1/components/footer-admin/footer-admin.component";
// import {ComponentsComponent} from "../admin-layout/pages/components/components.component";
// import {EditorComponent} from "../admin-layout/pages/editor/editor.component";
// import {ComponentsModule} from "../../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {LandingPage1Component} from "./landing-page1/landing-page1.component";
import {LandingPage2Component} from "./landing-page2/landing-page2.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {MenuComponent} from "./landing-page1/components/sidebar/menu/menu.component";
import {SubmenuComponent} from "./landing-page1/components/sidebar/submenu/submenu.component";
import {LandingPagesRoutingModule} from "./landing-pages-routing.module";
import {ComponentsModuleLanding1} from "./landing-page1/components/components.module";
import {ComponentsModuleLanding2} from "./landing-page2/components/components.module";
import {FrontLayoutRoutingModule} from "../../front-layout-routing.module";
import {IndexComponent} from "./index/index.component";
import {ComponentsModule} from "../../../../components/components.module";
import {ComponentsModuleLanding3} from "./landing-page3/components/components.module";
import {LandingPage3Component} from "./landing-page3/landing-page3.component";
// import { BreadcrumbsComponent } from './landing-pages3/components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    IndexComponent,
    // SidebarComponent,
    // MenuComponent,
    // SubmenuComponent,
    // NavbarComponent,
    // FooterAdminComponent,
    // EditorComponent,
    LandingPage1Component,
    LandingPage2Component,
    LandingPage3Component,
    // BreadcrumbsComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        LandingPagesRoutingModule,
        ComponentsModuleLanding1,
        ComponentsModuleLanding2,
        ComponentsModuleLanding3,
        ComponentsModule,
        ComponentsModule
    ],
  exports: [IndexComponent],
  providers: []
})
export class LandingPagesModule { }
