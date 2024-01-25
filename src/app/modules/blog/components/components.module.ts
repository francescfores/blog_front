import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterAdminComponent} from "./footer-admin/footer-admin.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuComponent} from "./sidebar/menu/menu.component";
import {SubmenuComponent} from "./sidebar/submenu/submenu.component";
import {Slider3Component} from "./slider-3/slider-3.component";
import {ComponentsModule} from "../../../components/components.module";
import { PaintContentsComponent } from './posts/contents/paint-contents/paint-contents.component';
import { EditorPostComponent } from './posts/editor-post/editor-post.component';
import { EditorContentComponent } from './posts/contents/editor-content/editor-content.component';
// import {ComponentsModule} from "../../../../../../components/components.module";
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    FooterAdminComponent,
    SidebarComponent,
    NavbarComponent,
    MenuComponent,
    SubmenuComponent,
    FooterAdminComponent,
    Slider3Component,
    PaintContentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    DragDropModule
    // ComponentsModule,
  ],
    exports: [
        FooterAdminComponent,
        SidebarComponent,
        NavbarComponent,
        Slider3Component,
        PaintContentsComponent,
    ]
})
export class ComponentsModuleBlog { }
