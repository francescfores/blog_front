import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ThemeService} from "../../../../../services/theme/theme.service";
// import {SidebarService} from "./components/sidebar/services/sidebar.service";

@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})
export class LandingPage2Component implements OnInit , AfterViewInit{
  isDarkEnable = false;
  sidebarOpen= false;
  scrolling_horizontal=true

  constructor(
    public themeService: ThemeService,
    // public sidebarService: SidebarService
) {}
  ngAfterViewInit() {
    const scrollContainers = document.querySelectorAll('.scroll-container') as NodeListOf<HTMLElement>;

    scrollContainers.forEach((scrollContainer) => {
      scrollContainer.addEventListener('wheel', this.onWheel.bind(this));
    });
  }
  private isInside = false;


  onMouseEnter() {
    this.isInside = true;
    console.log('onMouseEnter')
  }

  onMouseLeave() {
    this.isInside = false;
  }
  private onWheel(event: WheelEvent) {
    const scrollContainer = event.currentTarget as HTMLElement;
    if (!scrollContainer)  return;


    const scrollAmount = event.deltaY; // Ajusta la sensibilidad del scroll
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Si hay espacio para scroll horizontal
    if (scrollAmount !== 0 && this.isInside) {
      event.preventDefault();
      if (scrollLeft + scrollAmount >= maxScrollLeft) {
        scrollContainer.scrollLeft = maxScrollLeft;
        this.isInside=false;
        console.log('scrollContainer.scrollLeft = maxScrollLeft')
      } else if (scrollLeft + scrollAmount <= 0) {
        scrollContainer.scrollLeft = 0;
        this.isInside=false;
        console.log('scrollContainer.scrollLeft = 0;')
      } else {
        scrollContainer.scrollLeft += scrollAmount;
        console.log('scrollContainer.scrollLeft += scrollAmount')
        this.isInside=true;
      }
      console.log(this.scrolling_horizontal)

    }else {
    }
  }

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    // this.sidebarService.getSidebarState().subscribe(sidebarOpen => {
    //   this.sidebarOpen = sidebarOpen;
    // });

  }
  // Función para detectar el scroll y determinar la dirección

// Evento de desplazamiento

}
