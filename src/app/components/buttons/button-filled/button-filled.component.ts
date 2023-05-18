import {Component, OnInit, Input, ElementRef, Renderer2, HostListener} from "@angular/core";

@Component({
  selector: "app-button-filled",
  templateUrl: "./button-filled.component.html",
})
export class ButtonFilledComponent implements OnInit {
  @Input() variant = "";
  @Input() style = "";
  @Input() disabled = false;
  @Input() ripple = true;
  @Input() title = "Button";
  @Input() rounded = "rounded-md";
  @Input() text = "text-xs";
  @Input() text_color = "";
  @Input() font = "font-semibold";
  @Input() color = "";
  @Input() opacity = "opacity-100";
  @Input() size = "";
  @Input() padding = "px-3 py-2";
  @Input() margin = "";
  @Input() outline = "";
  @Input() ring = "";
  @Input() hover = "hover:opacity-90";
  @Input() focus = "";
  @Input() active = "active:opacity-75";
  @Input() transition = "duration-150 transition-all ease-in-out";
  @Input() icon = "";
  @Input() imageStyle = "";
  @Input() imageUrl = "";
  @Input() imagePosition = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  variants=['filled',
    'text',
    'outlined',
    '3d',
  ]
  colors=['primary',
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
   if(!this.variants.some(x => x === this.variant)){
      // this.color=this.color!=''?this.color:'bg-primary'
      // this.padding=this.padding!=''?this.padding:'px-3 py-2'
      // this.text_color=this.text_color!=''?this.text_color:'text-white'

    // this.color = this.color===''
    //   ? 'bg-primary'
    //   : this.colors.some(x => x === this.color)
    //     ? 'bg-' + this.color
    //     :  this.color;
    // this.text_color = this.text_color===''
    //   ? 'text-white'
    //   : this.colors.some(x => x === this.text_color)
    //     ? 'text-' + this.text_color
    //     :  this.text_color;
    }
    //default


    //check color
    //color
    //variants
    if(this.variant==='filled'){
      this.color = this.color==='' ? 'bg-primary': this.colors.some(x => x === this.color) ? 'bg-' + this.color:this.color;
      this.text_color = this.text_color==='' ? 'text-white' : this.colors.some(x => x === this.text_color) ? 'text-' + this.text_color :  this.text_color;
      // this.color=this.color!=''?this.color:'bg-primary'
      // this.text_color=this.text_color!=''?this.text_color:'text-white'
      // this.color=this.colors.some(x => x === this.color)?"bg-"+this.color: this.color;
      // this.text_color=this.colors.some(x => x === this.text_color)?"text-"+this.text_color: this.text_color;
    }
    if(this.variant==='text'){
      this.color = this.color==='' ? 'bg-transparent': this.colors.some(x => x === this.color) ? 'bg-' + this.color:this.color;
      this.text_color = this.text_color==='' ? 'text-white' : this.colors.some(x => x === this.text_color) ? 'text-' + this.text_color :  this.text_color;
      // this.color=this.color!=''?this.color:'bg-transparent'
      // this.color=this.colors.some(x => x === this.color)?"bg-"+this.color: this.color;
      // this.text_color=this.colors.some(x => x === this.color)?"text-"+this.color: this.color;

      // this.color = "bg-transparent";
    }
    if(this.variant==='outlined'){
      this.color = this.color==='' ? 'bg-transparent': this.colors.some(x => x === this.color) ? 'bg-' + this.color:this.color;
      this.text_color = this.text_color==='' ? 'text-white' : this.colors.some(x => x === this.text_color) ? 'text-' + this.text_color :  this.text_color;
      // this.text_color = "text-primary";
      // this.color = "bg-transparent";
      this.outline = "outline outline-1 outline-primary";
      // this.checkColor()
    }
    if(this.variant==='3d'){
      this.text_color = "text-white";
      this.color = "bg-primary";
      this.style="inline-flex items-center [box-shadow:0_1.2px_0_0_#9CFFB3BB,0_6px_0_0_#2C8A42C9,0_9px_0_0_#C0C0C047] "
      this.active="active:[box-shadow:none] active:translate-y-2 "
    }
    if(this.disabled){
      this.hover='';
    }
    //size
    if(this.size==='sm'){
      this.text="text-[11px]";
      this.padding="px-3 py-1.5";
    }
    if(this.size==='md'){
      this.text="text-xs";
      this.padding="px-3 py-2";
    }
    if(this.size==='lg'){
      this.text="text-xs";
      this.padding="px-5 py-3";
    }
    if(this.size==='xl'){
      this.text="text-xs";
      this.padding="px-8 py-3";
    }
    //colors


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
