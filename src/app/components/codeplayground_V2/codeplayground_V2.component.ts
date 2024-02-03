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
  selector: 'app-codeplayground_V2',
  templateUrl: './codeplayground_V2.component.html',
  styleUrls: ['./codeplayground_V2.component.css']
})
export class Codeplayground_V2Component implements OnInit {
  @Input() id:number=0;
  @Input() htmlCodes:string='';
  @Input() cssCodes:string='';
  @Input() jsCodes:string='';
  @Input() height:string='h-[300px]';
  @Input() bg_color_1:string='bg-[#151528]';
  @Input() bg_color_2:string='bg-[#2A2A50]';
  @Input() text_color_1:string='text-[#d8d6ff]';
  @Input() text_color_2:string='text-[#7e73a2]';
  @Input() rounded:string='rounded-lg';

  safeCode: SafeHtml;
  //codereview
  loading=false;
  windowsCode='html';
  generatedHTML:any;

  @ViewChild('contentPanel') contentPanel!: ElementRef;
  @ViewChild('leftPanel') leftPanel!: ElementRef;
  isHorizontalMouseDown: boolean = false;
  startHorizontalX: number = 0;
  @ViewChild('splitBarHorizontal1') splitBarHorizontal1!: ElementRef<HTMLElement>;
  @ViewChild('centerPanel') centerPanel!: ElementRef<HTMLElement>;

  private startLeftPanelWidth = 0;
  private startCenterPanelWidth = 0;

  constructor(private renderer: Renderer2,
              private sanitizer: DomSanitizer) {
    this.safeCode = '';

  }
  ngOnInit() {
    this.generateHTML();
    this.refreshHtml()
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if(this.splitBarHorizontal1){
      if (event.target === this.splitBarHorizontal1.nativeElement) {
        this.isHorizontalMouseDown = true;
        this.startHorizontalX = event.clientX;
        this.startLeftPanelWidth = this.leftPanel.nativeElement.offsetWidth;
        this.startCenterPanelWidth = this.contentPanel.nativeElement.offsetWidth - this.startLeftPanelWidth;
        this.centerPanel.nativeElement.style.pointerEvents = 'none';
      }
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
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this.isHorizontalMouseDown) {
      this.isHorizontalMouseDown = false;
      this.centerPanel.nativeElement.style.pointerEvents = 'auto'; // Vuelve a habilitar los eventos del rightPanel después de soltar el botón del mouse
    }

  }

  @ViewChild('myIframe') myIframe!: ElementRef;
  generateHTML() {
    console.log('generateHTML')
    console.log(this.htmlCodes)
    this.generatedHTML = `
    <html>
      <head>
      <style>
/*html{*/
/*display: flex;*/
/*  justify-content: center; !* Centrar horizontalmente *!*/
/*  align-items: center; !* Centrar verticalmente *!*/
/*  width: 100%;*/
/*  height: 100%!important;*/
/*}*/
/*body{*/
/*    display: flex;*/
/*  justify-content: center; !* Centrar horizontalmente *!*/
/*  align-items: center; !* Centrar verticalmente *!*/
/*  width: 100%;*/
/*  height: 100%!important;*/
/*}*/
      </style>
        <!--add css cdn-->
      </head>
      <body>
        <main>
         <style type='text/css'>${this.cssCodes}</style>
         ${this.htmlCodes}
         <script >${this.jsCodes}</script>
        </main>
        <!--add js cdn-->
      </body>

    </html>
  `;
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(this.generatedHTML);
  }
  refreshHtml() {
    var iframe=$('#iframe-'+this.id);
    iframe.contents().find("body").find("main").remove();
    iframe.contents().find("body").append($("<main >"+"<style >"+this.cssCodes+"</style>"+this.htmlCodes+""+"<script>"+this.jsCodes+"</script>"+"</main>"));

  }
}
