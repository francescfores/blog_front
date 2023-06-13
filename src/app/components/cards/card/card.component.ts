import {AfterViewInit, Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit{
  @ContentChild('headerImgTemplate') headerImgTemplate!: TemplateRef<any>;
  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ContentChild('footerTemplate') footerTemplate!: TemplateRef<any>;
  @Input() type: string='vertical';
  @Input() styles: string='';
  @Input() bg_color: string='';
  @Input() bg_gradient: boolean=false;
  @Input() bg_gradient_to: string='';
  @Input() bg_gradient_from: string='';
  @Input() width: string='';
  @ViewChild('card') card!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    const btn = this.card.nativeElement;
    const style = this.card.nativeElement.style;
    style.setProperty('--bg_color', this.bg_color !== '' ? this.bg_color : '');
    style.setProperty('--bg_gradient_to', this.bg_gradient_to !== '' ? this.bg_gradient_to : '');
    style.setProperty('--bg_gradient_from', this.bg_gradient_from !== '' ? this.bg_gradient_from : '');
    style.setProperty('--width', this.width !== '' ? this.width : '');
  }
}
