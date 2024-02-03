import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {environment} from '../../../../../../../environments/environment';
import {PostContent} from "../../../../models/post-content";
import {CdkDrag, CdkDragMove, CdkDropList, CdkDropListGroup, moveItemInArray} from "@angular/cdk/drag-drop";
import {ViewportRuler} from "@angular/cdk/overlay";

@Component({
  selector: 'app-paint-contents',
  template: `
    <div *ngIf="showEditor" class="w-full top">
      <div class="flex w-full items-center bg-bgPrim content text-textPrimary">
        <i (click)="showTree=!showTree "  class="ml-auto fa fa-book p-2" aria-hidden="true"></i>
      </div>
      <div class="p-1 text-xs" *ngIf="showTree">
        <div class="m-2" (click)="onClick(content)">
          name:{{content?.name}} - id:{{content?.id}}
          <div class="border-dashed border-l-2 border-red-400 m-2">
            <ng-container *ngFor="let subcomponent of content?.subcomponents" >
              <ng-container *ngTemplateOutlet="recursiveContent2; context: { $implicit: normalizarSubcomponente(subcomponent) }"></ng-container>
            </ng-container>
            <ng-template #recursiveContent2 let-subcomponent>
              <div (click)="onClick(subcomponent)" (click)="$event.stopPropagation()" class="m-4 ">
                {{subcomponent?.name}} - id:{{subcomponent.id}} - order:{{subcomponent.order}}
                <!-- Puedes agregar aquí el contenido específico para los subcomponentes -->
                <div class="border-dashed border-l-2 border-red-400 m-4">
                  @if (subcomponent.subcomponents && content.subcomponents.length > 0){
                    <ng-container *ngFor="let subSubcomponent of subcomponent.subcomponents">
                      <ng-container *ngTemplateOutlet="recursiveContent2; context: { $implicit: normalizarSubcomponente(subSubcomponent) }" ></ng-container>
                    </ng-container>
                  }
                </div>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
    <div  (click)="onClick(content)"  [ngClass]="getAtt(content, 'styles') + ' '+ editing()">
      <ng-container *ngIf="content?.type?.name==='codeplayground_v2'; ">
        <app-codeplayground_V2 class="flex w-full my-5"
                               [id]="content.id"
                               [height]="getAtt(content, 'height')"
                               [bg_color_1]="getAtt(content, 'bg_color_1')"
                               [bg_color_2]="getAtt(content, 'bg_color_2')"
                               [text_color_1]="getAtt(content, 'text_color_1')"
                               [text_color_2]="getAtt(content, 'text_color_2')"
                               [rounded]="getAtt(content, 'rounded')"
                               [htmlCodes]="getAtt(content, 'html')"
                               [cssCodes]="getAtt(content, 'css')"
                               [jsCodes]="getAtt(content, 'js')"
        ></app-codeplayground_V2>
      </ng-container>
      <ng-container *ngIf="content?.type?.name==='text';">
        <p>{{getAtt(subcomponent, 'text_label')}}</p>
      </ng-container>
      <ng-container *ngIf="content?.type?.name==='icon';">
        <i [class]="getAtt(content, 'icon')+' '+ getAtt(content, 'style')"></i>
      </ng-container>
      <ng-container *ngIf="content?.type?.name==='img';">
        <ng-container *ngIf="getAtt(content, 'url')==null">
          <img  src="./assets/img/logo/thunder_logo_dark.png" >
        </ng-container>
        <ng-container *ngIf="getAtt(content, 'url')!=null">
          <img [src]="environment.apiUrl+'storage/blog/components/'+getAtt(content, 'url')"
               alt="image"/>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="content?.type?.name==='image3d';">
        <!--TODO change style.background-image-->
        <figure class="figure " [ngClass]="content?.type?.name + '-'+ content.id +' '+ setDynamicBackground(content)">
          <img [src]="environment.apiUrl+'storage/blog/components/'+getAtt(content, 'img_url')"
               alt="image" class="amt_2"/>
          <!--<figcaption class="p-4">Rhino</figcaption>-->
        </figure>
      </ng-container>
      <ng-container *ngIf="content?.type?.name==='button';">
        @if (getAtt(content, 'url')!==null){
          <a href="{{getAtt(content, 'url')}}" target="_blank">
            <app-button3d
              [ngClass]="getAtt(content, 'styles_button') + '  '+ editing()"
              [title]="getAtt(content, 'label')"
              [type]="'btn_primary'"
              [width]="'100%'"
              [loading_type]="'waves'" [loading]="false" >
            </app-button3d>
          </a>
        } @else {
          <app-button3d
            [ngClass]="getAtt(content, 'styles_button') + '  '+ editing()"
            [title]="getAtt(content, 'label')"
            [type]="'btn_primary'"
            [width]="'100%'"
            [loading_type]="'waves'" [loading]="false" >
          </app-button3d>
        }
      </ng-container>

      <ng-container *ngFor="let subcomponent of content.subcomponents">
        <ng-container *ngTemplateOutlet="recursiveContent; context: { $implicit: normalizarSubcomponente(subcomponent) }"></ng-container>
      </ng-container>
      <ng-template #recursiveContent let-subcomponent>
        <div (click)="onClick(subcomponent)" (click)="$event.stopPropagation()" [ngClass]="getAtt(subcomponent, 'styles') + ' '+ editing()">
          <ng-container *ngIf="subcomponent?.type?.name==='codeplayground_v2'; ">
            <app-codeplayground_V2 class="flex w-full my-5"
                                   [id]="subcomponent.subcomponent_id"
                                   [height]="getAtt(subcomponent, 'height')"
                                   [bg_color_1]="getAtt(subcomponent, 'bg_color_1')"
                                   [bg_color_2]="getAtt(subcomponent, 'bg_color_2')"
                                   [text_color_1]="getAtt(subcomponent, 'text_color_1')"
                                   [text_color_2]="getAtt(subcomponent, 'text_color_2')"
                                   [rounded]="getAtt(subcomponent, 'rounded')"
                                   [htmlCodes]="getAtt(subcomponent, 'html')"
                                   [cssCodes]="getAtt(subcomponent, 'css')"
                                   [jsCodes]="getAtt(subcomponent, 'js')"
            ></app-codeplayground_V2>
          </ng-container>
          <ng-container *ngIf="subcomponent?.type?.name==='text';">
              <p>{{getAtt(subcomponent, 'text_label')}}</p>
            </ng-container>
          <ng-container *ngIf="content?.type?.name==='icon';">
            <i [class]="getAtt(content, 'icon')+' '+ getAtt(content, 'style')"></i>
          </ng-container>
          <ng-container *ngIf="subcomponent?.type?.name==='img';">
            <ng-container>
              <img [src]="environment.apiUrl+'storage/blog/components/'+getAtt(subcomponent, 'url')"
                   alt="image" />
            </ng-container>
          </ng-container>
          <ng-container *ngIf="subcomponent?.type?.name==='image3d';">
            <!--TODO change style.background-image-->
            <figure class="figure " [ngClass]="subcomponent?.type?.name + '-'+ subcomponent.id +' '+ setDynamicBackground(subcomponent)">
            <img [src]="environment.apiUrl+'storage/blog/components/'+getAtt(subcomponent, 'img_url')"
                   alt="image" class="amt_2"/>
              <!--<figcaption class="p-4">Rhino</figcaption>-->
            </figure>
          </ng-container>
          <ng-container *ngIf="subcomponent?.type?.name==='button';">
            @if (getAtt(subcomponent, 'url')!==null){
              <a href="{{getAtt(subcomponent, 'url')}}" target="_blank">
                <app-button3d
                  [ngClass]="getAtt(subcomponent, 'styles_button') + '  '+ editing()"
                  [title]="getAtt(subcomponent, 'label')"
                  [type]="'btn_primary'"
                  [width]="'100%'"
                  [loading_type]="'waves'" [loading]="false" >
                </app-button3d>
              </a>
            } @else {
              <app-button3d
                [ngClass]="getAtt(subcomponent, 'styles_button') + '  '+ editing()"
                [title]="getAtt(subcomponent, 'label')"
                [type]="'btn_primary'"
                [width]="'100%'"
                [loading_type]="'waves'" [loading]="false" >
              </app-button3d>
            }
          </ng-container>

          <ng-container *ngIf="subcomponent.subcomponents && subcomponent.subcomponents.length > 0">
            <ng-container *ngFor="let subSubcomponent of subcomponent.subcomponents">
              <ng-container *ngTemplateOutlet="recursiveContent; context: { $implicit: normalizarSubcomponente(subSubcomponent) }" ></ng-container>
            </ng-container>
          </ng-container>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./paint-contents.component.css']
})
export class PaintContentsComponent {
  environment =environment;
  setDynamicBackground(component:any) {
    const figureElement = document.querySelector('.'+component.name+'-'+component.id) as HTMLElement;
    if (figureElement) {
      figureElement?.style.setProperty('--color', 'url('+ environment.apiUrl+'storage/blog/components/'+this.getAtt(component, 'img_bg_url') +') top/cover')
    }
    return '';
  }
  @Input() content: any;
  subcomponent: any;
  @Output() selectContent = new EventEmitter<number>();

  @Input() emitClick = true;
  clicked = false;
  showTree=false;
  @Input() showEditor=false;

  onClick(content: any) {
    this.selectContent.emit(content);
    this.showTree=false;
  }

  onClick2(content: any) {
    this.selectContent.emit(content);
    this.showTree=false;
  }
  // onClick(content:any) {
  //   this.selectContent.emit(content);
  // }
  getAtt(content: any, att: string): any {
    let attribute;
    if (content?.subcomponent_attributes?.length>0) {
      attribute = content.subcomponent_attributes.find((x: any) => x.name === att);
      if(attribute?.value===undefined){
        attribute = content.attributes.find((x: any) => x.name === att);
      }
    }
    else{
      attribute = content.attributes.find((x: any) => x.name === att);
    }
    return attribute ? attribute.value : null;
  }

  //refactor
  normalizarSubcomponente(subcomponente: any): any {

    return {
      id: subcomponente.component.id,
      subcomponent_id: subcomponente.id,
      name: subcomponente.component.name,
      desc: subcomponente.component.desc,
      order: subcomponente.order,
      subcomponent_attributes: subcomponente.subcomponent_attributes,
      subcomponents: subcomponente.subcomponents,
      attributes: subcomponente.component.attributes,
      type: subcomponente.component.type,
    };
  }

  editing() {
    return this.showEditor?'hover:border-2 border-red-400/50 ':'';
  }
}

