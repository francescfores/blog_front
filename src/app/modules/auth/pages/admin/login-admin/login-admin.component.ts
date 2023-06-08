import {AfterViewInit, Component, EventEmitter, OnInit, Output, Renderer2} from "@angular/core";
import {first} from "rxjs/operators";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../../services/api/authentication.service";
import {ToastrService} from "ngx-toastr";
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import {of} from "rxjs";
import {AuthenticationAdminService} from "../../../../../services/api/authentication-admin.service";
import {ThemeService} from "../../../../../services/theme/theme.service";

@Component({
  selector: "app-login-admin",
  templateUrl: "./login-admin.component.html",
})


export class LoginAdminComponent implements OnInit, AfterViewInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  public loginForm!: UntypedFormGroup;
  loading = false;
  submited = false;
  public isDarkEnable= false;

  constructor(
    private router: Router,
    private authenticationAdminService: AuthenticationAdminService,
    private toastr: ToastrService,
    private themeService: ThemeService
  ) {
  }
  ngAfterViewInit():void{
    if (this.authenticationAdminService.currentUserValue) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('superadmin@gmail.com', Validators.required),
      password: new UntypedFormControl('123456', Validators.required)
    });
  }

  get f() { return this.loginForm.controls; }
  logIn() {
    this.submited = true;
    if (this.loginForm.valid) {
      console.log('data');
      this.loading = true;
      // this.authenticationAdminService.loginUser('superadmin@gmail.com', '123456')
      this.authenticationAdminService.loginUser(this.f['email'].value, this.f['password'].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this.loading = false;
            this.router.navigate(['/admin/dashboard']);
          },
          error => {
            console.log('eeeeeeeerr')
            this.loading = false;
            this.toastr.error('Invalid username or password');
          });
    } else {
      console.log('eeeeeeeerr')
      this.loading=false;
      this.toastr.error('Email and password are required!');
    }
  }

  register() {

  }
}
