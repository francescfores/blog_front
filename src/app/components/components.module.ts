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
import { CodeplaygroundComponent } from './codeplayground/codeplayground.component';
import { HtmlEditorComponent } from './codeplayground/html-editor/html-editor.component';
import { CssEditorComponent } from './codeplayground/css-editor/css-editor.component';
import { JsEditorComponent } from './codeplayground/js-editor/js-editor.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Button3dComponent } from './buttons/button3d/button3d.component';
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import { InputOutsiteComponent } from './inputs/input-outsite/input-outsite.component';
import { SelectOutsideComponent } from './selects/select-outside/select-outside.component';
import { GridFlexComponent } from './grid-flex/grid-flex.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import {CodeEditorModule} from "@ngstack/code-editor";
import {DynamicComponentLoaderComponent} from "./code-editor/dynamic-component-loader.component";
import {Codeplayground_V2Component} from "./codeplayground_V2/codeplayground_V2.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AutocompleteFilterComponent} from "./inputs/autocomplete-filter/autocomplete-filter.component";

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
    CodeplaygroundComponent,
    HtmlEditorComponent,
    CssEditorComponent,
    JsEditorComponent,
    Button3dComponent,
    BreadcrumbsComponent,
    InputOutsiteComponent,
    SelectOutsideComponent,
    GridFlexComponent,
    CodeEditorComponent,
    DynamicComponentLoaderComponent,
    Codeplayground_V2Component,
    AutocompleteFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CodemirrorModule,
    FormsModule,
    ReactiveFormsModule,
    CodeEditorModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
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
    CodeplaygroundComponent,
    Button3dComponent,
    BreadcrumbsComponent,
    InputOutsiteComponent,
    SelectOutsideComponent,
    GridFlexComponent,
    CodeEditorComponent,
    Codeplayground_V2Component,
    AutocompleteFilterComponent,
  ],
  providers: [DynamicComponentLoaderComponent],
})
export class ComponentsModule { }
