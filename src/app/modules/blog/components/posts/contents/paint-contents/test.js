

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
  btn.addEventListener("click", function() {
    if(!loading){
      //loading=true;

      console.log('eeeeee')
      const childElement= btn.querySelector('.btn_loading_wrapp');
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

btns = document.querySelectorAll('.btn_loading');

btns.forEach(btn => {

  var loading=false;
  btn.addEventListener("click", function() {
    if(!loading){
      //loading=true;

      console.log('eeeeee')
      const childElement= btn.querySelector('.btn_loading_wrapp');
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
