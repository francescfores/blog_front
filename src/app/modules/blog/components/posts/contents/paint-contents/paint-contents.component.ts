import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from '../../../../../../../environments/environment';

@Component({
  selector: 'app-paint-contents',
  template: `
    <div (click)="onClick(content)" [class]="getAtt(content, 'styles')+' border-2 border-red-200/10'">
      <ng-container *ngIf="content?.type?.name==='codeplayground_v2'" class="w-full">
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
      <ng-container *ngIf="content?.type?.name==='text'">
          {{getAtt(content, 'text_label')}}
      </ng-container>
      <ng-container *ngFor="let subcontent of content.subcontents">
        <app-paint-contents [content]="subcontent" (selectContent)="onClick($event)" (click)="$event.stopPropagation()"></app-paint-contents>
      </ng-container>
    </div>
  `,
})
export class PaintContentsComponent {
  environment =environment;

  @Input() content: any;
  @Output() selectContent = new EventEmitter<number>();

  @Input() emitClick = true;
  clicked = false;

  onClick(content: any) {
    setTimeout(() => {
      this.selectContent.emit(content);
      console.log('Se hizo clic en el componente:', content);
    });
  }
  // onClick(content:any) {
  //   this.selectContent.emit(content);
  // }
  getAtt2(content: any, att: string): any {
    let attribute;
    if(content?.attributes!==undefined){
      // console.log(content?.attributes)
      attribute =
        content.attributes.find((x: any) => x.name === att)!==undefined?
        content.attributes.find((x: any) => x.name === att):
        content.type.attributes.find((x: any) => x.name === att);
    }else if(content?.type!==undefined){
      // console.log(content.type)
      attribute =
        content.type.attributes.find((x: any) => x.name === att);
    }

    return attribute ? attribute.value : null;
  }
  getAtt(content: any, att: string): any {
    let attribute;

    if (content?.attributes !== undefined) {
      // Si el objeto 'content' tiene la propiedad 'attributes'
      attribute = content.attributes.find((x: any) => x.name === att);
    }

    if (attribute === undefined || attribute.value === null || attribute.value === 'null' ) {
      // Si el atributo no se encuentra en 'content.attributes' y 'content.type.attributes' existe
      attribute = content.type.attributes.find((x: any) => x.name === att);
    }

    return attribute ? attribute.value : null;
  }


}
