import {Component, Input} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Post} from "../../../../models/post";
import {Router} from "@angular/router";
import {PostService} from "../../../../services/api/post.service";
import {SharedService} from "../../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {PostContent} from "../../../../models/post-content";
import {PostContentService} from "../../../../services/api/post-content.service";

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent {
  posts:any;
  private category_id: any;
  private subcategory_id: any;
  create_category = false;
  public formCategory: UntypedFormGroup;
  submitted = false;

  //alert
  text: any;
  color: any;
  show=false;
  autocloseTime=2000;
  private category: Post;
  selectedFile: any;
  loading=false;
  @Input() post_id:any;

  constructor(
    private router: Router,
    private postService: PostContentService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService
  ) {
    this.formCategory = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required],
    });
    this.category = new Post();
  }

  get fc() {
    return this.formCategory.controls;
  }

  ngOnInit() {
    this.paginatedByPost(1);
    document.addEventListener('load', () => {
      this.paginatedByPost(this.posts.current_page);
    });
  }
  create() {
    this.router.navigate(
      ['/admin/blog/create'],
    );
  }
  edit(id:number) {
    this.router.navigate(
      ['/admin/blog/update'],
      { queryParams: { id } }
    );
  }
  delete(id:number) {
    this.postService.delete(id)
      .subscribe({
        next: (res:any) => {
          this.toastr.info(res.message);
          this.submitted = false;
          this.paginated(this.posts.current_page)
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  paginatedByPost(page:any){
    this.postService.paginatedByPost(page, this.post_id)
      .subscribe({
        next: res => {
          this.posts= res.data;
          this.posts.current_page =res.data.current_page+'';
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  paginated(pr:any) {
    this.posts.current_page=this.sharedService.paginated(pr, this.posts);
    this.paginatedByPost(this.posts.current_page)
  }

  createCategory() {
    this.submitted = true;
    if (this.formCategory.valid){
      this.loading = true;
      this.category.name = this.fc['name'].value;
      this.category.desc = this.fc['desc'].value;
      this.category.img = this.selectedFile;

      this.postService.create(this.category)
        .subscribe({
          next: res => {
            this.toastr.info(res.message);
            this.submitted = false;
            this.loading = false;
            this.paginated(this.posts.current_page)
          },
          error: (err: any) => {
            this.loading = false;
          },
          complete: () => { }
        });
    } else {
      this.loading = false;
      this.toastr.info('Invalid form');
    }
  }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }
}
