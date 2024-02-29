import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post";
import {PostCategory} from "../../models/post-category";
import {Router} from "@angular/router";
import {PostService} from "../../services/api/post.service";
import {CategoryService} from "../../services/api/post-category.service";
import {SharedService} from "../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {ThemeService} from "../../../../services/theme/theme.service";
import {first} from "rxjs/operators";
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
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
  private category: Post;
  selectedFile: any;
  loading=false;


  categories!: PostCategory[];
  isDarkEnable = false;
  sidebarOpen= false;
  //
  // visibleElements: HTMLElement[] = [];
  // private eventManager: any; // Declarar el tipo adecuado para el objeto eventManager
  // //
  // private ns: string = "http://www.w3.org/2000/svg";
  // private d: string = "M0,0 Q5,-5 10,0 5,5 0,0z";
  // private stems!: HTMLCollectionOf<HTMLElement>;
  // private leaves!: HTMLCollectionOf<HTMLElement>;
  // private svg!: HTMLElement;
  // private leafCount: number = 30;
  // private plants: number = 10;
  // private centerX: number = 275;
  // private offsetX: number = 175;
  //
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
    this.category = new Post();
    //

    //
  }

  animations: { element: HTMLElement, animationClasses: string[] }[] = [];
  animationClasses: string[][] = [
    ['-translate-x-full', 'opacity-0'],
    ['translate-x-full', 'opacity-0'],
    ['-translate-x-full', 'opacity-0'],
    ['translate-x-full','opacity-0'],
    ['-translate-x-full','opacity-0'],
    ['translate-x-full','opacity-0'],
    ['-translate-x-full','opacity-0']
  ];
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const windowCenter = window.innerHeight / 1.6;

    for (const animation of this.animations) {
      const elementRect = animation.element.getBoundingClientRect();

      if (elementRect.top  <= windowCenter && elementRect.bottom + 400  >= windowCenter) {
        animation.element.classList.remove(...animation.animationClasses);
      } else {
        animation.element.classList.add(...animation.animationClasses);
      }
    }
  }
  ngAfterViewInit() {
    let sliderContainer = document.getElementById('sliderContainer') as HTMLElement;
    const sliderItems = sliderContainer.getElementsByClassName('slider-item') as HTMLCollectionOf<HTMLElement>;

    // Agregar evento de scroll suave a cada elemento del slider
    Array.from(sliderItems).forEach((item) => {
      item.addEventListener('click', () => {
        const itemOffsetLeft = item.offsetLeft;
        const containerScrollLeft = sliderContainer.scrollLeft;
        const containerWidth = sliderContainer.offsetWidth;

        const scrollLeft = itemOffsetLeft - (containerWidth - item.offsetWidth) / 2;
        const scrollDuration = 500; // Duración del desplazamiento en milisegundos

        this.smoothScrollTo(sliderContainer, scrollLeft, scrollDuration);
      });
    });

    let currentIndex = 0;
    const scrollDuration = 5000; // Duración del desplazamiento automático en milisegundos

    // Función para realizar el desplazamiento automático
    // const autoScroll = () => {
    //   const containerWidth = sliderContainer.offsetWidth;
    //   const itemWidth = sliderItems[currentIndex].offsetWidth;
    //
    //   const scrollLeft = sliderItems[currentIndex].offsetLeft - (containerWidth - itemWidth) / 2;
    //
    //   this.smoothScrollTo(sliderContainer, scrollLeft, scrollDuration);
    //
    //   currentIndex = (currentIndex + 1) % sliderItems.length;
    // };

    // Iniciar el desplazamiento automático
    // let interval = setInterval(autoScroll, scrollDuration);

    // Detener el desplazamiento automático al hacer hover en el slider
    // sliderContainer.addEventListener('mouseenter', () => {
    //   clearInterval(interval);
    // });
    //
    // // Reanudar el desplazamiento automático al salir del hover en el slider
    // sliderContainer.addEventListener('mouseleave', () => {
    //   interval = setInterval(autoScroll, scrollDuration);
    // });
  }

  // Función para realizar el desplazamiento suave
  smoothScrollTo(element: HTMLElement, scrollLeft: number, duration: number) {
    const start = element.scrollLeft;
    const change = scrollLeft - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const newScrollLeft = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = newScrollLeft;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    const easeInOutQuad = (t:number, b:number, c:number, d:number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    animateScroll();
  }

  ngOnInit() {
    const elements = Array.from(document.getElementsByClassName('on_view'));

    for (let i = 0; i < elements.length; i++) {
      let animationClasses = this.animationClasses[i % this.animationClasses.length];
      this.animations.push({ element: elements[i] as HTMLElement, animationClasses });
    }
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    this.getCategorysPaginated(1);

    this.postCategoryService.getAll()
      .pipe(first())
      .subscribe(
        res => {
          console.log(res)
          this.categories = res.data.category;
        },
        error => {
        });

    //generate plants
  }

  //
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


