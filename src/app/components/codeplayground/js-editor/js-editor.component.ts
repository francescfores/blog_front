import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-js-editor',
  templateUrl: './js-editor.component.html',
  styleUrls: ['./js-editor.component.css']
})
export class JsEditorComponent {
  @Input() jsCodes:string='';

}
