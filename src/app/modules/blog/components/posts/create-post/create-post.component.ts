import { Component } from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Post} from "../../../models/post";
import {PostService} from "../../../services/api/post.service";
import {SharedService} from "../../../../../services/shared.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../../services/api/post-category.service";
import {first} from "rxjs/operators";
import {PostCategory} from "../../../models/post-category";
import {AuthenticationService} from "../../../../../services/api/authentication.service";
import {AuthenticationAdminService} from "../../../../../services/api/authentication-admin.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  form!: FormGroup;
  public post!: Post;
  submit!: boolean;
  loading=false;
  selectedImages: File[] = [];
  categories!: PostCategory[];
  private category: any;
  private user: any;
  constructor(
    private router: Router,
    private userService: PostService,
    private postCategoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private authAdminService: AuthenticationAdminService
  ){
    this.post = new Post();

  }
  uploadImages() {
    const formData = new FormData();
    for (let image of this.selectedImages) {
      formData.append('images[]', image);
    }
  }
  ngOnInit(): void {
    this.user=this.authAdminService.currentUserValue

    this.form = this.formBuilder.group({
      post : this.formBuilder.group({
        name: ['name', Validators.required],
        subname: ['subname', Validators.required],
        desc: ['desc', Validators.required],
        img: ['img', Validators.required],
        category: [null]
      }),
      // 'identity' : this.formBuilder.group({
      //   'firstname' : ['', Validators.required],
      //   'lastname'  : ['', Validators.required],
      //   'address' : this.formBuilder.group({
      //     'street' : ['', Validators.required],
      //     'city'  : ['', Validators.required],
      //   })
      // })
    });
    this.postCategoryService.getAll()
      .pipe(first())
      .subscribe(
        res => {
          console.log(res)
          this.categories = res.data.category;
        },
        error => {
        });
  }

  onFileChange(event: any) {
    this.selectedImages = event.target.files;
  }

  create() {
    this.submit = true;

    if(!this.loading){
      this.loading=true;
      if (this.form.valid){
        let formData = this.form.value;
        this.post.name = formData.post.name;
        this.post.subname = formData.post.subname;
        this.post.desc = formData.post.desc;
        this.post.category = formData.post.category;
        this.post.user = this.user.id;

        const formData2 = new FormData();
        for (let image of this.selectedImages) {
          formData2.append('images[]', image);
          console.log('image')
          console.log(image)
        }
        console.log(this.selectedImages)
        this.post.img = this.selectedImages;
        setTimeout(() => {

          this.userService.create(this.post)
            .subscribe({
              next: res => {
                this.toastr.info(res.message);
                this.loading=false;
              },
              error: (err: any) => {
                this.loading=false;
                this.toastr.error(err);
              },
              complete: () => { }
            });
        }, 1000)

      } else {
        this.loading=false;
        this.toastr.error('Form invalid!');
      }
    }
  }

  selectCategory($event: any) {
    this.category = this.categories.find(x=> x.id===Number($event.target.value));
    this.form.value.post.category = this.category.id;
  }
}
