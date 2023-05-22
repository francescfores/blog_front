import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import {UserDropdownComponent} from "./dropdowns/user-dropdown/user-dropdown.component";
import {NotificationDropdownComponent} from "./dropdowns/notification-dropdown/notification-dropdown.component";
import {TableDropdownComponent} from "./dropdowns/table-dropdown/table-dropdown.component";
import {PagesDropdownComponent} from "./dropdowns/pages-dropdown/pages-dropdown.component";
import {IndexDropdownComponent} from "./dropdowns/index-dropdown/index-dropdown.component";
import {CardStatsComponent} from "./cards/card-stats/card-stats.component";
import {ButtonDefaultComponent} from "./buttons/button-default/button-default.component";
import {CardDefaultComponent} from "./cards/card-default/card-default.component";
import {CardPricingComponent} from "./cards/card-pricing/card-pricing.component";
import {CardBackgroundComponent} from "./cards/card-background/card-background.component";
import { InputDefaultComponent } from './inputs/input-default/input-default.component';
import {ButtonFilledComponent} from "./buttons/button-filled/button-filled.component";
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [
    CategoryFiltersComponent,
    UserDropdownComponent,
    NotificationDropdownComponent,
    IndexDropdownComponent,
    TableDropdownComponent,
    PagesDropdownComponent,
    CardStatsComponent,
    ButtonDefaultComponent,
    ButtonFilledComponent,
    CardDefaultComponent,
    CardPricingComponent,
    CardBackgroundComponent,
    InputDefaultComponent,
    CardComponent,
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
        CardStatsComponent,
        ButtonDefaultComponent,
        ButtonFilledComponent,
        CardDefaultComponent,
        CardPricingComponent,
        CardBackgroundComponent,
        InputDefaultComponent,
        CardComponent,
    ]
})
export class ComponentsModule { }
