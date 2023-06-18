import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CodeModel } from '@ngstack/code-editor';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';

@Component({
  selector: 'app-code-editor',
  template: `

    <div #previewContainer></div>

    <ngs-code-editor
      [codeModel]="codeModel"
      [options]="options"
      (valueChanged)="onCodeChange()"
    >
    </ngs-code-editor>
  `,
})
export class CodeEditorComponent {
  @ViewChild('previewContainer', { read: ViewContainerRef }) previewContainer!: ViewContainerRef;
  code = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-my-button',
      template: '<button>{{ label }}</button>'
    })
    export class MyButtonComponent {
      label = 'Dynamic Button';
    }
  `;
  theme = 'vs-dark';
  codeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: this.code,
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
  };
  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  constructor(
    private sanitizer: DomSanitizer,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private dynamicComponentLoader: DynamicComponentLoaderComponent
  ) {}

  onCodeChange() {
    this.renderComponent();
  }

  renderComponent() {
    this.previewContainer.clear();

    try {
      const compiledCode = this.code;
      const dynamicComponent = this.compileCode(compiledCode);

      this.dynamicComponentLoader.loadComponent(dynamicComponent);
    } catch (error) {
      console.error('Error al renderizar el código:', error);
    }
  }

  private compileCode(code: string): any {
    // Implementa la lógica de compilación del código aquí.
    // Puedes utilizar técnicas como eval() o bibliotecas como ts-migrate para compilar el código TypeScript en tiempo de ejecución.
    // Asegúrate de validar y asegurar adecuadamente el código compilado antes de ejecutarlo.
    // Retorna el componente dinámico compilado.
    // En este ejemplo, simplemente se retorna el componente MyButtonComponent ya que está incluido en el código.
    return 'MyButtonComponent';
  }

  renderComponent2() {
    // Limpiar contenedor previo
    this.previewContainer.clear();

    // Compilar componente dinámicamente
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyButtonComponent);
    const componentRef = this.previewContainer.createComponent(componentFactory, 0, this.injector);

    // Pasar datos al componente
    const buttonComponent = componentRef.instance;
    buttonComponent.label = 'Botón dinámico';
  }
}

@Component({
  selector: 'app-my-button',
  template: '<button>{{ label }}</button>'
})
export class MyButtonComponent {
  label = '';
}
