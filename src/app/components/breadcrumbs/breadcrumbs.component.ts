import {AfterViewInit, Component} from '@angular/core';
import {BreadcrumbService} from "./breadcrumService";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements AfterViewInit{
  breadcrumbs!: { label: string, url: string }[];

  constructor(private breadcrumbService: BreadcrumbService) {
    console.log('eeeeeee');

  }

  ngAfterViewInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }
}
