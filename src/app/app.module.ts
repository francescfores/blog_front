import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/api/authentication.service";
import {GoogleInitOptions, GoogleLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthenticationAdminService} from "./services/api/authentication-admin.service";
import {SharedService} from "./services/shared.service";
import {BreadcrumbService} from "./components/breadcrumbs/breadcrumService";
// import {ClientService} from "./services/api/client.service";

const googleLoginOptions: GoogleInitOptions = { oneTapEnabled: false}// default is true };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true
    }),
  ],
  providers: [
    AuthenticationService,
    SharedService,
    AuthenticationAdminService,
    BreadcrumbService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '124147147180-roi438596d3n7af2o66bpj2oospc68fl.apps.googleusercontent.com',
              googleLoginOptions ),
          }
        ],
        onError: (err:any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

