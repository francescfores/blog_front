import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Post} from "../../../models/post";
import {PostCategory} from "../../../models/post-category";
import {Router} from "@angular/router";
import {PostService} from "../../../services/api/post.service";
import {CategoryService} from "../../../services/api/post-category.service";
import {SharedService} from "../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {ThemeService} from "../../../../../services/theme/theme.service";
import {first} from "rxjs/operators";
import {environment} from '../../../../../../environments/environment';
import {PostContent} from "../../../models/post-content";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts:any;
  private category_id: any;
  private subcategory_id: any;
  create_category = false;
  public formCategory: UntypedFormGroup;
  submitted = false;
  environment =environment;
  //alert
  text: any;
  color: any;
  show=false;
  autocloseTime=2000;
  private category!: Post;
  selectedFile: any;
  loading=false;


  categories!: PostCategory[];
  isDarkEnable = false;
  sidebarOpen= false;
  private id: any;
  public post!: Post;
  public postContents: PostContent[] = [];
    htmlCodes:string[]=[];
  cssCodes:string[]=[];
  jsCodes:string[]=[];

  constructor(
    private router: Router,
    private postService: PostService,
    private postCategoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    public themeService: ThemeService,

  ) {
    this.formCategory = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required],
    });
    this.post = new Post();
  }
  //types of contents
  //text //label
  //img //label url
  //card //title subtitle desc img width padding links
  getAtt(content: any, att: string): any {
    console.log(content.attributes.find((x: any) => x.name === att));
    const attribute =
      content.attributes.find((x: any) => x.name === att)!==undefined?
      content.attributes.find((x: any) => x.name === att):
      content.type.attributes.find((x: any) => x.name === att);
    return attribute ? attribute.value : null;
  }
  get fc() {
    return this.formCategory.controls;
  }
  getParams(){
    this.id = history.state.id;
    this.getProduct();


    // this.postCategoryService.getAll()
    //   .pipe(first())
    //   .subscribe(
    //     res => {
    //       console.log(res)
    //       this.categories = res.data.category;
    //     },
    //     error => {
    //     });
  }

  getProduct(){
    this.postService.get(this.id)
      .pipe(first())
      .subscribe(
        data => {
          console.error(data)

          this.post = data.data;
          this.postContents = this.post.components;
          console.log(this.post)
          console.log(this.postContents)
          this.loading=false;
          if (this.post) {
            //this.subcategories= this.category.subcategories;
            //init forms
            // this.form.value.post.name=this.post.name;
            // this.form.value.post.desc=this.post.desc;
            // this.form.value.post.category=this.post.category.id;
          }
        },
        error => {
        });
  }

  ngOnInit() {
    this.getParams();
        this.htmlCodes[0]=`
<div class="min-h-screen">

  <nav class="nav">
    <div class="nav_content">
      <div class="nav_left">
        <div class="nav_logo">
          <a href="">
            <svg height="25" width="100" class="c-slacklogo--white" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"><title>Slack</title><g fill="none"><path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z" fill="#ffffff"></path><path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#097eff"></path><path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#097eff"></path><path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ecb12f"></path><path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#ecb12f"></path></g></svg>
          </a>
        </div>
        <ul class="nav_list">
          <li><a href="">
</a></li>
          <li><a href="">Producto</a></li>
          <li><a href="">Producto</a></li>
          <li><a href=""><button onclick="etw()">click to enable tailwind in the iframe</button></a></li>
        </ul>
      </div>
      <div class="nav_center"></div>
      <div class="nav_right">
        <a  class="" href="">Conectar</a>
        <button class="button_outlined" >Test</button>
        <a  (click)="etw()">click to enable tailwind in the iframe</a>
      </div>
    </div>

  </nav>
  <main class="main" class="">
    <section class="boarding flex bg-[#541554] p-10 pt-[120px] ">
      <div class="flex-wrap gap-4 flex w-2/4 flex-col flex-1 items-start justify-center">
        <p class="text-white text-5xl">Pensado para las personas</p>
        <p class="text-amber-400 text-5xl">Creado para la productividad</p>
        <p class="text-white text-xl font-normal mt-4">
          Conecta con las personas adecuadas, encuentra lo que necesitas y automatiza todo lo demás. Así es como se trabaja en Slack, tu plataforma de productividad.
        </p>
        <button class="bg-white w-full rounded-sm text-center h-14 text-[#541554]">
          Registrarse con correo
        </button>
        <button class="flex justify-center items-center bg-blue-400 w-full rounded-sm text-center h-14 text-[#541554]">
          <div class="rounded-sm bg-white ">
            <svg class="h-14 w-14 p-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
          </div>
          <p class="mx-auto" >Registrarse con Google</p>
        </button>
        <p class="text-white text-xl font-medium mt-4">Slack puede probarse de forma gratuita durante el tiempo que se quiera</p>
      </div>
      <div class="flex h-full w-2/4 items-center justify-center">
        <video class="h-full w-full" title="Equipo hablando de trabajo en la aplicación de Slack" role="img" data-js-id="hero" loop="" muted="" playsinline="" poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.es-ES.jpg"><source src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.es-ES.webm" type="video/webm"><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.es-ES.mp4" type="video/mp4"></video>

      </div>
    </section>
    <section class="bg-[#F4EDE4] flex flex-col w-full justify-center items-center gap-10 p-10">
      <p class="text-neutral-800 text-xl font-md mt-10">Empresas de todo el mundo ya confían en Slack</p>
      <div class="flex flex-row w-full justify-center gap-10 p-4">
        <div>
          <img style="" alt="Airbnb" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png" data-srcset="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/company/_color/airbnb-logo@2x.png 2x" src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png" srcset="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/company/_color/airbnb-logo@2x.png 2x" width="112" height="35">
        </div>
        <div>
          <img style="" alt="Uber" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png" data-srcset="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png 1x, https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/uber@2x.png 2x" src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png" srcset="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png 1x, https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/uber@2x.png 2x" width="75" height="35">
        </div>
        <div>
          <img style="" alt="NASA" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png" data-srcset="https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png 1x, https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa@2x.png 2x" src="https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png" srcset="https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png 1x, https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa@2x.png 2x" width="67" height="35">
        </div>
        <div>
          <img style="" alt="Target" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png" data-srcset="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo@2x.png 2x" src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png" srcset="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo@2x.png 2x" width="48" height="35">
        </div>
        <div>
          <img style="" alt="New York Times" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png" data-srcset="https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png 1x, https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-nyt.png 2x" src="https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png" srcset="https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png 1x, https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-nyt.png 2x" width="230" height="35"></div>
        <div>
          <img style="" alt="Etsy" loading="lazy" class="lazyload" data-src="https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png" data-srcset="https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png 1x, https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/etsy@2x.png 2x" src="https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png" srcset="https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png 1x, https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/etsy@2x.png 2x" width="74" height="35">
        </div>
      </div>
    </section>
    <section class="bg-[#F4EDE4] flex flex-col p-10">
      <div class="flex py-16">
        <div class="flex w-1/2">
          <video data-js-id="speed" title="Cómo utilizar la integración de Workday para archivar un informe de gastos en la aplicación de Slack de manera más rápida" role="img" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.es-ES.webm" type="video/webm"><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/speed.es-ES.mp4" type="video/mp4"></video>
        </div>
        <div class="flex w-1/2 p-10 flex-col">
          <p class="text-neutral-800 text-3xl font-md mt-10"> Agiliza el trabajo con todas tus herramientas en un mismo lugar</p>
          <p class="my-4 text-neutral-800 text-2xl font-normal mt-10"> Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack.
          </p>
          <a class="text-[#541554]">Más información sobre la plataforma de Slack</a>

        </div>
      </div>
      <div class="flex py-16">
        <div class="flex w-1/2 p-10 flex-col">
          <p class="text-neutral-800 text-3xl font-md mt-10">Selecciona cómo quieres trabajar</p>
          <p class="my-4 text-neutral-800 text-2xl font-normal mt-10"> Slack te otorga la flexibilidad para trabajar cuando, donde y como tú quieras. Puedes chatear, enviar clips de audio y vídeo o unirte a una junta para discutir asuntos en directo.
          </p>
          <a class="text-[#541554]">Más información sobre la plataforma de Slack</a>

        </div>
        <div class="flex w-1/2">
          <video data-js-id="flexibility" title="Un usuario está iniciando una junta y grabando un clip de vídeo en la aplicación de Slack" role="img" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.es-ES.webm" type="video/webm"><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility.es-ES.mp4" type="video/mp4"></video>
        </div>

      </div>
      <div class="flex py-16">
        <div class="flex w-1/2">
          <video title="Un equipo conectado hablando de trabajo en varios canales de la aplicación de Slack" role="img" data-js-id="connectedness" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.es-ES.webm" type="video/webm"><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.es-ES.mp4" type="video/mp4"></video>
        </div>
        <div class="flex w-1/2 p-10 flex-col">
          <p class="text-neutral-800 text-3xl font-md mt-10"> Reúne a tu equipo</p>
          <p class="my-4 text-neutral-800 text-2xl font-normal mt-10"> Los canales son el corazón de Slack. Son espacios organizados para todo el mundo que contienen todo lo necesario para trabajar. Los canales permiten conectarse entre departamentos, oficinas, zonas horarias e incluso con otras empresas.
          </p>
          <a href="e" class="text-[#541554]">Más información sobre la plataforma de Slack</a>

        </div>
      </div>
    </section>
    <section class="bg-[#fff] flex flex-col p-10 justify-center items-center text-center gap-10">
      <div class="text-5xl text-neutral-800 font-bold"><p>Equipos grandes y pequeños</p>  <p>confían en Slack</p></div>
      <div class="text-neutral-800 text-xl font-normal"><p>Slack se adapta de forma segura para garantizar la colaboración</p>  <p>en las empresas más importantes del mundo.</p></div>
      <div class="flex gap-4 w-2/3">
        <button class="w-1/2 bg-[#541554]  rounded-md text-white p-3 font-semibold">Conoce Slack para empresas</button>
      <button class="w-1/2  rounded-md text-[#541554] p-3 outline-[#541554] outline font-semibold">Hablar con el equipo de ventas</button>
      </div>
      <div class="flex">
        <div class="flex flex-col">
          <p class="text-3xl font-bold text-[#541554] "> 85%   </p>
          <p clas="text-xs">de usuarios afirma que Slack ha mejorado la comunicación*</p>
        </div>
        <div class="flex flex-col">
          <p class="text-3xl font-bold text-[#541554]">86% </p>
          <p clas="text-xs">creen que su capacidad para trabajar a distancia ha mejorado*</p>
        </div>
       <div class="flex flex-col">
          <p class="text-3xl font-bold text-[#541554]">88% </p>
          <p clas="text-xs">se sienten más conectados con sus equipos*</p>
        </div>
      </div>

    </section>
    <section class="bg-[#fff] flex flex-col
                    mx-auto max-w-5xl justify-center items-center
                    text-center gap-10 ">
      <div class="flex py-16 gap-10 flex-col md:flex-row">
        <div class="flex pr-10 md:p-0">
          <video data-js-id="speed" title="Cómo utilizar la integración de Workday para archivar un informe de gastos en la aplicación de Slack de manera más rápida" role="img" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.es-ES.webm" type="video/webm"><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/speed.es-ES.mp4" type="video/mp4"></video>
        </div>
        <div class="flex  p-10 flex-col">
          <p class="text-neutral-800 text-3xl font-md  font-bold"> Agiliza el trabajo con todas tus herramientas en un mismo lugar</p>
          <p class="my-4 text-neutral-800 text-lg font-normal mt-10"> Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack.
          </p>
          <a class="text-[#541554]">Más información sobre la plataforma de Slack</a>

        </div>
      </div>
    </section>
    <section class="mt-12 bg-[#F4EDE4] flex flex-col p-10 justify-center items-center text-center gap-10">
      <div class="text-2xl text-neutral-800 font-bold">
        <p>Equipos grandes y pequeñosconfían en Slack</p>
      </div>
      <div class="flex w-full gap-4">
        <div class="flex flex-col justify-start bg-white max-w-5xl w-full p-3">
          <img alt="Logotipo de Slack en un icono cuadrado" loading="lazy" role="presentation" class="lazyload" data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg" data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01@2x.jpg 2x" src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg" srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-01@2x.jpg 2x">
          <p>Funciones</p>
          <p>Echa un vistazo a todo lo que puede hacer la plataforma</p>
          <p>Examina las funciones</p>
        </div>
        <div class="flex flex-col justify-start bg-white max-w-5xl w-full p-3">
          <img alt="Cara sonriente dentro de un bocadillo" loading="lazy" role="presentation" class="lazyload" data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02.jpg" data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02@2x.jpg 2x" src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02.jpg" srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02@2x.jpg 2x">
          <p>e</p> </div>
        <div class="flex flex-col justify-start bg-white max-w-5xl w-full p-3">
          <img alt="Megáfono que representa a los equipos de marketing" loading="lazy" role="presentation" class="lazyload" data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg" data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03@2x.jpg 2x" src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg" srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03@2x.jpg 2x">
          <p>e</p> </div>
        <div class="flex flex-col justify-start bg-white max-w-5xl w-full p-3">
          <img alt="Dibujo de un cohete volando" loading="lazy" role="presentation" class="lazyload" data-src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg" data-srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04@2x.jpg 2x" src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg" srcset="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg 1x, https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04@2x.jpg 2x">
          <p>e</p> </div>
      </div>
    </section>
  </main>
  <footer class="footer bg-red-500"></footer>
</div>
    `;
    this.cssCodes[0]=`
@import url('https://fonts.googleapis.com/css?family=NombreDeLaFuente');
body {
  font-family: 'NombreDeLaFuente', sans-serif;
/*   font-weight:800; */
}

.nav {
  padding: 0;
  height: 80px;
  background-color: #541554;
  border-bottom: none;
  z-index: 1000;
  top: 0;
  position: absolute;
  width: 100%;
  justify-content: center;
  display:flex;
}

.nav .nav_content{

height: 100%;
/* max-width: 76.875rem; */
  padding-left: 20px;
  padding-right: 20px;
}
.nav *{
  color:white;
 text-decoration: none; /* no underline */
}
.nav .nav_content,
.nav .nav_left,
.nav .nav_right,
.nav .nav_list{
  display:flex ;
  flex-direction: row;
/*   justify-items: center; */
  align-items: center;
  flex: 1;
}
.nav .nav_logo{
  margin-right:30px;
}
.nav .nav_right{
      justify-content: flex-end;
}

.nav .nav_left{
/*   background:green; */
}
.nav .nav_right{
  gap:20px;
/*   background:blue; */
}
.nav .nav_logo{
/*   background:yellow; */
}
.nav .nav_list{
  gap:20px;
  text-decoration:none;
  list-style-type: none;/*   background:orange; */
 text-decoration: none; /* no underline */
}
.nav .nav_list a{
  gap:20px;
}

.button_outlined{
    border-radius: 4px;
   padding: .75rem 1rem;
  color: #fff;
  background-color: transparent!important;
}
.button{
    border-radius: 4px;
   padding: .75rem 1rem;
   color: #611f69;
   background-color: #fff;
}
button {
  all: unset;
}

.boarding {
/*   background-color: #541554; */
}
.boarding {
/*   width:100%;
  z-index: 1;
  position: absolute;
  width: 100%;
  overflow: hidden;
  padding-top: 140px; */
}
`;
    this.jsCodes[0]=`
    console.log('test')`;
  }
  create() {
    this.router.navigate(
      ['/admin/blog/create'],
    );
  }
  goToCat(id: number, catname: string) {
    const state = { id };
    console.log(state)
    const route = ['/blog/posts', catname];
    this.router.navigate(route, { state });
  }
  goToPost(id: number, post: any) {
    const state = { id };
    console.log(state)
    const route = ['/blog/posts/'+post.category.name, post.name];
    this.router.navigate(route, { state });
  }
  delete(id:number) {
    this.postService.delete(id)
      .subscribe({
        next: (res:any) => {
          this.toastr.info(res.message);
          this.submitted = false;
          this.paginated(this.posts.current_page)
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  getCategorysPaginated(page:any){
    console.log('getCategorysPaginated')
    console.log(page)

    this.postService.paginated(page)
      .subscribe({
        next: res => {
          console.log(res)
          this.posts= res.data;
          this.posts.current_page =res.data.current_page+'';

        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  paginated(pr:any) {
    this.posts.current_page=this.sharedService.paginated(pr, this.posts);
    this.getCategorysPaginated(this.posts.current_page)
  }
}
