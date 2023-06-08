import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {BlogModule} from './blog.module';
import {UsersComponent} from "../admin-layout/pages/users/users.component";
import {SettingsComponent} from "../admin-layout/pages/settings/settings.component";
import {TutorialComponent} from "../admin-layout/pages/tutorial/tutorial.component";
import {CreateBlogComponent} from "./blog-admin/create/create-blog.component";
import {UpdateBlogComponent} from "./blog-admin/update/update-blog.component";
import {AuthGuard} from "../../services/guards/auth.guard";
import {DashboardComponent} from "../admin-layout/pages/dashboard/dashboard.component";
import {ShowPostComponent} from "./blog-admin/show/show-post.component";

// import {InputsComponent} from "../admin-layout/pages/components/inputs/inputs.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      roles: ['superadmin','admin']
    },
    children: [
      { path: "", component: ShowPostComponent },
      { path: "create", component: CreateBlogComponent },
      { path: "update", component: UpdateBlogComponent },
    ]
  }
    // ],
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class BlogRoutingModule { }
