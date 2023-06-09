import { Component } from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {Post} from "../../models/post";
import {PostCategory} from "../../models/post-category";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../../services/api/post.service";
import {CategoryService} from "../../services/api/post-category.service";
import {SharedService} from "../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {AuthenticationAdminService} from "../../../../services/api/authentication-admin.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent {
  form!: FormGroup;
  public post!: Post;
  submit!: boolean;
  public loading=false;
  selectedImages: File[] = [];
  categories!: PostCategory[];
  private category: any;
  private user: any;
  private id: any;
  queryObj:any;
  constructor(
    private router: Router,
    private productService: PostService,
    private categoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private authAdminService: AuthenticationAdminService,
    private route: ActivatedRoute,
  ){
    this.post = new Post();
  }
  uploadImages() {
    const formData = new FormData();
    for (let image of this.selectedImages) {
      formData.append('images[]', image);
    }
  }

  getParams(){
    this.route.queryParamMap
      .subscribe((params) => {
          this.queryObj = { ...params.keys, ...params };
          this.id =this.queryObj.params.id;
        console.log(this.id);
        this.getProduct();
        this.getCategories();
        }
      );
  }

  ngOnInit(): void {
    this.user=this.authAdminService.currentUserValue
    // this.form = this.formBuilder.group({
    //   post : this.formBuilder.group({
    //     name: ['', Validators.required],
    //     desc: ['', Validators.required],
    //     img: ['', Validators.required],
    //     category: ['', Validators.required]
    //   }),
    //   // 'identity' : this.formBuilder.group({
    //   //   'firstname' : ['', Validators.required],
    //   //   'lastname'  : ['', Validators.required],
    //   //   'address' : this.formBuilder.group({
    //   //     'street' : ['', Validators.required],
    //   //     'city'  : ['', Validators.required],
    //   //   })
    //   // })
    // });

    this.getParams();

  }

  getProduct(){
    this.productService.get(this.id)
      .pipe(first())
      .subscribe(
        data => {
          this.post = data.data;
          if (this.post) {
            //this.subcategories= this.category.subcategories;
            //init forms
            // this.form.value.post.name=this.post.name;
            // this.form.value.post.desc=this.post.desc;
            // this.form.value.post.category=this.post.category.id;
            this.form = this.formBuilder.group({
              post : this.formBuilder.group({
                name: [this.post.name, Validators.required],
                desc: [this.post.desc, Validators.required],
                // img: ['', Validators.required],
                category: [this.post.category && this.post.category.id ? this.post.category.id : null]
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
          }
        },
        error => {
        });
  }
  getCategories(){
    this.categoryService.getAll()
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
    this.form.value.post.img = event.target.files;

  }

  update() {
    this.submit = true;
    console.log(this.form.value);
    console.log(this.category);
    if(!this.loading) {
      this.loading = true;
      if (this.form.valid) {

        let formData = this.form.value;
        this.post.name = formData.post.name;
        this.post.desc = formData.post.desc;
        this.post.category = formData.post.category;
        // this.post.user = this.user.id;

        const formData2 = new FormData();
        for (let image of this.selectedImages) {
          formData2.append('images[]', image);
          console.log('image')
          console.log(image)
        }
        console.log(this.selectedImages)
        this.post.img = this.selectedImages;

        this.productService.update(this.post.id, this.post)
          .subscribe({
            next: res => {
              this.toastr.info(res.message);
              this.loading = false;
            },
            error: (err: any) => {
              this.loading = false;
              this.toastr.error(err);
            },
            complete: () => {
            }
          });
      } else {
        this.loading = false;
        this.toastr.error('Form invalid!');
      }
    }
  }

  selectCategory($event: any) {
    this.category = this.categories.find(x=> x.id===Number($event.target.value));
    this.form.value.post.category = this.category.id;
  }
}
