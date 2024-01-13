import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
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
import {PostContent} from "../../../../models/post-content";
import {PostContentService} from "../../../../services/api/post-content.service";
import {PostContentType} from "../../../../models/post-content-type";

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent implements OnChanges {
  form!: FormGroup;
  formAttr!: FormGroup;
  formAttr2!: FormGroup;
  formChilds!: FormGroup;
  public post!: PostContent;
  submit!: boolean;
  public loading=false;
  selectedImages: File[] = [];
  categories!: PostCategory[];
  private category: any;
  private user: any;
  private id: any;
  queryObj:any;

  /*new*/
  @Input() postContent!: PostContent;
  @Input() postContents!: PostContent[];
  private type: any;
  types!: PostContentType[];
  @Output() updatedContent = new EventEmitter<any>();
  selects: any[] = [];
  indexSubcontents=0;
  copyChecked = false;
  recycleChecked = false;
  globalChecked = false;
  protected selectetContent: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['postContent'] && !changes['postContent'].firstChange) {
      this.loading=true;

      // Realiza acciones adicionales aquí cuando la propiedad postContent cambie
      console.log('La propiedad postContent ha cambiado:', this.postContent);

      this.form = this.formBuilder.group({
        post : this.formBuilder.group({
          num: [this.postContent.num, Validators.required],
          name: [this.postContent.name, Validators.required],
          desc: [this.postContent.desc, Validators.required],
          global: [this.postContent.global],
          // img: ['', Validators.required],
          type: [this.postContent.type && this.postContent.type.id ? this.postContent.type.id : null],
          recycled: [this.postContent.recycled_id ? this.postContent.recycled_id : null],
          copied: [this.postContent.copied_id ? this.postContent.copied_id : null]
        }),
      });

      const attributes_default = this.postContent.type.attributes;
      const formControls: { [key: string]: any } = {};
      const formControls2: { [key: string]: any } = {};

      // Itera sobre los atributos y crea un control para cada uno
      attributes_default.forEach((attribute: any) => {
        formControls[attribute?.name] = [attribute?.value, Validators.required];
        let name=this.postContent.attributes.find(x=>x.name===attribute?.name);
        console.log(this.postContent.attributes)
        console.log(attribute?.id)
        console.log(this.postContent.attributes.find(x=>x.name===attribute?.name))
        if (name) {
          formControls2[attribute?.name] = [name.value, Validators.required];
        }else {
          formControls2[attribute?.name] = [attribute?.value, Validators.required];
        }

      });

      // Crea el formulario utilizando el formBuilder
      this.formAttr = this.formBuilder.group({
        attr: this.formBuilder.group(formControls)
      });

      // Crea el formulario utilizando el formBuilder
      this.formAttr2 = this.formBuilder.group({
        attr: this.formBuilder.group(formControls2)
      });

      // this.getContent();
      this.getContents();

    }
  }
  getContent() {
    this.postContentService.get(this.postContent.id)
      .pipe(first())
      .subscribe(
        data => {
          this.postContent=data.data;

          console.log('this.postContentthis.postContentthis.postContentthis.postContentthis.postContent');
          console.log(this.postContent);
          this.getContents();
        });
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
  /**/
  constructor(
    private router: Router,
    private productService: PostService,
    private postContentService: PostContentService,

    private categoryService: CategoryService,
    private formBuilder: UntypedFormBuilder,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private authAdminService: AuthenticationAdminService,
    private route: ActivatedRoute,
  ){
    this.post = new PostContent();
  }
  uploadImages() {
    const formData = new FormData();
    for (let image of this.selectedImages) {
      formData.append('images[]', image);
    }
  }

  ngOnInit(): void {
    this.user=this.authAdminService.currentUserValue;
    this.getTypes();
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

    // this.getParams();
    // console.log(this.postContent)
  }
  agregarSelect() {
    this.selects.push(null);
    this.construirFormulario()
  }

  construirFormulario() {
    const formControls: { [key: string]: any } = {};
/*
    this.postContent.subcontents.forEach((subcontent: any, index: number) => {
      formControls['subcontent_' + index] = [subcontent?.id, Validators.required];
    });
*/
    this.selects.forEach((_, index) => {
      const newIndex = index + this.postContent.subcontents.length;
      formControls['subcontent_' + newIndex] = [null, Validators.required];
    });

    this.formChilds = this.formBuilder.group({
      childs: this.formBuilder.group(formControls)
    });
  }

  getContents(){
    this.postContentService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          const formControls: { [key: string]: any } = {};
          console.log('eeeeeeeeeeeeeeeeeeeeeeeeeee');
          /*
          this.postContent.subcontents.forEach((subcontent: any, index: number) => {
            formControls['subcontent_'+index] = [subcontent?.id, Validators.required];
            });

           */
            this.formChilds = this.formBuilder.group({
              childs: this.formBuilder.group(formControls)
            });

          this.postContents =  data.data;
          console.log(this.postContents)
          this.postContents= this.postContents.filter(x=> x.global===1);

          this.loading=false;
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
    // console.log(this.form.value);
    // console.log(this.formAttr.value);
    // console.log(this.formAttr2.value);
    // console.log(this.formAttr2.value.attr);
    console.log(this.formChilds.value.childs);
    if(!this.loading) {
      this.loading = true;
      if (this.form.valid) {
        let formData = this.form.value;
        this.post.name = formData.post.name;
        this.post.desc = formData.post.desc;
        this.post.global = this.globalChecked;
        console.log(this.post)
        this.form.value.post.global=this.globalChecked;
        if (this.copyChecked)
          this.postContent.copied_id = this.selectetContent.id;
        if (this.recycleChecked)
          this.postContent.recycled_id = this.selectetContent.id;


        this.postContentService.update(
          this.postContent.id,
          this.form.value.post,
          this.formAttr.value.attr,
          this.formAttr2.value.attr,
          this.formChilds.value.childs)
          .subscribe({
            next: res => {
              this.postContent =res.data;
              console.log(this.postContent)
              this.toastr.info(res.message);
              this.loading = false;
              this.selects=[];
              this.updatedContent.emit(this.postContent);
              // this.getContent();
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

  laodAtt() {
      if(this.form.value.post!=undefined){
        return  this.types.find(n=>n.id===this.form.value.post.type)?.attributes;
      }
      return this.postContent.type.attributes
    // @ts-ignore
  }
  checkedGlobal(event: any) {

    this.globalChecked = !this.globalChecked;
    console.log(this.globalChecked)
  }

  removeContent(subcontent: PostContent) {
    this.postContentService.delete(subcontent.id)
      .subscribe({
        next: (res:any) => {
          this.postContent =res.data;
          console.log(this.postContent)
          this.toastr.info(res.message);
          this.loading = false;
          this.selects=[];
          this.updatedContent.emit(this.postContent);
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  delete(content: PostContent) {
    this.postContentService.delete(content.id)
      .subscribe({
        next: (res:any) => {
          this.postContent =res.data;
          console.log(this.postContent)
          this.toastr.info(res.message);
          this.loading = false;
          this.selects=[];
          this.updatedContent.emit(this.postContent);
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  checkRecycle(event: any) {
    const isChecked = event.target.checked;
    console.log('checkRecycle ',isChecked, this.recycleChecked, this.copyChecked);

    // Realiza acciones basadas en el estado del checkbox
    if (isChecked && this.copyChecked) {
      this.copyChecked =false
    }
    this.recycleChecked = !this.recycleChecked;
    console.log('checkRecycle ',isChecked, this.recycleChecked, this.copyChecked);

  }

  checkCopy(event: any) {
    const isChecked = event.target.checked;
    console.log('checkRecycle ',isChecked, this.copyChecked, this.recycleChecked);
    if (isChecked && this.recycleChecked) {
      this.recycleChecked =false
    }
    this.copyChecked = !this.copyChecked;
    console.log('checkRecycle ',isChecked, this.copyChecked, this.recycleChecked);

  }
}

