import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicStyleService {
  private renderer: Renderer2;
  private addedStyles: Map<string, HTMLStyleElement> = new Map<string, HTMLStyleElement>();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  applyStyles(styles: string, className: string): void {
    let styleElement = this.addedStyles.get(className);

    if (!styleElement) {
      styleElement = this.renderer.createElement('style');
      this.renderer.appendChild(styleElement, this.renderer.createText(styles));
      this.renderer.appendChild(document.head, styleElement);
    } else {
      styleElement.innerHTML = styles;
    }
  }
}
