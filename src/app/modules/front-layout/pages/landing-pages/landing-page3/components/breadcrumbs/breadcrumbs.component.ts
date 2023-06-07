import { Component } from '@angular/core';
import {BreadcrumbService} from "./breadcrumService";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  breadcrumbs: { label: string, url: string }[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = breadcrumbService.breadcrumbs;
  }
}
