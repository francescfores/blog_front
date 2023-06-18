import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-paint-contents',
  template: `
    <!-- grid|card|etc -->
    <div (click)="onClick(content)" [class]="getAtt(content, 'styles')+' border border-red-200'">
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
  getAtt(content: any, att: string): any {
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


}
