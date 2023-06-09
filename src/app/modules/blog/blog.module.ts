import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateBlogComponent } from './blog-admin/create/create-blog.component';
import { UpdateBlogComponent } from './blog-admin/update/update-blog.component';
import {AdminLayoutRoutingModule} from "../admin-layout/admin-layout-routing.module";
import {IndexComponent} from "./index/index.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {ShowPostComponent} from "./blog-admin/show/show-post.component";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [
    IndexComponent,
    ShowPostComponent,
    CreateBlogComponent,
    UpdateBlogComponent
  ],
  exports: [
    IndexComponent,
    ShowPostComponent,
    CreateBlogComponent,
    UpdateBlogComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BlogRoutingModule,
        ComponentsModule,
        FormsModule
    ]
})
export class BlogModule { }
