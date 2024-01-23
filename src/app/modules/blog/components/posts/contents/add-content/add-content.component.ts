import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ComponentsModule} from "../../../../../../components/components.module";
import {FormGroup, FormsModule, UntypedFormBuilder, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Post} from "../../../../models/post";
import {PostContent} from "../../../../models/post-content";
import {PostContentType} from "../../../../models/post-content-type";
import {ShowContentComponent} from "../show-content/show-content.component";
import {Router} from "@angular/router";
import {PostContentService} from "../../../../services/api/post-content.service";
import {CategoryService} from "../../../../services/api/post-category.service";
import {SharedService} from "../../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {AuthenticationAdminService} from "../../../../../../services/api/authentication-admin.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrl: './add-content.component.css'
})
export class AddContentComponent {
  form!: FormGroup;
  public post!: Post;
  public postContent!: PostContent;
  @Input() post_id:any=null;
  @Input() postContent_id:any=null;
  @Input() postContents!: PostContent[];
  @Input() postContentsFiltered!: PostContent[];
  @Output() createContentEv = new EventEmitter<any>();

  submit!: boolean;
  loading=false;
  selectedImages: File[] = [];
  types!: PostContentType[];
  private type: any;
  private user: any;
  @ViewChild(ShowContentComponent) showContentComponent!: ShowContentComponent;

  copyChecked = false;
  recycleChecked = false;
  globalChecked = false;
  protected selectetContent: any;

  constructor(
    private router: Router,
    private postContentService: PostContentService,
    private categoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private authAdminService: AuthenticationAdminService,
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
        name: ['name', Validators.required],
        desc: ['desc', Validators.required],
        img: ['img', ],
        content: ['', ],
        type: [ '',Validators.required],
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
    this.getContents();
  }
  getTypes(){
    this.postContentService.getAllTypes()
      .pipe(first())
      .subscribe(
        res => {
          this.types = res.data;
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
      if (this.form.get(['postContent'])?.valid){
        let formData = this.form.value;
        this.postContent.name = formData.postContent.name;
        this.postContent.desc = formData.postContent.desc;
        this.postContent.type = formData.postContent.type;
        if (this.copyChecked)
          this.postContent.copied_id = this.selectetContent.id;
        if (this.recycleChecked){
          this.postContent.copied_id = this.selectetContent.id;
          this.postContent.copy_childs = this.recycleChecked;
        }
        this.postContent.global = this.globalChecked;
        if(this.post_id!=undefined){
          this.postContent.post = this.post_id;
        }else{
          this.postContent.subcontents = this.postContent_id;

        }

        const formData2 = new FormData();
        for (let image of this.selectedImages) {
          formData2.append('images[]', image);
        }
        this.postContent.img = this.selectedImages;
        setTimeout(() => {

          this.postContentService.add(this.post_id,this.selectetContent.id)
            .subscribe({
              next: res => {
                this.toastr.info(res.message);
                this.loading=false;
                this.createContentEv.emit(res.data.id);
                const event = new Event('load');
                document.dispatchEvent(event);
                //this.postContent=new PostContent();
              },
              error: (err: any) => {
                this.loading=false;
                this.toastr.error(err);
                this.postContent=new PostContent();
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
  getContents(){
    this.postContentService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          const formControls: { [key: string]: any } = {};

          this.postContents =  data.data;
          this.loading=false;
          console.log('postContents')
          console.log(this.postContents)
          //this.postContentsFiltered= this.postContents.filter(x=> x.global===1);

        },
        error => {
        });
  }

  selectType() {
    let type = this.types.find(x=>x.id==this.form.value.postContent.type)
    // loadAttributes()
  }
  loadAttributes()
  {

  }

  selectContent(event: any) {
    // Accede al valor seleccionado, por ejemplo, event.target.value
    const selectedType = event.target.value;
    this.selectetContent=selectedType;
    let content = this.postContents.find(x => x.id == this.selectetContent);
    console.log(content)
    this.selectetContent= content;
    this.form.get('postContent.name')?.setValue(content?.name);
    this.form.get('postContent.desc')?.setValue(content?.desc);
    this.form.get('postContent.type')?.setValue(content?.type.id);
    this.form.get('postContent.subcontent')?.setValue(content?.id);
  }

  checkRecycle(event: any) {
    const isChecked = event.target.checked;

    // Realiza acciones basadas en el estado del checkbox
    if (isChecked && this.copyChecked) {
      this.copyChecked =false
    }
    this.recycleChecked = !this.recycleChecked;

  }

  checkCopy(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.recycleChecked) {
      this.recycleChecked =false
    }
    this.copyChecked = !this.copyChecked;

  }
  checkedGlobal(event: any) {

    this.globalChecked = !this.globalChecked;

  }

}
