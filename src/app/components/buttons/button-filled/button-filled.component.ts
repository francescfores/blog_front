import {Component, OnInit, Input, ElementRef, Renderer2, HostListener, ViewChild} from "@angular/core";
const sizes:
  {
    [key: string]: { text: string; padding: string }
  } =
  {
    sm: { text: 'text-[11px]', padding: 'px-3 py-1.5' },
    md: { text: 'text-md', padding: 'px-3 py-2' },
    lg: { text: 'text-xs', padding: 'px-5 py-3' },
    xl: { text: 'text-xs', padding: 'px-8 py-3' }
  };

const roundeds:
  {
    [key: string]:any
  } =
  {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

const rings:
  {
    [key: string]:any
  } =
  {
    none: 'active:[box-shadow:none]',
    sm: 'ring-offset-bgPrim active:ring-offset-1 active:ring-1 active:ring-primary',
    md: 'ring-offset-bgPrim active:ring-offset-1 active:ring-2 active:ring-primary',
    lg: 'ring-offset-bgPrim active:ring-offset-2 active:ring-2 active:ring-primary',
  };
@Component({
  selector: "app-button-filled",
  templateUrl: "./button-filled.component.html",
})


export class ButtonFilledComponent implements OnInit {

  @Input() variant = "filled";
  @Input() style = "";
  @Input() customStyle = "";
  @Input() defaultStyle = true;
  @Input() disabled = false;
  @Input() ripple = true;
  @Input() rounded = "md";
  @Input() text = "text-xs";
  @Input() text_color = "";
  @Input() font = "font-semibold";
  @Input() color = "";
  @Input() opacity = "";
  @Input() size = "md";
  @Input() padding = "";
  @Input() outline = "";
  @Input() ring = "none";
  @Input() hover ="";
  // @Input() hover = "focus:opacity-90";
  // @Input() focus = "focus:opacity-75";
  @Input() focus = "";
  @Input() active = "active:opacity-75";
  @Input() transition = "duration-150 transition-all ease-in-out";
  //para cambiar un estilo o omitirlo solo se tiene que comentar el atributo o sobreescribirlo
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  variants=[
    'filled',
    'text',
    'outlined',
    '3d',
  ]
  colors=[
    'primary',
    'white',
    'secondary',
    'ternary',
    'success',
    'info',
    'warning',
    'help',
    'danger'
  ]

  ngOnInit(): void {
    if(this.defaultStyle){
      this.assignVariantStyles();
      this.assignSizeStyles();
      this.assignRoundedStyle();
      this.assignRingStyle();
    }

  }

  private assignVariantStyles() {
    if (this.variant === 'filled' || this.variant === '3d') {
      this.style = this.style + ' ' + (this.colors.includes(this.color) ? 'hover:bg-' + this.color + '/80' : (this.hover === '' ? 'hover:bg-primary/80' : this.hover));
      this.style = this.style + ' ' + (this.colors.includes(this.color) ? 'bg-' + this.color : (this.color === '' ? 'bg-primary' : this.color));
      this.style = this.style + ' ' + (this.text_color === '' ? 'text-white' : this.text_color);

      // this.hover = this.colors.includes(this.color) ? 'hover:bg-' + this.color + '/80' : this.hover === '' ? 'hover:bg-primary/80' : this.hover;
      // this.color = this.colors.includes(this.color) ? 'bg-' + this.color : this.color === '' ? 'bg-primary' : this.color;
      // this.text_color = this.text_color === '' ? 'text-white' : this.text_color;
    }
    if (this.variant === 'outlined') {
      this.style = this.style + ' ' + (this.outline === '' ? 'outline outline-1' : this.outline);      // this.outline = this.outline === '' ? 'outline outline-1 ': this.outline;
      // this.outline = this.outline === '' ? 'outline outline-1 outline-' + this.text_color : this.outline;
    }
    if (this.variant === 'text' || this.variant === 'outlined') {
      this.style = this.style + ' ' + (this.colors.includes(this.color) ? 'hover:bg-' + this.color + '/20' : (this.hover === '' ? 'hover:bg-primary/20' : this.hover));
      this.style = this.style + ' ' + (this.colors.includes(this.color) ? 'text-' +  this.color : (this.text_color === '' ? 'text-primary' : this.text_color));
      this.style = this.style + ' ' + (this.color === '' ? 'bg-transparent' : this.color);
    }
    if (this.variant === '3d') {
      this.style = this.style + ' ' + 'active:translate-y-2 [box-shadow:0_1.2px_0_0_#9CFFB3BB,0_6px_0_0_#2C8A42C9,0_9px_0_0_#C0C0C047]';
    }
  }

  private assignSizeStyles() {
    if (sizes[this.size]) {
      const { text, padding } = sizes[this.size];
      this.text = text;
      this.padding = padding;
    }
  }

  private assignRoundedStyle() {
    if (roundeds[this.rounded]) {
      this.rounded = roundeds[this.rounded];
    }
  }

  private assignRingStyle() {
    if (rings[this.ring]) {
      this.ring = rings[this.ring];
    }
  }

  handleButtonClick(event: MouseEvent) {
    if (this.ripple) {
      this.removeRippleEffect();
      const btn = this.elementRef.nativeElement.querySelector('.ripple-button');
      const circle = this.renderer.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;

      const rect = btn.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      this.renderer.setStyle(circle, 'width', `${diameter}px`);
      this.renderer.setStyle(circle, 'height', `${diameter}px`);
      this.renderer.setStyle(circle, 'left', `${offsetX - radius}px`);
      this.renderer.setStyle(circle, 'top', `${offsetY - radius}px`);
      this.renderer.addClass(circle, 'ripple');

      this.renderer.appendChild(btn, circle);
    }
  }

  private removeRippleEffect() {
    const btn = this.elementRef.nativeElement.querySelector('.ripple-button');
    const ripple = btn.querySelector('.ripple');
    console.log('scroll');
    if (ripple) {
      this.renderer.removeChild(btn, ripple);
    }
  }



}
