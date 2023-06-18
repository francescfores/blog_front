import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
@Component({
  selector: 'app-codeplayground',
  templateUrl: './codeplayground.component.html',
  styleUrls: ['./codeplayground.component.css']
})
export class CodeplaygroundComponent implements OnInit {
  @Input() id:number=0;
  @Input() htmlCodes:string='';
  @Input() cssCodes:string='';
  @Input() jsCodes:string='';

  safeCode: SafeHtml;

  constructor(private renderer: Renderer2,
              private sanitizer: DomSanitizer) {
    this.safeCode = '';

  }
  ngOnInit() {

    this.generateHTML();
    this.renderCode()
  }

  //codereview
  loading=false;
  windowsCode: { [key: string]: boolean } = { html: true, css: false, js: false };

  generatedHTML:any;

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
    this.maxContainerHeight=this.contentPanel.nativeElement.offsetHeight-10;
      if (event.target === this.splitBarVertical.nativeElement) {
        this.isVerticalMouseDown = true;
        this.startVerticalY = event.clientY;
        console.log('this.upPanel.nativeElement.offsetHeight')
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
      console.log('this.startVerticalHeight');
      console.log(this.startVerticalHeight);
      console.log('event.clientY');
      console.log(event.clientY);
      console.log('newHeight');
      console.log(newHeight);
      console.log('maxContainerHeight');
      console.log(this.maxContainerHeight);

      if ( newHeight > 0 && newHeight <= this.maxContainerHeight) {
        const newUpHeight = (newHeight) + 'px';
        const newDownHeight = this.maxContainerHeight - (newHeight) + 'px';
        console.log('newUpHeight');
        console.log(newUpHeight);
        console.log('newDownHeight');
        console.log(newDownHeight);
        // if(newHeight + (this.maxContainerHeight - newHeight) < this.maxContainerHeight){
          this.upPanel.nativeElement.style.height = newUpHeight;
          this.leftPanel.nativeElement.style.height = newUpHeight;

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
    $('#iframe-' + this.id).contents().find("body").append($("<script type='javascript'>"
      +`
      import FlowbiteReact from 'https://cdn.jsdelivr.net/npm/flowbite-react@0.4.2/+esm';
`+ "</script>"));
    // $('#iframe-' + this.id).contents().find("body").append('  <script src="../../../../tailwind.config.js"></script>');
    // $('#iframe-' + this.id).contents().find("head").append('  <script src="https://cdn.tailwindcss.com"></script>');
    // $('#iframe-' + this.id).contents().find("head").append("<link rel='stylesheet' href='../../../../src/styles.css'>");
    // $('#iframe-' + this.id).contents().find("head").append("<link rel='stylesheet' href='../../../assets/styles/tailwind.css'>");
    $('#iframe-' + this.id).contents().find("body").append($("<script >"+this.jsCodes+"</script>"));


  }
  @ViewChild('myIframe') myIframe!: ElementRef;
  generateHTML() {
    console.log('generateHTML')
    console.log(this.htmlCodes)

    // this.generatedHTML = '';
    this.generatedHTML = `
    <html>
      <head>
        <style type='text/css'>${this.cssCodes}</style>
      </head>
      <body>
          ${this.htmlCodes}
          <script >${this.jsCodes}</script>
        <script src="https://cdn.tailwindcss.com"></script>
      </body>

    </html>
  `;
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(this.generatedHTML);

    // this.renderCode()
   //  this.safeCode = this.sanitizer.bypassSecurityTrustHtml(this.generatedHTML);

  }


  renderCode() {
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(this.generatedHTML);
    const iframeDoc = this.myIframe.nativeElement.contentDocument || this.myIframe.nativeElement.contentWindow.document;
    this.generatedHTML=this.safeCode;
    //
    // iframeDoc.open();
    // iframeDoc.write(this.safeCode);
    // iframeDoc.close();

  }
}
