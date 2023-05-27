import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.css']
})
export class CssEditorComponent {
  @Input() cssCodes:string='';

}
