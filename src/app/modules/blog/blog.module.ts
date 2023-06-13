import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateBlogComponent } from './pages-admin/post-admin/create/create-blog.component';
import { UpdateBlogComponent } from './pages-admin/post-admin/update/update-blog.component';
import {AdminLayoutRoutingModule} from "../admin-layout/admin-layout-routing.module";
import {IndexComponent} from "./index/index.component";
import {BlogRoutingModule} from "./blog-routing.module";
import {ShowPostComponent} from "./pages-admin/post-admin/show/show-post.component";
import {ComponentsModule} from "../../components/components.module";
import { CreateContentComponent } from './pages-admin/post-admin/content/create/create-content/create-content.component';
import { ShowContentComponent } from './pages-admin/post-admin/content/show/show-content/show-content.component';
import { UpdateContentComponent } from './pages-admin/post-admin/content/update/update-content/update-content.component';
import { LatestComponent } from './pages/latest/latest.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BonusComponent } from './pages/bonus/bonus.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import {ComponentsModuleBlog} from "./components/components.module";
import {IndexAdminComponent} from "./index-admin/index-admin.component";
import { CategoryComponent } from './pages/posts/category/category.component';
import { PostComponent } from './pages/posts/post/post.component';



@NgModule({
  declarations: [
    IndexComponent,
    IndexAdminComponent,
    ShowPostComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    CreateContentComponent,
    ShowContentComponent,
    UpdateContentComponent,
    LatestComponent,
    ContactComponent,
    BonusComponent,
    PostsComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
  ],
  exports: [
    IndexComponent,
    IndexAdminComponent,
    ShowPostComponent,
    CreateBlogComponent,
    UpdateBlogComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BlogRoutingModule,
        ComponentsModule,
        FormsModule,
        ComponentsModuleBlog
    ]
})
export class BlogModule { }
