import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateBlogComponent } from './post/create/create-blog.component';
import { UpdateBlogComponent } from './post/update/update-blog.component';
import {AdminLayoutRoutingModule} from "../admin-layout/admin-layout-routing.module";
import {IndexComponent} from "./index/index.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {ShowPostComponent} from "./post/show/show-post.component";
import {ComponentsModule} from "../../components/components.module";
import { CreateContentComponent } from './post/content/create/create-content/create-content.component';
import { ShowContentComponent } from './post/content/show/show-content/show-content.component';
import { UpdateContentComponent } from './post/content/update/update-content/update-content.component';



@NgModule({
  declarations: [
    IndexComponent,
    ShowPostComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    CreateContentComponent,
    ShowContentComponent,
    UpdateContentComponent,
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
