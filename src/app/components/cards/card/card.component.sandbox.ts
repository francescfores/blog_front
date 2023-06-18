import { sandboxOf } from 'angular-playground';
import { CardComponent } from './card.component';

export default sandboxOf(CardComponent)
  .add('default', {
    template: `<app-card [bg_color]="'#000'">asasdsdssssssssssssssssssssssssas</app-card>`
});
