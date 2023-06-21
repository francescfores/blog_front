import {Component, Input, ViewChild} from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {Post} from "../../../../models/post";
import {PostContent} from "../../../../models/post-content";
import {PostCategory} from "../../../../models/post-category";
import {Router} from "@angular/router";
import {PostService} from "../../../../services/api/post.service";
import {CategoryService} from "../../../../services/api/post-category.service";
import {SharedService} from "../../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {AuthenticationAdminService} from "../../../../../../services/api/authentication-admin.service";
import {first} from "rxjs/operators";
import {PostContentService} from "../../../../services/api/post-content.service";
import {ShowContentComponent} from "../show-content/show-content.component";
import {PostContentType} from "../../../../models/post-content-type";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  form!: FormGroup;
  public post!: Post;
  public postContent!: PostContent;
  @Input() post_id:any;
  submit!: boolean;
  loading=false;
  selectedImages: File[] = [];
  types!: PostContentType[];
  private type: any;
  private user: any;
  @ViewChild(ShowContentComponent) showContentComponent!: ShowContentComponent;

  constructor(
    private router: Router,
    private postContentService: PostContentService,
    private categoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private authAdminService: AuthenticationAdminService
  ){
    this.post = new Post();
    this.postContent = new PostContent();
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
      postContent : this.formBuilder.group({
        num: ['num', Validators.required],
        name: ['name', Validators.required],
        desc: ['desc', Validators.required],
        img: ['img', Validators.required],
        type: ['']
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
    this.getTypes();
  }
  getTypes(){
  this.postContentService.getAllTypes()
    .pipe(first())
    .subscribe(
      res => {
        this.types = res.data;
        console.log(this.types);
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
        this.postContent.num = formData.postContent.num;
        this.postContent.name = formData.postContent.name;
        this.postContent.desc = formData.postContent.desc;
        this.postContent.type = formData.postContent.type;
        this.postContent.post = this.post_id;
        console.log(this.postContent)

        const formData2 = new FormData();
        for (let image of this.selectedImages) {
          formData2.append('images[]', image);
          console.log('image')
          console.log(image)
        }
        console.log(this.selectedImages)
        this.postContent.img = this.selectedImages;
        setTimeout(() => {

          this.postContentService.create(this.postContent)
            .subscribe({
              next: res => {
                this.toastr.info(res.message);
                this.loading=false;
                const event = new Event('load');
                document.dispatchEvent(event);
              },
              error: (err: any) => {
                this.loading=false;
                this.toastr.error(err);
              },
              complete: () => { }
            });
        }, 200)

      } else {
        this.loading=false;
        this.toastr.error('Form invalid!');
      }
    }
  }

  selectType() {
    console.log('eeeeeeeee')
    console.log(this.postContent.type)
    let type = this.types.find(x=>x.id==this.form.value.postContent.type)
    console.log(type)
    // loadAttributes()
  }
  loadAttributes()
  {

  }
}
