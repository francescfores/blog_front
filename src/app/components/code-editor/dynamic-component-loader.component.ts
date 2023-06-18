import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-dynamic-component-loader',
  template: `<ng-template #container></ng-template>`,
})
@Injectable()
export class DynamicComponentLoaderComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(componentType: any): void {
    this.container.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.container.createComponent(componentFactory);
  }
}
