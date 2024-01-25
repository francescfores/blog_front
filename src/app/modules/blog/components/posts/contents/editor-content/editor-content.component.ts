import { Component } from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {Post} from "../../../../models/post";
import {PostCategory} from "../../../../models/post-category";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../../services/api/post.service";
import {CategoryService} from "../../../../services/api/post-category.service";
import {SharedService} from "../../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {AuthenticationAdminService} from "../../../../../../services/api/authentication-admin.service";
import {first} from "rxjs/operators";
import {PostContentService} from "../../../../services/api/post-content.service";
import {PostContent} from "../../../../models/post-content";

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.css']
})
export class EditorContentComponent {

  form!: FormGroup;
  public post!: Post;
  submit!: boolean;
  public loading=false;
  selectedImages: File[] = [];
  categories!: PostCategory[];
  private category: any;
  private user: any;
  id: any;
  queryObj:any;
  updateContent: any | undefined;
  paintContent: any;


  constructor(
    private router: Router,
    private PostContentService: PostContentService,
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
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  getParams(){
    this.id = history.state.id;
    this.getContent(null);
    this.getCategories();
  }

  ngOnInit(): void {
    this.user=this.authAdminService.currentUserValue
    //this.getParams();
  }

  getContent(id:any){
    this.PostContentService.get(id)
      .pipe(first())
      .subscribe(
        data => {
          this.updateContent = data.data;
          this.paintContent = data.data;
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
  selectCategory($event: any) {
    this.category = this.categories.find(x=> x.id===Number($event.target.value));
    this.form.value.post.category = this.category.id;
  }
  showContentEv(content:any) {
    this.paintContent=content;
    this.updateContent=content;
  }

  createContentEv(content:any) {
    this.getContent(content);
  }

  updateContentEv(content:any) {
    this.getContent(this.paintContent.id);
  }

  paintContentEv(content:any) {
    this.updateContent=content;

  }

   readonly PostContent = PostContent;

  onDragStart(event: DragEvent) {
    if (event && event.dataTransfer) {
      const data = event.dataTransfer.getData('text/plain');
      console.log('Elemento arrastrado con datos:', data);
    }  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event && event.dataTransfer) {
      const data = event.dataTransfer.getData('text/plain');
      console.log('Elemento arrastrado con datos:', data);
    }
  }
}
