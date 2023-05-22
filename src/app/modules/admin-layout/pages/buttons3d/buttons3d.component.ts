import {Component, OnInit} from '@angular/core';
import {DynamicStyleService} from "../../../../services/dinamicStyle.service";

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
  }
}
