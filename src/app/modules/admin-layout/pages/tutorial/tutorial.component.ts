import {Component, OnInit} from '@angular/core';
import {DynamicStyleService} from "../../../../services/dinamicStyle.service";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit{
  htmlCodes:string[]=[];
  cssCodes:string[]=[];
  jsCodes:string[]=[];

  constructor(private dynamicStyleService: DynamicStyleService) {
  }
  ngOnInit() {
    this.htmlCodes[0]=`
<div class="btn btn_shadow">
  <div class="btn_back">
    <div class="btn_front">
      <p></p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[0]=`
.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
`;
    this.jsCodes[0]='';

    this.htmlCodes[1]=`
<div class="btn btn_shadow" id="myButton">
  <div class="btn_back">
    <div class="btn_front">
      <p></p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[1]=`

.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  left: 0;
  right: 0;
  margin-left: 0.25px;
  margin-right: 0.25px;
  background: #004c65;
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
`;
    this.jsCodes[1]='';

    this.htmlCodes[2]=`
<div class="btn btn_shadow" id="myButton">
  <div class="btn_back">
    <div class="btn_front">
      <p>Button</p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[2]=`
.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  left: 0;
  right: 0;
  margin-left: 0.25px;
  margin-right: 0.25px;
  background: #004c65;
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  left: 0;
  right: 0;
  background: #00FFC471; /*#transparent;*/
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-btn_backface-visibility:hidden;
  btn_backface-visibility:hidden;
  border-radius:var(--rounded);
  border: solid #00FFC471 2px;
  transition:transform 0.1s ease-out;
}`
    this.jsCodes[2]='';

    this.htmlCodes[3]=`
<div class="btn btn_shadow" id="myButton">
  <div class="btn_back">
    <div class="btn_front">
      <p>Button</p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[3]=`
.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  left: 0;
  right: 0;
  margin-left: 0.25px;
  margin-right: 0.25px;
  background: #004c65;
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  left: 0;
  right: 0;
  background: #00FFC471; /*#transparent;*/
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-btn_backface-visibility:hidden;
  btn_backface-visibility:hidden;
  border-radius:var(--rounded);
  border: solid #00FFC471 2px;
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}
`
    this.jsCodes[3]=`
<script>
  var raise=30;
  btn = document.querySelector('.btn');
  var style = document.querySelector('.btn').style;
  style.setProperty('--raise', raise+'px');

  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    }
  });

  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }
</script>
        `;

    this.htmlCodes[4]=`
<div class="btn btn_shadow" id="myButton">
  <div class="btn_back">
    <div class="btn_front">
      <p>Button</p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[4]=`
.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  left: 0;
  right: 0;
  margin-left: 0.25px;
  margin-right: 0.25px;
  background: #004c65;
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  left: 0;
  right: 0;
  background: #00FFC471; /*#transparent;*/
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-btn_backface-visibility:hidden;
  btn_backface-visibility:hidden;
  border-radius:var(--rounded);
  border: solid #00FFC471 2px;
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
  transition: transform 0.2s ease-out;
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
  transform: translateY(0px);
}
`
    this.jsCodes[4]=`
<script>
  var raise=30;
  btn = document.querySelector('.btn');
  var style = document.querySelector('.btn').style;
  style.setProperty('--raise', raise+'px');

  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });



  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }
</script>
        `;


    this.htmlCodes[5]=`
<div class="btn btn_shadow" id="myButton">
  <div class="btn_back">
    <div class="btn_front">
      <p>Click</p>
    </div>
  </div>
</div>
    `;
    this.cssCodes[5]=`
.btn{
 --height: 100px;
 --raise: 30px;
 --rounded: 30px;
 --rotate: 1;
 --rotate_invers: 1 * - 1;
 }
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  display:flex;
  flex:1;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  margin-left: 2px;
  margin-right: 2px;
  left: 0;
  right: 0;
  background: rgba(54, 96, 112, 0.38);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  left: 0;
  right: 0;
  margin-left: 0.25px;
  margin-right: 0.25px;
  background: #004c65;
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  left: 0;
  right: 0;
  background: #00FFC471; /*#transparent;*/
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-btn_backface-visibility:hidden;
  btn_backface-visibility:hidden;
  border-radius:var(--rounded);
  border: solid #00FFC471 2px;
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

.btn_shadow_default:active:before{
  transform: translateY(-10px);
}
.btn_shadow_left:active:before{
  transform: translateY(-10px);
}
.btn_shadow_right:active:before{
}

/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
  transition: transform 0.2s ease-out;
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
  transform: translateY(0px);
}

.btn_front_left:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_right:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_default:active{
  transform:skewY(0) translateY(var(--raise));
}`
    this.jsCodes[5]=`
<script>
  var raise=30;
  btn = document.querySelector('.btn');
  var style = document.querySelector('.btn').style;
  style.setProperty('--raise', raise+'px');

  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });



  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }
</script>
        `;

    this.htmlCodes[6]=`
<div class="flex gap-10">
<div class="btn btn_primary btn_shadow btn_loading" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_secondary btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>

<div class="btn btn_anchor btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_danger btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_disabled btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
</div>
    `;
    this.cssCodes[6]=
      `

.gap-10 {
  gap: 35px;
}
.flex-col{
flex-direction: column;
}
.btn{
  --font-body-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  --height: 50px;
  --raise: 15px;
  --rounded: 10px;
  --rotate: 1;
  --rotate_invers: 1 * - 1;
  --border:4px;
  --border_style:solid #004c65 var(--border);
  --bg-front-color: #AAD3EA;
  --bg-shadow-color: #4B4B4B84;
  --bg-back-color: #004c65;
  --font-color: white;
  --font-body-weight:800;
  --width:180px;
}
.btn_primary{
  --bg-shadow-color: #4B4B4B20;
  --bg-front-color: #AAD3EA;
  --bg-back-color: #57A9D4;
  --border_style:solid #57A9D4 var(--border);
  --font-color: #2875A0;
}
.btn_secondary{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #FAFAFA;
  --bg-back-color: #349890;
  --border_style:solid #b3e5e1 var(--border);
  --font-color: #1A4C48;
}
.btn_anchor{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #95D44A;
  --bg-back-color: #52A934;
  --border_style:solid #5bbd3a var(--border);
  --font-color: #3F8228;
}
.btn_danger{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #8B3357;
  --bg-back-color: #531849;
  --border_style:solid #531849 var(--border);
  --font-color: #fff;
}
.btn_disabled{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #C1C1C1;
  --bg-back-color: #838383;
  --border_style:solid #838383 var(--border);
  --font-color: #555753;
}
.btn p{
  font-weight:var(--font-body-weight);

}
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  font-family:var(--font-body-family);
  width:var(--width);
  color:var(--font-color);
  border: var(--border) solid transparent;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  width:var(--width);
  background: var(--bg-shadow-color);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
  border: var(--border) solid transparent;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  width:var(--width);
  border: var(--border) solid transparent;
  background: var(--bg-back-color);
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  width:var(--width);

  background: var(--bg-front-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

.btn_shadow_default:hover:before{
  transform: translateY(-5px);
}
.btn_shadow_default:active:before{
  transform: translateY(-10px);
}
.btn_shadow_left:active:before{
  transform: translateY(-10px);
}
.btn_shadow_right:active:before{
  transform: translateY(-10px);
}
/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
}

.btn_front_left:active{
  transform:skewY(0) translateY(var(--raise));

}
.btn_front_right:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_default:hover{
  transform: translateY(calc(var(--raise) * 0.5));

}
.btn_front_default:active{
  transform:skewY(0) translateY(var(--raise));
}

/*loading*/
.btn_loading_wrapp{
  position: absolute;
  height: var(--height);
   width:var(--width);

  margin-left:calc(var(--border)*-1);/* padding for borders of parent */
  margin-right:calc(var(--border)*-1);/* padding for borders of parent */
  background: var(--bg-back-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  overflow: hidden;
  z-index:1;
}

.btn_loading_wrapp:before{
  content:" ";
  position: absolute;
  height: var(--height);
  width: 0;
  left: 0;
  right: 0;
  background: var(--bg-front-color);
  z-index:-1;
}

.btn_loading_2:before{
  width:100%;
  transition: width 1s ease-in;
}
.opacity-0{
  opacity:0;
}
.hidden{
  display:none;
}
.flex{
  display:flex;
}

/*animation text*/
.btn_loading_2 .txt_loading{
  animation: slide-up 0.5s ease-in-out;
}
.btn_loading_2 .txt_loaded{
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`
    ;
    this.jsCodes[6]=`
<script>
  var raise=15;
  botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
  var style = btn.style;
  style.setProperty('--raise', raise+'px');
  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });
});


   myButtons = document.querySelectorAll('.btn_loading');

myButtons.forEach(myButton => {

  var loading=false;
  myButton.addEventListener("click", function() {
    if(!loading){
     //loading=true;

       console.log('eeeeee')
    const childElement= myButton.querySelector('.btn_loading_wrapp');
    childElement.classList.remove('opacity-0');
    childElement.classList.add('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "none";
    document.querySelector('.btn_front').style.pointerEvents = "none";
    //document.querySelector('.btn_front').style.opacity = "0.8";

    document.querySelector('.txt_loaded').classList.add('hidden');
    document.querySelector('.txt_loading').classList.remove('hidden');

    setTimeout(function() {
        document.querySelector('.txt_loaded').classList.remove('hidden');
    \tdocument.querySelector('.txt_loading').classList.add('hidden');

          setTimeout(function() {
     childElement.classList.add('opacity-0');
    childElement.classList.remove('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "auto";
    document.querySelector('.btn_front').style.pointerEvents = "auto";
    //document.querySelector('.btn_front').style.opacity = "1";

    }, 1000);
      //loading=false;

    }, 3000);
    }


  });
});

  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }

  /*
  const height = 200; // Altura del elemento
  const width = 300; // Ancho del elemento

  // Calcular el ángulo en radianes
  const angleRadians = Math.atan(height / width);

  // Convertir el ángulo a grados
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Ajustar el ángulo a 10 grados
  const adjustedAngleDegrees = 10;

  // Calcular la nueva altura en base al ángulo ajustado
  const newHeight = Math.tan(adjustedAngleDegrees * (Math.PI / 180)) * width;

  console.log("Nueva altura:", newHeight);
   */
</script>
    `;

    this.htmlCodes[7]=`
<div class="flex gap-10">
<div class="btn btn_primary btn_shadow btn_loading" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_secondary btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>

<div class="btn btn_anchor btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_danger btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_disabled btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
</div>
    `;
    this.cssCodes[7]=
    `



.gap-10 {
  gap: 35px;
}
.flex-col{
flex-direction: column;
}
.btn{
  --font-body-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  --height: 50px;
  --raise: 15px;
  --rounded: 10px;
  --rotate: 1;
  --rotate_invers: 1 * - 1;
  --border:4px;
  --border_style:solid #004c65 var(--border);
  --bg-front-color: #AAD3EA;
  --bg-shadow-color: #4B4B4B84;
  --bg-back-color: #004c65;
  --font-color: white;
  --font-body-weight:800;
  --width:180px;
}
.btn_primary{
  --bg-shadow-color: #4B4B4B20;
  --bg-front-color: #eda065;
  --bg-back-color: #9a453f;
  --border_style:solid #b84a41 var(--border);
  --font-color: #338a9d;
}
.btn_secondary{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #fffbb5;
  --bg-back-color: #4e6a6b;
  --border_style:solid #5c8486 var(--border);
  --font-color: #20201e;
}
.btn_anchor{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #ececec;
  --bg-back-color: #313131;
  --border_style:solid #404040 var(--border);
  --font-color: #7f4997;
}
.btn_danger{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #8B3357;
  --bg-back-color: #afca92;
  --border_style:solid #d2f3af var(--border);
  --font-color: #fff;
}
.btn_disabled{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #f16c5d;
  --bg-back-color: #7da7ac;
  --border_style:solid #9dd6dd var(--border);
  --font-color: #ececec;
}
.btn p{
  font-weight:var(--font-body-weight);

}
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  font-family:var(--font-body-family);
  width:var(--width);
  color:var(--font-color);
  border: var(--border) solid transparent;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  width:var(--width);
  background: var(--bg-shadow-color);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
  border: var(--border) solid transparent;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  width:var(--width);
  border: var(--border) solid transparent;
  background: var(--bg-back-color);
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  width:var(--width);

  background: var(--bg-front-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

.btn_shadow_default:hover:before{
  transform: translateY(-5px);
}
.btn_shadow_default:active:before{
  transform: translateY(-10px);
}
.btn_shadow_left:active:before{
  transform: translateY(-10px);
}
.btn_shadow_right:active:before{
  transform: translateY(-10px);
}
/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
}

.btn_front_left:active{
  transform:skewY(0) translateY(var(--raise));

}
.btn_front_right:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_default:hover{
  transform: translateY(calc(var(--raise) * 0.5));

}
.btn_front_default:active{
  transform:skewY(0) translateY(var(--raise));
}

/*loading*/
.btn_loading_wrapp{
  position: absolute;
  height: var(--height);
   width:var(--width);

  margin-left:calc(var(--border)*-1);/* padding for borders of parent */
  margin-right:calc(var(--border)*-1);/* padding for borders of parent */
  background: var(--bg-back-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  overflow: hidden;
  z-index:1;
}

.btn_loading_wrapp:before{
  content:" ";
  position: absolute;
  height: var(--height);
  width: 0;
  left: 0;
  right: 0;
  background: var(--bg-front-color);
  z-index:-1;
}

.btn_loading_2:before{
  width:100%;
  transition: width 1s ease-in;
}
.opacity-0{
  opacity:0;
}
.hidden{
  display:none;
}
.flex{
  display:flex;
}

/*animation text*/
.btn_loading_2 .txt_loading{
  animation: slide-up 0.5s ease-in-out;
}
.btn_loading_2 .txt_loaded{
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

    `
    ;
    this.jsCodes[7]=`
<script>
  var raise=15;
  botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
  var style = btn.style;
  style.setProperty('--raise', raise+'px');
  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });
});


   myButtons = document.querySelectorAll('.btn_loading');

myButtons.forEach(myButton => {

  var loading=false;
  myButton.addEventListener("click", function() {
    if(!loading){
     //loading=true;

       console.log('eeeeee')
    const childElement= myButton.querySelector('.btn_loading_wrapp');
    childElement.classList.remove('opacity-0');
    childElement.classList.add('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "none";
    document.querySelector('.btn_front').style.pointerEvents = "none";
    //document.querySelector('.btn_front').style.opacity = "0.8";

    document.querySelector('.txt_loaded').classList.add('hidden');
    document.querySelector('.txt_loading').classList.remove('hidden');

    setTimeout(function() {
        document.querySelector('.txt_loaded').classList.remove('hidden');
    \tdocument.querySelector('.txt_loading').classList.add('hidden');

          setTimeout(function() {
     childElement.classList.add('opacity-0');
    childElement.classList.remove('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "auto";
    document.querySelector('.btn_front').style.pointerEvents = "auto";
    //document.querySelector('.btn_front').style.opacity = "1";

    }, 1000);
      //loading=false;

    }, 3000);
    }


  });
});

  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }

  /*
  const height = 200; // Altura del elemento
  const width = 300; // Ancho del elemento

  // Calcular el ángulo en radianes
  const angleRadians = Math.atan(height / width);

  // Convertir el ángulo a grados
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Ajustar el ángulo a 10 grados
  const adjustedAngleDegrees = 10;

  // Calcular la nueva altura en base al ángulo ajustado
  const newHeight = Math.tan(adjustedAngleDegrees * (Math.PI / 180)) * width;

  console.log("Nueva altura:", newHeight);
   */
</script>
    `;

    this.htmlCodes[8]=
      `
<div class="flex flex-wrap overflow-x-hidden gap-10">
<div class="btn btn_primary btn_shadow btn_loading" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hov er</p>
    </div>
  </div>
</div>
<div class="btn btn_secondary btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">

        <p class="txt_loading"><div class="wrap">
\tgrin
\t<div class="eye grin"></div>
\t<div class="eye grin"></div>
</div></p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>

<div class="btn btn_anchor btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_danger btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
<div class="btn btn_disabled btn_shadow btn_loading btn_primary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
      <p>Hover</p>
    </div>
  </div>
</div>
</div>
    `
    ;
    this.cssCodes[8]=
      `



.gap-10 {
  gap: 35px;
}
.flex-col{
flex-direction: column;
}
.btn{
  --font-body-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  --height: 50px;
  --raise: 15px;
  --rounded: 90px;
  --rotate: 1;
  --rotate_invers: 1 * - 1;
  --border:4px;
  --border_style:solid #004c65 var(--border);
  --bg-front-color: #AAD3EA;
  --bg-shadow-color: #4B4B4B84;
  --bg-back-color: #004c65;
  --font-color: white;
  --font-body-weight:800;
  --width:180px;
}
.btn_primary{
  --bg-shadow-color: #4B4B4B20;
  --bg-front-color: #338a9d;
  --bg-back-color: #9a453f;
  --border_style:solid #b84a41 var(--border);
  --font-color: #ea893e;
}
.btn_secondary{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #fffbb5;/*#fffbb5;*/
  --bg-back-color: #4e6a6b;
  --border_style:solid #5c8486 var(--border);
  --font-color: #20201e;
}
.btn_anchor{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #ececec;
  --bg-back-color: #313131;
  --border_style:solid #404040 var(--border);
  --font-color: #7f4997;
}
.btn_danger{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #8B3357;
  --bg-back-color: #afca92;
  --border_style:solid #d2f3af var(--border);
  --font-color: #fff;
}
.btn_disabled{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #f16c5d;
  --bg-back-color: #7da7ac;
  --border_style:solid #9dd6dd var(--border);
  --font-color: #ececec;
}
.btn p{
  font-weight:var(--font-body-weight);

}
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  font-family:var(--font-body-family);
  width:var(--width);
  color:var(--font-color);
  border: var(--border) solid transparent;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  width:var(--width);
  background: var(--bg-shadow-color);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
  border: var(--border) solid transparent;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  width:var(--width);
  border: var(--border) solid transparent;
  background: var(--bg-back-color);
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  width:var(--width);

  background: var(--bg-front-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

.btn_shadow_default:hover:before{
  transform: translateY(-5px);
}
.btn_shadow_default:active:before{
  transform: translateY(-10px);
}
.btn_shadow_left:active:before{
  transform: translateY(-10px);
}
.btn_shadow_right:active:before{
  transform: translateY(-10px);
}
/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
}

.btn_front_left:active{
  transform:skewY(0) translateY(var(--raise));

}
.btn_front_right:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_default:hover{
  transform: translateY(calc(var(--raise) * 0.5));

}
.btn_front_default:active{
  transform:skewY(0) translateY(var(--raise));
}

/*loading*/
.btn_loading_wrapp{
  position: absolute;
  height: var(--height);
   width:var(--width);

  margin-left:calc(var(--border)*-1);/* padding for borders of parent */
  margin-right:calc(var(--border)*-1);/* padding for borders of parent */
  background: var(--bg-back-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  overflow: hidden;
  z-index:1;
}

.btn_loading_wrapp:before{
  content:" ";
  position: absolute;
  height: var(--height);
  width: 0;
  left: 0;
  right: 0;
  background: var(--bg-front-color);
  z-index:-1;
}

.btn_loading_2:before{
  width:100%;
  transition: width 1s ease-in;
}
.opacity-0{
  opacity:0;
}
.hidden{
  display:none;
}
/*.flex{
  display:flex;
}*/

/*animation text*/
.btn_loading_2 .txt_loading{
  animation: slide-up 0.5s ease-in-out;
}
.btn_loading_2 .txt_loaded{
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


/* bender eye*/


.wrap {
  position: relative;
  width: 100px;
  height: 40px;
  margin: 0 2rem;
  color: #dbc9aa;
  line-height: 40px;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  padding-top: 5.5rem;
  margin-bottom: 0;
}
.wrap .eye {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
}
.wrap .eye:before {
  content: "";
  position: absolute;
  margin-left: auto;
  width: 10px;
  height: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #141414;
  margin: auto;
}
.wrap .eye.grin:after, .wrap .eye.sad:after {
  content: "";
  position: absolute;
  width: calc(100% + 20px);
  height: 0;
  background: #eae0ce;
  left: -10px;
}
.wrap .eye.grin:after {
  bottom: -20px;
}
.wrap .eye:first-child {
  left: 0;
}
.wrap .eye:last-child {
  right: 0;
}
.wrap .eye.grin:before {
  -webkit-animation: grinb 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          animation: grinb 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.wrap .eye.grin:after {
  -webkit-animation: grina 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          animation: grina 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}

@-webkit-keyframes grinb {
  0%, 10% {
    bottom: 0;
  }
  20%, 40% {
    bottom: 50%;
  }
  50%, 100% {
    bottom: 0;
  }
}

@keyframes grinb {
  0%, 10% {
    bottom: 0;
  }
  20%, 40% {
    bottom: 50%;
  }
  50%, 100% {
    bottom: 0;
  }
}
@-webkit-keyframes grina {
  0%, 10% {
    height: 0;
  }
  20%, 40% {
    height: 100%;
  }
  50%, 100% {
    height: 0;
  }
}
@keyframes grina {
  0%, 10% {
    height: 0;
  }
  20%, 40% {
    height: 100%;
  }
  50%, 100% {
    height: 0;
  }
}


/* water*/

.bubble {
  --bg_front_color:#42a5f5;
  --bg_back_color:#c7eeff;
  width: 100%;
  height: 100%;
  background-color: var(--bg-front-color);
  overflow: hidden;
  transform: translate(0, 0);
\tborder-radius:var(--rounded);
}
.bubble .water {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
}
.bubble .water_wave_back {
  width:200%;
  left: 0;
  top:0;
  position:relative;
  fill: var(--bg_back_color);

  animation: wave-back 0.8s infinite linear;
}
.bubble .water_wave_front {
    margin-top: 8px;
  width:200%;
  left: 0;
  top:0;
  position:absolute;
  fill: var(--bg_front_color);
  animation: wave-front 0.6s infinite linear;
}

.liquid{
  background:var(--bg_front_color);
  width: 100%;
  height: 100%;
  margin-top:-6px;
}


@keyframes wave-front {
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes wave-back {
  100% {
    transform: translate(-50%, 0);
  }
}`
    ;
    this.jsCodes[8]=`
<script>

  var raise=15;
  botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
  var style = btn.style;
  style.setProperty('--raise', raise+'px');
  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });
});


   myButtons = document.querySelectorAll('.btn_loading');

myButtons.forEach(myButton => {

  var loading=false;
  myButton.addEventListener("click", function() {
    if(!loading){
     //loading=true;

       console.log('eeeeee')
    const childElement= myButton.querySelector('.btn_loading_wrapp');
    childElement.classList.remove('opacity-0');
    childElement.classList.add('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "none";
    document.querySelector('.btn_front').style.pointerEvents = "none";
    //document.querySelector('.btn_front').style.opacity = "0.8";

    document.querySelector('.txt_loaded').classList.add('hidden');
    document.querySelector('.txt_loading').classList.remove('hidden');

                /* water effect loading */
    const water = document.querySelector(".water");

let percent = 0;
let x = 100;

const interval = setInterval(() => {
  percent++;
  water.style.transform ='translate(0, '+100 - percent+'%))';
  if (percent === x) {
    clearInterval(interval);
  }
}, 100);



    setTimeout(function() {
        document.querySelector('.txt_loaded').classList.remove('hidden');
    document.querySelector('.txt_loading').classList.add('hidden');

          setTimeout(function() {
     childElement.classList.add('opacity-0');
    childElement.classList.remove('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "auto";
    document.querySelector('.btn_front').style.pointerEvents = "auto";
    //document.querySelector('.btn_front').style.opacity = "1";

    }, 1000);
      //loading=false;

    }, 3000);
    }



  });
});


  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }

  /*
  const height = 200; // Altura del elemento
  const width = 300; // Ancho del elemento

  // Calcular el ángulo en radianes
  const angleRadians = Math.atan(height / width);

  // Convertir el ángulo a grados
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Ajustar el ángulo a 10 grados
  const adjustedAngleDegrees = 10;

  // Calcular la nueva altura en base al ángulo ajustado
  const newHeight = Math.tan(adjustedAngleDegrees * (Math.PI / 180)) * width;

  console.log("Nueva altura:", newHeight);
   */


</script>
    `;

    this.htmlCodes[9]=
      `
<div class="btn   btn_shadow btn_loading btn_secondary" >
  <div class="btn_back">
    <div class="btn_front">
      <div class="btn_loading_wrapp opacity-0">
         <div class="bubble">
    <div id="water" class="water">
      <svg viewBox="0 0 560 40" class="water_wave water_wave_back">
        <path d="M140 20C70 20 70 0 0 0V40H560V0C490 0 490 20 420 20C350 20 350 0 280 0C210 0 210 20 140 20Z" />
      </svg>

      <svg viewBox="0 0 560 40" class="water_wave water_wave_front">
        <path d="M140 20C70 20 70 0 0 0V40H560V0C490 0 490 20 420 20C350 20 350 0 280 0C210 0 210 20 140 20Z" />
      </svg>

      <div class="liquid">
      </div>
    </div>
  </div>
        <p class="txt_loading">Loading</p>
        <p class="txt_loaded hidden">succes</p>
      </div>
 <p>Hover</p>
    </div>
  </div>
</div>
    `
    ;
    this.cssCodes[9]=
      `


.gap-10 {
  gap: 35px;
}
.flex-col{
flex-direction: column;
}
.btn{
  --font-body-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  --height: 50px;
  --raise: 15px;
  --rounded: 90px;
  --rotate: 1;
  --rotate_invers: 1 * - 1;
  --border:4px;
  --border_style:solid #004c65 var(--border);
  --bg-front-color: #AAD3EA;
  --bg-shadow-color: #4B4B4B84;
  --bg-back-color: #004c65;
  --font-color: white;
  --font-body-weight:800;
  --width:180px;
}
.btn_primary{
  --bg-shadow-color: #4B4B4B20;
  --bg-front-color: #338a9d;
  --bg-back-color: #9a453f;
  --border_style:solid #b84a41 var(--border);
  --font-color: #ea893e;
}
.btn_secondary{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #95D44A;
  --bg-back-color: #52A934;
  --border_style:solid #5bbd3a var(--border);
  --font-color: #3F8228;
}
.btn_anchor{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #ececec;
  --bg-back-color: #313131;
  --border_style:solid #404040 var(--border);
  --font-color: #7f4997;
}
.btn_danger{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #8B3357;
  --bg-back-color: #afca92;
  --border_style:solid #d2f3af var(--border);
  --font-color: #fff;
}
.btn_disabled{
  --bg-shadow-color: #4B4B4B84;
  --bg-front-color: #f16c5d;
  --bg-back-color: #7da7ac;
  --border_style:solid #9dd6dd var(--border);
  --font-color: #ececec;
}
.btn p{
  font-weight:var(--font-body-weight);

}
.btn_shadow {
  height: calc(var(--height) + var(--raise));
  font-family:var(--font-body-family);
  width:var(--width);
  color:var(--font-color);
  border: var(--border) solid transparent;
}
.btn_shadow:before {
  content:" ";
  position:absolute;
  height: var(--height);
  margin-top: calc(var(--raise) + 10px);
  width:var(--width);
  background: var(--bg-shadow-color);
  border-radius: var(--rounded);
  transition:transform 0.2s ease-out;
  border: var(--border) solid transparent;
}
.btn_shadow .btn_back:before{
  content:" ";
  position: absolute;
  height: var(--height);
  margin-top: var(--raise);
  width:var(--width);
  border: var(--border) solid transparent;
  background: var(--bg-back-color);
  border-radius:var(--rounded);
  transition:transform 0.1s ease-out;
}
.btn_shadow .btn_front{
  position: absolute;
  height: var(--height);
  width:var(--width);

  background: var(--bg-front-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  transition:transform 0.1s ease-out;
}

/*btn_shadow events*/
.btn_shadow_left:before{
  transition: transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_shadow_right:before{
  transition:transform 0.2s ease-out;
  transform:skewY(calc(1deg * var(--rotate)));
}
.btn_shadow_default:before{
  transform:skew(0) translateZ(0);
}

.btn_shadow_default:hover:before{
  transform: translateY(-5px);
}
.btn_shadow_default:active:before{
  transform: translateY(-10px);
}
.btn_shadow_left:active:before{
  transform: translateY(-10px);
}
.btn_shadow_right:active:before{
  transform: translateY(-10px);
}
/*btn_front events*/
.btn_front_left{
  transform:skewY(calc(1deg * var(--rotate_invers)));
}
.btn_front_right{
  transform:skewY(calc(1deg * var(--rotate)));
  transition:transform 0.2s ease-out;
}
.btn_front_default{
  transform:skew(0) translateZ(0);
  transition:transform 0.2s ease-out;
}

.btn_front_left:active{
  transform:skewY(0) translateY(var(--raise));

}
.btn_front_right:active{
  transform:skewY(0) translateY(var(--raise));
}
.btn_front_default:hover{
  transform: translateY(calc(var(--raise) * 0.5));

}
.btn_front_default:active{
  transform:skewY(0) translateY(var(--raise));
}

/*loading*/
.btn_loading_wrapp{
  position: absolute;
  height: var(--height);
   width:var(--width);

  margin-left:calc(var(--border)*-1);/* padding for borders of parent */
  margin-right:calc(var(--border)*-1);/* padding for borders of parent */
  background: var(--bg-back-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:var(--rounded);
  border: var(--border_style);
  overflow: hidden;
  z-index:1;
}

.btn_loading_wrapp:before{
  content:" ";
  position: absolute;
  height: var(--height);
  width: 0;
  left: 0;
  right: 0;
  background: var(--bg-front-color);
  z-index:-1;
}

.btn_loading_2:before{
  width:100%;
  transition: width 1s ease-in;
}
.opacity-0{
  opacity:0;
}
.hidden{
  display:none;
}
.flex{
  display:flex;
}

/*animation text*/
.btn_loading_2 .txt_loading{
  animation: slide-up 0.5s ease-in-out;
    position:absolute

}
.btn_loading_2 .txt_loaded{
  animation: slide-down 0.5s ease-in-out;
    position:absolute

}
@keyframes slide-down {
  0% {
    transform: translateY(-150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


/* bender eye*/


.wrap {
  position: relative;
  width: 100px;
  height: 40px;
  margin: 0 2rem;
  color: #dbc9aa;
  line-height: 40px;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  padding-top: 5.5rem;
  margin-bottom: 0;
}
.wrap .eye {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
}
.wrap .eye:before {
  content: "";
  position: absolute;
  margin-left: auto;
  width: 10px;
  height: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #141414;
  margin: auto;
}
.wrap .eye.grin:after, .wrap .eye.sad:after {
  content: "";
  position: absolute;
  width: calc(100% + 20px);
  height: 0;
  background: #eae0ce;
  left: -10px;
}
.wrap .eye.grin:after {
  bottom: -20px;
}
.wrap .eye:first-child {
  left: 0;
}
.wrap .eye:last-child {
  right: 0;
}
.wrap .eye.grin:before {
  -webkit-animation: grinb 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          animation: grinb 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.wrap .eye.grin:after {
  -webkit-animation: grina 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          animation: grina 4s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}

@-webkit-keyframes grinb {
  0%, 10% {
    bottom: 0;
  }
  20%, 40% {
    bottom: 50%;
  }
  50%, 100% {
    bottom: 0;
  }
}

@keyframes grinb {
  0%, 10% {
    bottom: 0;
  }
  20%, 40% {
    bottom: 50%;
  }
  50%, 100% {
    bottom: 0;
  }
}
@-webkit-keyframes grina {
  0%, 10% {
    height: 0;
  }
  20%, 40% {
    height: 100%;
  }
  50%, 100% {
    height: 0;
  }
}
@keyframes grina {
  0%, 10% {
    height: 0;
  }
  20%, 40% {
    height: 100%;
  }
  50%, 100% {
    height: 0;
  }
}


/* water*/

.bubble {
/*     --bg-front-color: #95D44A; */
/*   --bg-back-color: #52A934; */
  --bg_front_color:#462255;
  --bg_back_color:#52A934;
  width: 100%;
  height: 100%;
  background-color: var(--bg-front-color);
  overflow: hidden;
  transform: translate(0, 0);
\tborder-radius:var(--rounded);
}
.bubble .water {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
}
.bubble .water_wave_back {
  width:200%;
  left: 0;
  top:0;
  position:relative;
  fill: var(--bg_back_color);

  animation: wave-back 0.8s infinite linear;
}
.bubble .water_wave_front {
    margin-top: 8px;
  width:200%;
  left: 0;
  top:0;
  position:absolute;
  fill: var(--bg_front_color);
  animation: wave-front 0.6s infinite linear;
}

.liquid{
  background:var(--bg_front_color);
  width: 100%;
  height: 120%;
  margin-top:-6px;

}


@keyframes wave-front {
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes wave-back {
  100% {
    transform: translate(-50%, 0);
  }
}`
    ;
    this.jsCodes[9]=
      `
      <script>

  var raise=15;
  botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
  var style = btn.style;
  style.setProperty('--raise', raise+'px');
  btn.addEventListener('mousemove', event => {
    const width = btn.offsetWidth;
    const height = btn.offsetHeight;
    const rotationDegrees = Math.atan((height * (raise) + raise) / (width )) ;
    const btnWidth = btn.offsetWidth;
    const mouseX = event.clientX - btn.getBoundingClientRect().left;

    style.setProperty('--rotate', (rotationDegrees));
    style.setProperty('--rotate_invers', (rotationDegrees * -1));

    this.rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
    if(this.rotate_Y>2){
      btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
      btn.classList.add('btn_shadow_right');
      btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
      btn.querySelector('.btn_front').classList.add('btn_front_left');
    }
    if(this.rotate_Y>-2 && this.rotate_Y<2){
      btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
      btn.classList.add('btn_shadow_default');
      btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_default');
    }
    if(this.rotate_Y<-2){
      console.log('right');
      btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
      btn.classList.add('btn_shadow_left');
    btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
      btn.querySelector('.btn_front').classList.add('btn_front_right');
    }
  });
});


   myButtons = document.querySelectorAll('.btn_loading');

myButtons.forEach(myButton => {

  var loading=false;
  myButton.addEventListener("click", function() {
    if(!loading){
     //loading=true;

       console.log('eeeeee')
    const childElement= myButton.querySelector('.btn_loading_wrapp');
    childElement.classList.remove('opacity-0');
    childElement.classList.add('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "none";
    document.querySelector('.btn_front').style.pointerEvents = "none";
    //document.querySelector('.btn_front').style.opacity = "0.8";

    document.querySelector('.txt_loaded').classList.add('hidden');
    document.querySelector('.txt_loading').classList.remove('hidden');

                /* water effect loading */
    const water = document.querySelector(".water");

let percent = 0;
let x = 100;

const interval = setInterval(() => {
  percent++;
  water.style.transform ='translate(0, '+100 - percent+'%))';
  if (percent === x) {
    clearInterval(interval);
  }
}, 100);



    setTimeout(function() {
        document.querySelector('.txt_loaded').classList.remove('hidden');
    document.querySelector('.txt_loading').classList.add('hidden');

          setTimeout(function() {
     childElement.classList.add('opacity-0');
    childElement.classList.remove('flex','btn_loading_2');
    document.querySelector('.btn_loading').style.pointerEvents = "auto";
    document.querySelector('.btn_front').style.pointerEvents = "auto";
    //document.querySelector('.btn_front').style.opacity = "1";

    }, 1000);
      //loading=false;

    }, 3000);
    }



  });
});


  function handleMouseOut(event) {
    // Código para manejar el evento 'mouseout'
  }

  /*
  const height = 200; // Altura del elemento
  const width = 300; // Ancho del elemento

  // Calcular el ángulo en radianes
  const angleRadians = Math.atan(height / width);

  // Convertir el ángulo a grados
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Ajustar el ángulo a 10 grados
  const adjustedAngleDegrees = 10;

  // Calcular la nueva altura en base al ángulo ajustado
  const newHeight = Math.tan(adjustedAngleDegrees * (Math.PI / 180)) * width;

  console.log("Nueva altura:", newHeight);
   */


</script>`;
  }
}
