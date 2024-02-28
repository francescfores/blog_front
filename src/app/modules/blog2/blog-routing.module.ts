import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {BlogModule2} from './blog.module';
import {UsersComponent} from "../admin-layout/pages/users/users.component";
import {SettingsComponent} from "../admin-layout/pages/settings/settings.component";
import {TutorialComponent} from "../admin-layout/pages/tutorial/tutorial.component";
import {CreatePostComponent} from "./components/posts/create-post/create-post.component";
import {UpdatePostComponent} from "./components/posts/update-post/update-post.component";
import {AuthGuard} from "../../services/guards/auth.guard";
import {DashboardComponent} from "../admin-layout/pages/dashboard/dashboard.component";
import {ShowPostComponent} from "./components/posts/show-post/show-post.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {HomeComponent} from "./pages/home/home.component";
import {IndexAdminComponent} from "./index-admin/index-admin.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {BonusComponent} from "./pages/bonus/bonus.component";
import {LatestComponent} from "./pages/latest/latest.component";
import {CategoryComponent} from "./pages/posts/category/category.component";
import {PostComponent} from "./pages/posts/post/post.component";
import {NonAuthGuard} from "../../services/guards/non-auth.guard";

// import {InputsComponent} from "../admin-layout/pages/components/inputs/inputs.component";

const routes: Routes = [
  {
    path: 'blog2-admin',
    component: IndexAdminComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    data: {
      breadcrumb: 'blog'
    },
    children: [
      { path: "posts", component: ShowPostComponent,
        data: {
          breadcrumb: 'posts'
        },
      },
      { path: "create", component: CreatePostComponent,
        data: {
          breadcrumb: 'create'
        },
      },
      { path: 'update/:name', component: UpdatePostComponent, pathMatch: 'prefix',
        data: {
          breadcrumb: 'update'
        },
      },
    ]
  },
  {
    path: '',
    component: IndexComponent,
    // canActivate: [NonAuthGuard],
    // canActivateChild: [NonAuthGuard],
    // data: {
    //   breadcrumb: 'blog'
    // },
    children: [
      { path: "", component: HomeComponent,
        // data: {
        //   breadcrumb: 'home'
        // },
      },
      { path: "editor/result", component: LatestComponent,
        data: {
          breadcrumb: 'latest'
        },
      },
      { path: "latest", component: LatestComponent,
        data: {
          breadcrumb: 'latest'
        },
      },
      { path: "posts", component: PostsComponent,
        data: {
          breadcrumb: 'posts'
        },
      },
      { path: 'posts/:catname', component: CategoryComponent, pathMatch: 'prefix',
        data: {
          breadcrumb: ':category'
        },
      },
      { path: 'posts/:catname/:postname', component: PostComponent, pathMatch: 'prefix',
        data: {
          breadcrumb: ':postname'
        },
      },
      { path: "bonus", component: BonusComponent,
        data: {
          breadcrumb: 'bonus'
        },
      },
      { path: "contact", component: ContactComponent,
        data: {
          breadcrumb: 'contact'
        },
      },
    ]
  },
  // { path: '',redirectTo: "blog",  pathMatch: "full" },

  // ],
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class BlogRoutingModule { }
