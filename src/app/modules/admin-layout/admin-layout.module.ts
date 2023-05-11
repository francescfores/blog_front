import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndexComponent} from "./index/index.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {AdminLayoutRoutingModule} from "./admin-layout-routing.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterAdminComponent} from "./components/footer-admin/footer-admin.component";
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { SubmenuComponent } from './components/sidebar/submenu/submenu.component';
import { ComponentsComponent } from './pages/components/components.component';



@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
    SidebarComponent,
    NavbarComponent,
    FooterAdminComponent,
    MenuComponent,
    SubmenuComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    AdminLayoutRoutingModule
  ],
  exports: [IndexComponent],
  providers: []
})
export class AdminLayoutModule { }
