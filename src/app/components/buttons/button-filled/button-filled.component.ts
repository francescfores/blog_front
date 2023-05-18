import {Component, OnInit, Input, ElementRef, Renderer2, HostListener} from "@angular/core";

const sizes:
  {
    [key: string]: { text: string; padding: string }
  } =
  {
    sm: { text: 'text-[11px]', padding: 'px-3 py-1.5' },
    md: { text: 'text-xs', padding: 'px-3 py-2' },
    lg: { text: 'text-xs', padding: 'px-5 py-3' },
    xl: { text: 'text-xs', padding: 'px-8 py-3' }
  };
const roundeds:
  {
    [key: string]:any
  } =
  {
    sm: '',
    md: '',
    lg: '',
    full: ''
  };
@Component({
  selector: "app-button-filled",
  templateUrl: "./button-filled.component.html",
})

export class ButtonFilledComponent implements OnInit {
  @Input() variant = "filled";
  @Input() style = "";
  @Input() disabled = false;
  @Input() ripple = true;
  // @Input() title = "Button";
  @Input() rounded = "rounded-md";
  @Input() text = "text-xs";
  @Input() text_color = "";
  @Input() font = "font-semibold";
  @Input() bg_color = "";
  @Input() opacity = "";
  @Input() size = "md";
  @Input() padding = "px-3 py-2";
  @Input() margin = "";
  @Input() outline = "";
  @Input() ring = "";
  @Input() hover = "";
  @Input() focus = "hover:bg-primary/90";
  @Input() active = "active:opacity-75";
  @Input() transition = "duration-150 transition-all ease-in-out";
  // @Input() icon = "";
  // @Input() imageStyle = "";
  // @Input() imageUrl = "";
  // @Input() imagePosition = "";

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
    // if(!this.variants.some(x => x === this.variant)){
    //   // this.hover=this.hover==='' ? 'hover:bg-primary/80' :   this.hover;
    // }

    //variant color
    if(this.variant==='filled' || this.variant==='3d' ){
      this.hover = this.colors.some(x => x === this.bg_color) ? 'hover:bg-'+this.bg_color+'/80' : this.hover==='' ? 'hover:bg-primary/80' :   this.hover;
      this.bg_color = this.colors.some(x => x === this.bg_color) ? 'bg-' + this.bg_color: this.bg_color==='' ? 'bg-primary': this.bg_color;
      this.text_color = this.text_color==='' ? 'text-white' :   this.text_color;
    }
    if(this.variant==='text'){
      this.hover = this.colors.some(x => x === this.bg_color) ? 'hover:bg-'+this.bg_color+'/20' : this.hover==='' ? 'hover:bg-primary/20' :   this.hover;
      this.text_color = this.colors.some(x => x === this.bg_color) ? 'text-' + this.bg_color : this.text_color==='' ? 'text-primary ' :   this.text_color;
      this.bg_color = this.bg_color==='' ? 'bg-transparent ': this.bg_color;
    }
    if(this.variant==='outlined'){
      this.hover = this.colors.some(x => x === this.bg_color) ? 'hover:bg-'+this.bg_color+'/20' : this.hover==='' ? 'hover:bg-primary/20' :   this.hover;
      this.outline = this.outline==='' ? 'outline outline-1 outline-'+this.text_color : this.outline;
      this.text_color = this.colors.some(x => x === this.bg_color) ? 'text-' + this.bg_color : this.text_color==='' ? 'text-primary ' :   this.text_color;
      this.bg_color = this.bg_color==='' ? 'bg-transparent ': this.bg_color;
    }
    //variants
    if(this.variant==='3d'){
      this.style="inline-flex items-center [box-shadow:0_1.2px_0_0_#9CFFB3BB,0_6px_0_0_#2C8A42C9,0_9px_0_0_#C0C0C047] "
      this.active="active:[box-shadow:none] active:translate-y-2 "
      // this.active="active:translate-y-2 " //flaoting button     // remove active:[box-shadow:none]
    }
    //state
    if(this.disabled){
      this.hover='';
    }
    //size
    if (sizes[this.size]) {
      const { text, padding } = sizes[this.size];
      this.text = text;
      this.padding = padding;
    }
    if (roundeds[this.rounded]) {
      this.rounded = roundeds[this.rounded];
    }
  }


  reverseColor(){

  }
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(event: Event) {
  //   if(this.ripple) {
  //     this.removeRippleEffect();
  //   }
  // }

  handleButtonClick(event: MouseEvent) {
    if(this.ripple) {
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
    console.log('scroll')
    if (ripple) {
      this.renderer.removeChild(btn, ripple);
    }
  }
}
