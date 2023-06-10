import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {BlogModule} from './blog.module';
import {UsersComponent} from "../admin-layout/pages/users/users.component";
import {SettingsComponent} from "../admin-layout/pages/settings/settings.component";
import {TutorialComponent} from "../admin-layout/pages/tutorial/tutorial.component";
import {CreateBlogComponent} from "./post/create/create-blog.component";
import {UpdateBlogComponent} from "./post/update/update-blog.component";
import {AuthGuard} from "../../services/guards/auth.guard";
import {DashboardComponent} from "../admin-layout/pages/dashboard/dashboard.component";
import {ShowPostComponent} from "./post/show/show-post.component";

// import {InputsComponent} from "../admin-layout/pages/components/inputs/inputs.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      breadcrumb: 'blog'
    },
    children: [
      { path: "posts", component: ShowPostComponent,
        data: {
          breadcrumb: 'posts'
        },
      },
      { path: "create", component: CreateBlogComponent,
        data: {
          breadcrumb: 'create'
        },
      },
      { path: 'update/:name', component: UpdateBlogComponent, pathMatch: 'prefix',
        data: {
          breadcrumb: 'update'
        },
      },
    ]
  }
    // ],
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class BlogRoutingModule { }
