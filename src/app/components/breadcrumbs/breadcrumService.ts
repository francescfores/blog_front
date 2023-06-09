import {AfterViewInit, Injectable, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService  {
  breadcrumbs: { label: string, url: string }[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.breadcrumbs = [];

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumbs(this.route.root);
      }
    });
  }

  generateBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string, url: string }[] = []): void {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const breadcrumbLabel: string = child.snapshot.data['breadcrumb'];
      if (breadcrumbLabel) {
        breadcrumbs.push({ label: breadcrumbLabel, url: url });
      }

      this.generateBreadcrumbs(child, url, breadcrumbs);
    }

    this.breadcrumbs = breadcrumbs;
  }
}
