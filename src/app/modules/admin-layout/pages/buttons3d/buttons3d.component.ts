import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {DynamicStyleService} from "../../../../services/dinamicStyle.service";
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';


@Component({
  selector: 'app-buttons3d',
  templateUrl: './buttons3d.component.html',
  styleUrls: ['./buttons3d.component.css']
})
export class Buttons3dComponent implements OnInit{

  dynamicClass='btn';
  dynamicStyles='';
  width=0;
  height=100;
  rounded=100;
  font_size= 14;
  raise=10;
  shadow_bg_color='rgba(28,95,114,0.19)';
  back_bg_color='#006280';
  front_bg_color='#0782a9';
  front_border_color='#0493c0';
  front_border=0;
  font_color='#ffffff';
  button:any;
  private rotateX=45;
  private rotateY=5;
  private rotateZ=5;

  private rotate_X=-45;
  private rotate_Y=-5;
  private rotate_Z=-5;

  //codereview
  windowsCode: { [key: string]: boolean }[] = [
    { html: true, css: false, js: false },
    { html: true, css: false, js: false },
    { html: true, css: false, js: false }
  ];
  htmlCodes:string[]=[];
  cssCodes:string[]=[];
  jsCodes:string[]=[];
  generatedHTML:string[]=[];
  @ViewChildren('splitBar') splitBars!: QueryList<ElementRef>;
  @ViewChildren('leftPanel') leftPanels!: QueryList<ElementRef>;
  panels: any[] = [1, 2, 3]; // Ejemplo de datos para los paneles
  isMouseDown = false;
  startX = 0;
  startWidth = 0;
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.splitBars.forEach((splitBar, index) => {
      if (event.target === splitBar.nativeElement) {
        this.isMouseDown = true;
        this.startX = event.clientX;
        this.startWidth = this.leftPanels.toArray()[index].nativeElement.offsetWidth;
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMouseDown) return;

    this.splitBars.forEach((splitBar, index) => {
      const newWidth = this.startWidth + (event.clientX - this.startX);
      this.leftPanels.toArray()[index].nativeElement.style.width = newWidth + 'px';
    });
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isMouseDown = false;
  }

constructor(private dynamicStyleService: DynamicStyleService) {
    //codereview
    // this.refreshData();
    // this.generateHTML(0);
    // this.generateHTML(1);
    // this.generateHTML(2);
  }
  ngOnInit() {
    this.button = document.getElementsByClassName('myButton');
    this.width=this.button.offsetWidth;
    this.button.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.button.addEventListener('mouseout', this.handleMouseOut.bind(this));
    console.log('rrr')
    this.button.addEventListener('click',this.button.classList.add('clicked'));
    this.generateAndApplyStyles();
  }
  refreshData(){
    const aspectRatio = (this.height / this.width);
    let rotationDegrees = Math.atan(aspectRatio) * (8 / Math.PI) ;
    const maxRotationDegrees = this.raise/10; // Máximo ángulo de rotación deseado

    this.htmlCodes=[
      `<div class="`+this.dynamicClass+` ">
            <div class="back">
              <div class="front">
                <p></p>
              </div>
            </div>
          </div>`,
      `<div class="`+this.dynamicClass+`">
            <div class="back">
              <div class="front">
                <p></p>
              </div>
            </div>
          </div>`,
      `<div class="`+this.dynamicClass+`">
            <div class="back">
              <div class="front">
                <p>Button</p>
              </div>
            </div>
          </div>`,
    ];
    this.cssCodes=[
      `

    .${this.dynamicClass}_left_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default_shadow:before{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_left{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
      transform: translateY(0px);
    }


    /*shadow*/
    .${this.dynamicClass}_default_shadow:hover:before{
      transform: translateY(${-(this.raise/2.5)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_default_shadow:active:before{
      transform: translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_left_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_right_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    /*front*/
    .${this.dynamicClass}_left:active{
      transform:skewY(0) translateY(${this.raise}px);
    }
    .${this.dynamicClass}_right:active{
      transform:skewY(0) translateY(${this.raise}px);
    }

    .${this.dynamicClass}_default:hover{
      transform: translateY(${this.raise*0.5}px);
    }
    .${this.dynamicClass}_default:active{
      transform: translateY(${this.raise}px);
    }

    .${this.dynamicClass} {
      height: ${(this.height)+this.raise}px;
        width: 100%;
          position: relative;
    }
    .${this.dynamicClass}:before {
      content:" ";
      position:absolute;
      height: ${(this.height)}px;
      margin-top: ${(this.raise*1.6)}px;
      margin-left: 2px;
      margin-right: 2px;
      left: 0;
      right: 0;
      background: rgba(54, 96, 112, 0.38);
      border-radius: ${this.rounded}px;
      /*border: solid whitesmoke; !*transform:skewY(calc(1deg * 4 * 1))*!*/
      transition:transform 0.2s ease-out;
    }`,
      `

    .${this.dynamicClass}_left_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default_shadow:before{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_left{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
      transform: translateY(0px);
    }


    /*shadow*/
    .${this.dynamicClass}_default_shadow:hover:before{
      transform: translateY(${-(this.raise/2.5)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_default_shadow:active:before{
      transform: translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_left_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_right_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    /*front*/
    .${this.dynamicClass}_left:active{
      transform:skewY(0) translateY(${this.raise}px);
    }
    .${this.dynamicClass}_right:active{
      transform:skewY(0) translateY(${this.raise}px);
    }

    .${this.dynamicClass}_default:hover{
      transform: translateY(${this.raise*0.5}px);
    }
    .${this.dynamicClass}_default:active{
      transform: translateY(${this.raise}px);
    }

    .${this.dynamicClass} {
      height: ${(this.height)+this.raise}px;
        width: 100%;
          position: relative;
    }
    .${this.dynamicClass}:before {
      content:" ";
      position:absolute;
      height: ${(this.height)}px;
      margin-top: ${(this.raise*1.6)}px;
      margin-left: 2px;
      margin-right: 2px;
      left: 0;
      right: 0;
      background: rgba(54, 96, 112, 0.38);
      border-radius: ${this.rounded}px;
      /*border: solid whitesmoke; !*transform:skewY(calc(1deg * 4 * 1))*!*/
      transition:transform 0.2s ease-out;
    }

    .${this.dynamicClass} .back:before{
      height: ${(this.height)}px;
      margin-top: ${(this.raise)}px;
      left: 0;
      right: 0;
      margin-left: 0.25px;
      margin-right: 0.25px;
      content:" ";
      position: absolute;
      background: #004c65;
      /*border: solid whitesmoke;*/
        border-radius:${this.rounded}px;
        /*
        border-bottom-left-radius:${this.rounded}px;
      border-bottom-right-radius: ${this.rounded}px;

        border-top-left-radius:${this.rounded/(this.raise*0.1)}px;
        border-top-right-radius:${this.rounded/(this.raise*0.1)}px;
        */
      }
    .${this.dynamicClass} .front{
      position: absolute;
      height: ${(this.height)}px;
       left: 0;
      right: 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      border-radius: ${this.rounded}px;
      border: solid transparent 2px;
    }

* {
  box-sizing: border-box;
}

  `,
      `
    .${this.dynamicClass}_left_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default_shadow:before{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_left{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
      transform: translateY(0px);
    }


    /*shadow*/
    .${this.dynamicClass}_default_shadow:hover:before{
      transform: translateY(${-(this.raise/2.5)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_default_shadow:active:before{
      transform: translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_left_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_right_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    /*front*/
    .${this.dynamicClass}_left:active{
      transform:skewY(0) translateY(${this.raise}px);
    }
    .${this.dynamicClass}_right:active{
      transform:skewY(0) translateY(${this.raise}px);
    }

    .${this.dynamicClass}_default:hover{
      transform: translateY(${this.raise*0.5}px);
    }
    .${this.dynamicClass}_default:active{
      transform: translateY(${this.raise}px);
    }

    .${this.dynamicClass} {
      height: ${(this.height)+this.raise}px;
      width: 50%;
      /*position: relative;*/
    }
    .${this.dynamicClass}:before {
      content:" ";
      position:absolute;
      height: ${(this.height)}px;
      margin-top: ${(this.raise*1.6)}px;
      margin-left: 2px;
      margin-right: 2px;
      left: 0;
      right: 0;
      background: rgba(54, 96, 112, 0.38);
      border-radius: ${this.rounded}px;
      transition:transform 0.2s ease-out;
    }

    .${this.dynamicClass} .back:before{
      height: ${(this.height)}px;
      margin-top: ${(this.raise)}px;
      left: 0;
      right: 0;
      margin-left: 0.25px;
      margin-right: 0.25px;
      content:" ";
      position: absolute;
      background: #004c65;
        border-radius:${this.rounded}px;
      }
    .${this.dynamicClass} .front{
      position: absolute;
      height: ${(this.height)}px;
       left: 0;
      right: 0;
      background: #00FFC471; /*#transparent;*/
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      border-radius: ${this.rounded}px;
      border: solid #00FFC471 2px;
      /*glow*/
      /*text-shadow:
      0 0 0.125em hsl(0 0% 100% / 0.3),
      0 0 0.45em currentColor;
      border: #00FFC471 .125em solid;
      color:white;
      box-shadow:
      inset 0 0 0.5em 0 #00FFC471, 0 0 0.5em 0 #00FFC471;*/
    }
    /*
    .${this.dynamicClass} .front:before {
      pointer-events: none;
       position: absolute;
      height: ${(this.height)}px;
      top: 90%;
        left: 0;
      right: 0;

      content: '';
      position: absolute;
      background: #00FFC471;
      transform: perspective(0.5em) rotateX(40deg) scale(0.5, 0.25);
      filter: blur(1em);
      opacity: 0.7;
    }
    */
* {
  box-sizing: border-box;
}

  `,
    ];
    this.jsCodes=[
      `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
       <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
       <script>
        var btn = document.getElementById('.btn');
        console.log(btn);
        var $ = jQuery = window.parent.$;
        console.log("eeeeeeeeeee");
        var button = $('#iframe-'+0).contents().find('.btn');
        var aspectRatio = (button.height() / button.width());
        var rotationDegrees = Math.atan(aspectRatio) * (8 / Math.PI) ;
        var maxRotationDegrees = 5/10; // Máximo ángulo de rotación deseado
        console.log(button);
        console.log(button.height());
        console.log(button.width());
        console.log('aspectRatio');
        console.log(aspectRatio);
        console.log(Math.atan(aspectRatio));
        console.log((8 / Math.PI));
        console.log(maxRotationDegrees);
        button.on('mousemove', $.proxy(this.handleMouseMove, this));
        button.on('mouseout', $.proxy(this.handleMouseOut(), this));
             console.log(button);
             button.on( "mousemove", function( event ) {
               console.log('eeeeee');
                if (button) {
                            const $button = button;
                            const buttonWidth = $button.width();
                            const buttonHeight = $button.height();
                            const mouseX = event.clientX - $button.offset().left;
                            const mouseY = event.clientY - $button.offset().top;
                            console.log(buttonWidth);
                            console.log(buttonHeight);
                            console.log(mouseX);
                            console.log(mouseY);

                            var rotateX = 10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotateY = 10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotateZ = 10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));

                            var rotate_X = -10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotate_Y = -10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotate_Z = -10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));
                            console.log(rotateY);

                            if (rotate_Y > 2) {
                              console.log('dretddddda');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_right_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').addClass('btn' + '_left');
                            }
                            if (rotate_Y > -2 && rotate_Y < 2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_default_shadow');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_default');
                            }
                            if (rotate_Y < -2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.addClass('btn' + '_left_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_right');
                            }
                          }
            } );


        function handleMouseOut(event) {
          // Código para manejar el evento 'mouseout'
        }
        </script>`,
      `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
       <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
       <script>
        var $ = jQuery = window.parent.$;
        console.log("eeeeeeeeeee");
        var button = $('#iframe-'+1).contents().find('.btn');
        var aspectRatio = (button.height() / button.width());
        var rotationDegrees = Math.atan(aspectRatio) * (8 / Math.PI) ;
        var maxRotationDegrees = 5/10; // Máximo ángulo de rotación deseado
        console.log(button);
        console.log(button.height());
        console.log(button.width());
        console.log('aspectRatio');
        console.log(aspectRatio);
        console.log(Math.atan(aspectRatio));
        console.log((8 / Math.PI));
        console.log(maxRotationDegrees);
        button.on('mousemove', $.proxy(this.handleMouseMove, this));
        button.on('mouseout', $.proxy(this.handleMouseOut(), this));
             console.log(button);
             button.on( "mousemove", function( event ) {
               console.log('eeeeee');
                if (button) {
                            const $button = button;
                            const buttonWidth = $button.width();
                            const buttonHeight = $button.height();
                            const mouseX = event.clientX - $button.offset().left;
                            const mouseY = event.clientY - $button.offset().top;
                            console.log(buttonWidth);
                            console.log(buttonHeight);
                            console.log(mouseX);
                            console.log(mouseY);

                            var rotateX = 10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotateY = 10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotateZ = 10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));

                            var rotate_X = -10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotate_Y = -10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotate_Z = -10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));
                            console.log(rotateY);

                            if (rotate_Y > 2) {
                              console.log('dretddddda');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_right_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').addClass('btn' + '_left');
                            }
                            if (rotate_Y > -2 && rotate_Y < 2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_default_shadow');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_default');
                            }
                            if (rotate_Y < -2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.addClass('btn' + '_left_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_right');
                            }
                          }
            } );


        function handleMouseOut(event) {
          // Código para manejar el evento 'mouseout'
        }
        </script>`,
      `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
       <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
       <script>
        var $ = jQuery = window.parent.$;
        console.log("eeeeeeeeeee");
        var button = $('#iframe-'+2).contents().find('.btn');
        var aspectRatio = (button.height() / button.width());
        var rotationDegrees = Math.atan(aspectRatio) * (8 / Math.PI) ;
        var maxRotationDegrees = 5/10; // Máximo ángulo de rotación deseado
        console.log(button);
        console.log(button.height());
        console.log(button.width());
        console.log('aspectRatio');
        console.log(aspectRatio);
        console.log(Math.atan(aspectRatio));
        console.log((8 / Math.PI));
        console.log(maxRotationDegrees);
        button.on('mousemove', $.proxy(this.handleMouseMove, this));
        button.on('mouseout', $.proxy(this.handleMouseOut(), this));
             console.log(button);
             button.on( "mousemove", function( event ) {
               console.log('eeeeee');
                if (button) {
                            const $button = button;
                            const buttonWidth = $button.width();
                            const buttonHeight = $button.height();
                            const mouseX = event.clientX - $button.offset().left;
                            const mouseY = event.clientY - $button.offset().top;
                            console.log(buttonWidth);
                            console.log(buttonHeight);
                            console.log(mouseX);
                            console.log(mouseY);

                            var rotateX = 10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotateY = 10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotateZ = 10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));

                            var rotate_X = -10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
                            var rotate_Y = -10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
                            var rotate_Z = -10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));
                            console.log(rotateY);

                            if (rotate_Y > 2) {
                              console.log('dretddddda');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_right_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').addClass('btn' + '_left');
                            }
                            if (rotate_Y > -2 && rotate_Y < 2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_left_shadow');
                              $button.addClass('btn' + '_default_shadow');
                              $button.find('.front').removeClass('btn' + '_right');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_default');
                            }
                            if (rotate_Y < -2) {
                              $button.removeClass('btn' + '_right_shadow');
                              $button.removeClass('btn' + '_default_shadow');
                              $button.addClass('btn' + '_left_shadow');
                              $button.find('.front').removeClass('btn' + '_default');
                              $button.find('.front').removeClass('btn' + '_left');
                              $button.find('.front').addClass('btn' + '_right');
                            }
                          }
            } );


        function handleMouseOut(event) {
          // Código para manejar el evento 'mouseout'
        }
        </script>`,
    ];
  }
  //codemirror
  addStyle(n:number){
    this.loading=true;
    console.log('loooooooooooades')
    $('#iframe-'+n).contents().find("head").find("style").remove();
    $('#iframe-'+n).contents().find("body").find("script").remove();
    $('#iframe-' + n).contents().find("head").append($("<style type='text/css'>" +`
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
`+ this.cssCodes[n] + "</style>"));
    $('#iframe-' + n).contents().find("body").append($(this.jsCodes[n]));

  }
  ejecutarCodigo(n:number){
    this.loading=false;
    // this.refreshData();
    this.generateHTML(n);
  }
  generateHTML(n:number) {
    this.generatedHTML[n] = '';
    this.generatedHTML[n] = `
    <html>
      <head>
      </head>
      <body>
          ${this.htmlCodes[n]}
      </body>
    </html>
  `;
 this.addStyle(n)
  }

  handleMouseMove = (event: MouseEvent) => {
    if (this.button) {
      const buttonWidth = this.button.offsetWidth;
      const buttonHeight = this.button.offsetHeight;
      const mouseX = event.clientX - this.button.getBoundingClientRect().left;
      const mouseY = event.clientY - this.button.getBoundingClientRect().top;

      this.rotateX = 10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
      this.rotateY = 10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
      this.rotateZ = 10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));

      this.rotate_X = -10 * ((mouseY - buttonHeight / 2) / (buttonHeight / 2));
      this.rotate_Y = -10 * ((mouseX - buttonWidth / 2) / (buttonWidth / 2));
      this.rotate_Z = -10 * ((mouseX + mouseY - buttonWidth) / (buttonWidth + buttonHeight));
      console.log(this.rotateY);
      if(this.rotate_Y>2){
        console.log('dreta');
        this.button.classList.remove(this.dynamicClass+'_default_shadow');
        this.button.classList.remove(this.dynamicClass+'_left_shadow');
        this.button.classList.add(this.dynamicClass+'_right_shadow');
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_default');
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_right');
        this.button.querySelector('.front').classList.add(this.dynamicClass+'_left');
      }
      if(this.rotate_Y>-2 && this.rotate_Y<2){
        this.button.classList.remove(this.dynamicClass+'_right_shadow');
        this.button.classList.remove(this.dynamicClass+'_left_shadow');
        this.button.classList.add(this.dynamicClass+'_default_shadow');
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_right');
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_left');
        this.button.querySelector('.front').classList.add(this.dynamicClass+'_default');
      }
      if(this.rotate_Y<-2){
        this.button.classList.remove(this.dynamicClass+'_right_shadow'); // Elimina la clase "estiloClase"
        this.button.classList.remove(this.dynamicClass+'_default_shadow'); // Elimina la clase "estiloClase"
        this.button.classList.add(this.dynamicClass+'_left_shadow'); // Agrega la clase "estiloClase"
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_default');
        this.button.querySelector('.front').classList.remove(this.dynamicClass+'_left');
        this.button.querySelector('.front').classList.add(this.dynamicClass+'_right');
      }
    }
  }
  loading=true;
  handleMouseOut() {
    if (this.button) {
      this.button.classList.remove(this.dynamicClass+'_right');
      this.button.classList.remove(this.dynamicClass+'_left_shadow');
      this.button.classList.add(this.dynamicClass+'_default_shadow');
      this.button.querySelector('.front').classList.remove(this.dynamicClass+'_right');
      this.button.querySelector('.front').classList.remove(this.dynamicClass+'_left');
      this.button.querySelector('.front').classList.add(this.dynamicClass+'_default');
    }
  }

  generateAndApplyStyles(): void {
    const aspectRatio = (this.height / this.width);
    let rotationDegrees = Math.atan(aspectRatio) * (8 / Math.PI) ;
    const maxRotationDegrees = this.raise/10; // Máximo ángulo de rotación deseado


    // let rotationDegrees = Math.atan(aspectRatio) * (180 / Math.PI) * this.raise;
    console.log('maxRotationDegrees')
    console.log(maxRotationDegrees)
    console.log(rotationDegrees)
    if (rotationDegrees > maxRotationDegrees) {
      rotationDegrees = maxRotationDegrees; // Limitar el ángulo de rotación máximo
    }
    this.dynamicStyles = `

    .${this.dynamicClass}_left_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right_shadow:before{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default_shadow:before{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_left{
      transform:skewY(calc(1deg * ${rotationDegrees} * -1));
      transition: transform 0.2s ease-out;
    }
    .${this.dynamicClass}_right{
      transform:skewY(calc(1deg * ${rotationDegrees} * 1));
      transition:transform 0.2s ease-out;
    }
    .${this.dynamicClass}_default{
      transform:skew(0) translateZ(0);
      transition:transform 0.2s ease-out;
      transform: translateY(0px);
    }


    /*shadow*/
    .${this.dynamicClass}_default_shadow:hover:before{
      transform: translateY(${-(this.raise/2.5)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_default_shadow:active:before{
      transform: translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_left_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    .${this.dynamicClass}_right_shadow:active:before{
      transform:skewY(0) translateY(${-(this.raise/1.6)}px);
      transition:transform 0.1s ease-out;
    }
    /*front*/
    .${this.dynamicClass}_left:active{
      transform:skewY(0) translateY(${this.raise}px);
    }
    .${this.dynamicClass}_right:active{
      transform:skewY(0) translateY(${this.raise}px);
    }

    .${this.dynamicClass}_default:hover{
      transform: translateY(${this.raise*0.5}px);
    }
    .${this.dynamicClass}_default:active{
      transform: translateY(${this.raise}px);
    }

    .${this.dynamicClass} {
      height: ${(this.height)+this.raise}px;
        width: 100%;
          position: relative;
    }
    .${this.dynamicClass}:before {
      content:" ";
      position:absolute;
      height: ${(this.height)}px;
      margin-top: ${(this.raise*1.6)}px;
      margin-left: 2px;
      margin-right: 2px;
      left: 0;
      right: 0;
      background: ${this.shadow_bg_color};
      border-radius: ${this.rounded}px;
      /*border: solid whitesmoke; !*transform:skewY(calc(1deg * 4 * 1))*!*/
      transition:transform 0.2s ease-out;
    }

    .${this.dynamicClass} .back:before{
      height: ${(this.height)}px;
      margin-top: ${(this.raise)}px;
      left: 0;
      right: 0;
      margin-left: 0.25px;
      margin-right: 0.25px;
      content:" ";
      position: absolute;
      background: ${this.back_bg_color};
      /*border: solid whitesmoke;*/
        border-radius:${this.rounded}px;
        /*
        border-bottom-left-radius:${this.rounded}px;
      border-bottom-right-radius: ${this.rounded}px;

        border-top-left-radius:${this.rounded/(this.raise*0.1)}px;
        border-top-right-radius:${this.rounded/(this.raise*0.1)}px;
        */
      }
    .${this.dynamicClass} .front{
      position: absolute;
      height: ${(this.height)}px;
       left: 0;
      right: 0;
      background: ${this.front_bg_color};
      color:${this.font_color};
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      border-radius: ${this.rounded}px;
      border: solid ${this.front_border_color} ${this.front_border}px;
      font-size: ${this.font_size}px;
    }
    .${this.dynamicClass} .front p{
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: pre-wrap;
    }
* {
  box-sizing: border-box;
}

  `;
    console.log(this.dynamicStyles);
    this.dynamicStyleService.applyStyles(this.dynamicStyles, this.dynamicClass);
    this.refreshData();
  }

  changeWindow(window: { [key: string]: boolean }, prop: string): void {
    for (const attr in window) {
      if (window.hasOwnProperty(attr)) {
        window[attr]=false;
      }
    }
    window[prop] = true; // Actualizar el valor del atributo a true

  }
}
