import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from '../../../../../../../environments/environment';
import {PostContent} from "../../../../models/post-content";

@Component({
  selector: 'app-paint-contents',
  template: `
    <div class="flex w-full h-10 bg-bgPrim items-center">
      <i (click)="showTree=!showTree"  class="ml-auto fa fa-book p-2" aria-hidden="true"></i>
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
              {{subcomponent?.name}} - id:{{subcomponent.id}}
              <!-- Puedes agregar aquí el contenido específico para los subcomponentes -->
              <div class="border-dashed border-l-2 border-red-400 m-4">
                <ng-container *ngIf="subcomponent.subcomponents && content.subcomponents.length > 0">
                  <ng-container *ngFor="let subSubcomponent of subcomponent.subcomponents">
                    <ng-container *ngTemplateOutlet="recursiveContent2; context: { $implicit: normalizarSubcomponente(subSubcomponent) }" ></ng-container>
                  </ng-container>
                </ng-container>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
    <div  (click)="onClick(content)"  [ngClass]="getAtt(content, 'styles') + ' border-4 border-gray-400/50'">
      <ng-container *ngIf="content?.type?.name==='codeplayground_v2'; ">
        <app-codeplayground_V2 class="flex w-full my-5"
                               [id]="0"
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
        {{getAtt(content, 'text_label')}}
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
               alt="image" class="{{getAtt(content, 'style')}}"/>
        </ng-container>
      </ng-container>

      <ng-container *ngFor="let subcomponent of content.subcomponents">
        <ng-container *ngTemplateOutlet="recursiveContent; context: { $implicit: normalizarSubcomponente(subcomponent) }"></ng-container>
      </ng-container>

      <ng-template #recursiveContent let-subcomponent>
        <div (click)="onClick(subcomponent)" (click)="$event.stopPropagation()" [ngClass]="getAtt(subcomponent, 'styles') + ' hover:border border-gray-400/50 box-content'">
          <ng-container *ngIf="subcomponent?.type?.name==='codeplayground_v2'; ">
            <app-codeplayground_V2 class="flex w-full my-5"
                                   [id]="0"
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
              {{getAtt(subcomponent, 'text_label')}}
            </ng-container>
          <ng-container *ngIf="subcomponent?.type?.name==='img';">
          <ng-container *ngIf="getAtt(subcomponent, 'url')==null">
            <img  [src]="'./assets/img/logo/thunder_logo_dark.png'"  alt="">
          </ng-container>
            <ng-container *ngIf="getAtt(subcomponent, 'url')!=null">
              <img [src]="environment.apiUrl+'storage/blog/components/'+getAtt(subcomponent, 'url')"
                   alt="image" class="{{getAtt(subcomponent, 'style')}}"/>
            </ng-container>
          </ng-container>
          <!-- Puedes agregar aquí el contenido específico para los subcomponentes -->
          <ng-container *ngIf="subcomponent.subcomponents && subcomponent.subcomponents.length > 0">
            <ng-container *ngFor="let subSubcomponent of subcomponent.subcomponents">
              <ng-container *ngTemplateOutlet="recursiveContent; context: { $implicit: normalizarSubcomponente(subSubcomponent) }" ></ng-container>
            </ng-container>
          </ng-container>
        </div>
      </ng-template>
    </div>


  `,
})
export class PaintContentsComponent {
  environment =environment;

  @Input() content: any;
  subcomponent: any;
  @Output() selectContent = new EventEmitter<number>();

  @Input() emitClick = true;
  clicked = false;
   showTree=false;

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
      subcomponent_attributes: subcomponente.subcomponent_attributes,
      subcomponents: subcomponente.subcomponents,
      attributes: subcomponente.component.attributes,
      type: subcomponente.component.type,
    };
  }

}
