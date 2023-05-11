import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import {UserDropdownComponent} from "./dropdowns/user-dropdown/user-dropdown.component";
import {NotificationDropdownComponent} from "./dropdowns/notification-dropdown/notification-dropdown.component";
import {TableDropdownComponent} from "./dropdowns/table-dropdown/table-dropdown.component";
import {PagesDropdownComponent} from "./dropdowns/pages-dropdown/pages-dropdown.component";
import {IndexDropdownComponent} from "./dropdowns/index-dropdown/index-dropdown.component";

@NgModule({
  declarations: [
    CategoryFiltersComponent,
    UserDropdownComponent,
    NotificationDropdownComponent,
    IndexDropdownComponent,
    TableDropdownComponent,
    PagesDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UserDropdownComponent,
    IndexDropdownComponent,
    NotificationDropdownComponent,
    TableDropdownComponent,
    PagesDropdownComponent,
  ]
})
export class ComponentsModule { }
