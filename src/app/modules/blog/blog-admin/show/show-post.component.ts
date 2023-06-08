import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {Router} from "@angular/router";
import {PostService} from "../../services/api/post.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent {
  categories:any;
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

  constructor(
    private router: Router,
    private categoryService: PostService,
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
    this.getCategorysPaginated(1);
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
    this.categoryService.delete(id)
      .subscribe({
        next: (res:any) => {
          this.toastr.info(res.message);
          this.submitted = false;
          this.paginatedCategories(this.categories.current_page)
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  getCategorysPaginated(page:any){
    this.categoryService.paginated(page)
      .subscribe({
        next: res => {
          console.log(res)
          this.categories= res.data;
          this.categories.current_page =res.data.current_page+'';
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  paginatedCategories(pr:any) {
    this.categories.current_page=this.sharedService.paginated(pr, this.categories);
    this.getCategorysPaginated(pr)
  }

  createCategory() {
    this.submitted = true;
    if (this.formCategory.valid){
      this.loading = true;
      this.category.name = this.fc['name'].value;
      this.category.desc = this.fc['desc'].value;
      this.category.img = this.selectedFile;

      this.categoryService.create(this.category)
        .subscribe({
          next: res => {
            this.toastr.info(res.message);
            this.submitted = false;
            this.loading = false;
            this.paginatedCategories(this.categories.current_page)
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
