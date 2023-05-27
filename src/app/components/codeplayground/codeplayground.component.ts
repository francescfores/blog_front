import {Component, ElementRef, HostListener, Input, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-codeplayground',
  templateUrl: './codeplayground.component.html',
  styleUrls: ['./codeplayground.component.css']
})
export class CodeplaygroundComponent {
  @Input() id:number=0;
  @Input() htmlCodes:string='';
  @Input() cssCodes:string='';
  @Input() jsCodes:string='';
  constructor(private renderer: Renderer2) {}
  ngOnInit() {

    this.generateHTML();
  }

  //codereview
  loading=false;
  windowsCode: { [key: string]: boolean } = { html: true, css: false, js: false };

  generatedHTML:string='';

  @ViewChild('contentPanel') contentPanel!: ElementRef;
  @ViewChild('upPanel') upPanel!: ElementRef;
  @ViewChild('splitBarVertical') splitBarVertical!: ElementRef;
  @ViewChild('downPanel') downPanel!: ElementRef;

  @ViewChild('splitBarHorizontal') splitBarHorizontal!: ElementRef;
  @ViewChild('leftPanel') leftPanel!: ElementRef;
  @ViewChild('rightPanel') rightPanel!: ElementRef;
  @ViewChildren('leftPanel') leftPanels!: QueryList<ElementRef>;
  @ViewChildren('rightPanel') rightPanels!: QueryList<ElementRef>;
  isVerticalMouseDown: boolean = false;
  startVerticalY: number = 0;
  startVerticalHeight: number = 0;
  isHorizontalMouseDown: boolean = false;
  isHorizontalMouseDown2: boolean = false;
  startHorizontalX: number = 0;
  startHorizontalWidth: number = 0;
  maxContainerHeight: number=0; // Establece aquí la altura máxima deseada


  // /*
  // Inicializa las variables y almacena las posiciones y dimensiones iniciales necesarias para ajustar
  // la altura o el ancho de los elementos al mover las barras vertical y horizontal respectivamente.
  //  */
  // @HostListener('document:mousedown', ['$event'])
  // onMouseDown(event: MouseEvent): void {
  //   this.maxContainerHeight=this.contentPanel.nativeElement.offsetHeight;
  //   if (event.target === this.splitBarVertical.nativeElement) {
  //     this.isVerticalMouseDown = true;
  //     this.startVerticalY = event.clientY;
  //     this.startVerticalHeight = this.upPanel.nativeElement.offsetHeight;
  //     // this.rightPanel.nativeElement.style.pointerEvents = 'none';
  //   } else if (event.target === this.splitBarHorizontal.nativeElement) {
  //     this.isHorizontalMouseDown = true;
  //     this.startHorizontalX = event.clientX;
  //     this.startHorizontalWidth = this.leftPanel.nativeElement.offsetWidth;
  //     this.rightPanel.nativeElement.style.pointerEvents = 'none';
  //   }
  // }
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent): void {
  //   if (this.isVerticalMouseDown) {
  //     const newHeight = this.startVerticalHeight + (event.clientY - this.startVerticalY);
  //     console.log(newHeight);
  //     if (newHeight <= this.maxContainerHeight) {
  //       const newUpHeight = newHeight + 'px';
  //       const newDownHeight = this.maxContainerHeight - newHeight + 'px';
  //       this.upPanel.nativeElement.style.height = newUpHeight;
  //       this.downPanel.nativeElement.style.height = newDownHeight;
  //     }
  // }else if (this.isHorizontalMouseDown) {
  //     // const newWidth = this.startHorizontalWidth + (event.clientX - this.startHorizontalX);
  //     // this.leftPanel.nativeElement.style.width = newWidth + 'px';
  //     // this.rightPanel.nativeElement.style.width = newWidth + 'px';
  //     const newWidth = this.startHorizontalWidth + (event.clientX - this.startHorizontalX);
  //     this.leftPanels.forEach(panel => {
  //       panel.nativeElement.style.width = newWidth + 'px';
  //     });
  //     this.rightPanels.forEach(panel => {
  //       panel.nativeElement.style.width = newWidth + 'px';
  //     });
  //   }
  // }
  // // @HostListener('document:mouseup')
  // // onMouseUp(): void {
  // //   this.isVerticalMouseDown = false;
  // //   this.isHorizontalMouseDown = false;
  // // }
  // @HostListener('document:mouseup')
  // onMouseUp(): void {
  //   if (this.isVerticalMouseDown || this.isHorizontalMouseDown) {
  //     this.isVerticalMouseDown = false;
  //     this.isHorizontalMouseDown = false;
  //     this.rightPanel.nativeElement.style.pointerEvents = 'auto'; // Vuelve a habilitar los eventos del rightPanel después de soltar el botón del mouse
  //   }
  // }
  //

  /*layout 2*/
  @ViewChild('splitBarHorizontal1') splitBarHorizontal1!: ElementRef<HTMLElement>;
  @ViewChild('splitBarHorizontal2') splitBarHorizontal2!: ElementRef<HTMLElement>;
  @ViewChild('centerPanel') centerPanel!: ElementRef<HTMLElement>;

  private startLeftPanelWidth = 0;
  private startCenterPanelWidth = 0;
  private startRightPanelWidth = 0;

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (event.target === this.splitBarHorizontal1.nativeElement) {
      this.isHorizontalMouseDown = true;
      this.startHorizontalX = event.clientX;
      this.startLeftPanelWidth = this.leftPanel.nativeElement.offsetWidth;
      this.startCenterPanelWidth = this.centerPanel.nativeElement.offsetWidth;
    }
    if (event.target === this.splitBarHorizontal2.nativeElement) {
      this.isHorizontalMouseDown2 = true;
      this.startHorizontalX = event.clientX;
      this.startCenterPanelWidth = this.centerPanel.nativeElement.offsetWidth;
      this.startRightPanelWidth = this.rightPanel.nativeElement.offsetWidth;
    }
    this.maxContainerHeight=this.contentPanel.nativeElement.offsetHeight;
      if (event.target === this.splitBarVertical.nativeElement) {
        this.isVerticalMouseDown = true;
        this.startVerticalY = event.clientY;
        this.startVerticalHeight = this.upPanel.nativeElement.offsetHeight;
        this.downPanel.nativeElement.style.pointerEvents = 'none';
      }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isHorizontalMouseDown) {
      const offsetX = event.clientX - this.startHorizontalX;
      let newLeftPanelWidth = this.startLeftPanelWidth + offsetX;
      let newCenterPanelWidth = this.startCenterPanelWidth - offsetX;
      // Limitar el ancho mínimo del panel left a 10 píxeles
      if (newLeftPanelWidth < 10) {
        newLeftPanelWidth = 10;
        newCenterPanelWidth = this.startLeftPanelWidth + this.startCenterPanelWidth - 10;
      }
      // Limitar el ancho mínimo del panel center a 10 píxeles
      if (newCenterPanelWidth < 10) {
        newCenterPanelWidth = 10;
        newLeftPanelWidth = this.startLeftPanelWidth + this.startCenterPanelWidth - 10;
      }

      this.leftPanel.nativeElement.style.width = newLeftPanelWidth + 'px';
      this.centerPanel.nativeElement.style.width = newCenterPanelWidth + 'px';
    }
    if (this.isHorizontalMouseDown2) {
      const offsetX = event.clientX - this.startHorizontalX;
      let newCenterPanelWidth = this.startCenterPanelWidth + offsetX;
      let newRightPanelWidth = this.startRightPanelWidth - offsetX;

      if (newCenterPanelWidth < 10) {
        newCenterPanelWidth = 10;
        newRightPanelWidth = this.startCenterPanelWidth + this.startRightPanelWidth - 10;
      }
      // Limitar el ancho mínimo del panel right a 10 píxeles
      if (newRightPanelWidth < 10) {
        newRightPanelWidth = 10;
        newCenterPanelWidth = this.startCenterPanelWidth + this.startRightPanelWidth - 10;
      }

      this.centerPanel.nativeElement.style.width = newCenterPanelWidth + 'px';
      this.rightPanel.nativeElement.style.width = newRightPanelWidth + 'px';
    }
    if (this.isVerticalMouseDown) {
      const newHeight = this.startVerticalHeight + (event.clientY - this.startVerticalY);
      console.log(newHeight);
      if (newHeight <= this.maxContainerHeight) {
        const newUpHeight = newHeight + 'px';
        const newDownHeight = this.maxContainerHeight - newHeight + 'px';
        this.upPanel.nativeElement.style.height = newUpHeight;
        this.downPanel.nativeElement.style.height = newDownHeight;
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this.isHorizontalMouseDown) {
      this.isHorizontalMouseDown = false;
    }
    if (this.isHorizontalMouseDown2) {
      this.isHorizontalMouseDown2 = false;
    }

    if (this.isVerticalMouseDown ) {
      this.isVerticalMouseDown = false;
      this.downPanel.nativeElement.style.pointerEvents = 'auto'; // Vuelve a habilitar los eventos del rightPanel después de soltar el botón del mouse
    }
  }

  addStyle(){
    this.loading=true;
    console.log('loooooooooooades')
    $('#iframe-'+this.id).contents().find("head").find("style").remove();
    $('#iframe-'+this.id).contents().find("body").find("script").remove();
    $('#iframe-' + this.id).contents().find("head").append($("<style type='text/css'>"
      +`
html{
display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  width: 100%;
  height: 100%!important;
}
body{
    display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  width: 100%;
  height: 100%!important;
}
`+ "</style>"));
    $('#iframe-' + this.id).contents().find("head").append($("<style type='text/css'>"+this.cssCodes+"</style>"));
    $('#iframe-' + this.id).contents().find("body").append($("<script type='javascript'>"
      +`
var $ = jQuery = window.parent.$;
// var $ = selector => document.querySelector(selector);
`+ "</script>"));
    $('#iframe-' + this.id).contents().find("body").append($(this.jsCodes));
  }
  generateHTML() {
    console.log('generateHTML')
    console.log(this.htmlCodes)

    this.generatedHTML = '';
    this.generatedHTML = `
    <html>
      <head>
      </head>
      <body>
          ${this.htmlCodes}
      </body>
    </html>
  `;
    this.addStyle()
  }


  changes(htmlCodes: string) {
    console.log('sdsddsd')
    console.log(htmlCodes)

    this.htmlCodes=htmlCodes;
  }
}
