import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DynamicStyleService} from "../../../../../services/dinamicStyle.service";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{
  dynamicClass='btn';
  dynamicStyles='';
  buttonloading=true;
  width=0;
  height=100;
  rounded=100;
  raise=10;
  bg_color='#415156';
  color='rgba(196,99,0,0.93)';
  buttonRaiseLevel = 2;
  buttonShadowDivisor = 4;
  button:any;
  private rotateX=0;
  private rotateY=0;
  private rotateZ=0;
  private rotate_X=0;
  private rotate_Y=0;
  private rotate_Z=0;


  constructor(private dynamicStyleService: DynamicStyleService) {

  }
  ngOnInit() {
    this.button = document.getElementById('myButton');
    this.width=this.button.offsetWidth;
    this.button.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.button.addEventListener('mouseout', this.handleMouseOut.bind(this));
    console.log('rrr')
    this.button.addEventListener('click',this.button.classList.add('clicked'));
    this.generateAndApplyStyles()

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
    const maxRotationDegrees = this.raise/5; // Máximo ángulo de rotación deseado
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
      background: #00FFC471;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      border-radius: ${this.rounded}px;
      border: solid #00FFC471 2px;
    }

* {
  box-sizing: border-box;
}

  `;
    this.dynamicStyleService.applyStyles(this.dynamicStyles, this.dynamicClass);
  }
  /*
       content:" ";
     background-color:rgba(0, 0, 0, 0);
     width:calc(100% - 2px);
     height:calc(100% - var(--button-raise-level)*var(--button-shadow-divisor));
     bottom:calc(0px - var(--button-raise-level)/var(--button-shadow-divisor));
     left:1px;
     position:absolute;
     border-radius:var(--button-default-border-radius);
     transform:skewY(0) translateZ(0);
     transition:transform calc(var(--transform-speed)*.8) ease-out,background calc(var(--transform-speed)*.8) ease-out;
    }
   */
  get dynamicClasses(): string {
    return 'px-[' + this.width + 'px] ' +
      'py-[' + this.height + 'px] ' +
      'rounded-[' + this.rounded + 'px]';
  }
  loading() {
    this.buttonloading=!this.buttonloading;
    console.log(this.dynamicClasses)
  }
}
