import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import 'codemirror/lib/codemirror';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/markdown/markdown';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/css/css';

import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
