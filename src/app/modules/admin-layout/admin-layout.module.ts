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
import { CardsComponent } from './pages/components/cards/cards.component';
import { ButtonsComponent } from './pages/components/buttons/buttons.component';
import { InputsComponent } from './pages/components/inputs/inputs.component';
import { Btn3dComponent } from './components/btn3d/btn3d.component';
import { Buttons3dComponent } from './pages/buttons3d/buttons3d.component';



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
    ComponentsComponent,
    CardsComponent,
    ButtonsComponent,
    InputsComponent,
    Btn3dComponent,
    Buttons3dComponent
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
