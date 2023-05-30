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
import {DynamicStyleService} from "../../../../../services/dinamicStyle.service";
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';


@Component({
  selector: 'app-buttons3d',
  templateUrl: './buttons3d.component.html',
  styleUrls: ['./buttons3d.component.css']
})
export class Buttons3dComponent implements OnInit{
  loading1:boolean=false;
  loading2=false;


constructor(private dynamicStyleService: DynamicStyleService) {
    //codereview
    // this.refreshData();
    // this.generateHTML(0);
    // this.generateHTML(1);
    // this.generateHTML(2);
    // this.loading1=false;
}
  ngOnInit() {
  }
  load1(){
    this.loading1=true;
    setTimeout(() => {
      this.loading1=false;
    }, 3000)
  }
  load2(){
    this.loading2=true;
    setTimeout(() => {
      this.loading2=false;
    }, 4000)
  }
}
