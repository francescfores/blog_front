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
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {forEach} from "lodash";

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
  @Input() postContent!: any;
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

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.postContent.subcomponents, event.previousIndex, event.currentIndex);
    this.postContent.subcomponents.forEach((sub: any) => {
      console.log(sub.component.name)
    });


    this.postContentService.orderSubcomponents(this.postContent.id, this.postContent.subcomponents)
      .pipe(first())
      .subscribe(
        data => {
          this.postContent=data.data;
          console.log('getContent',this.postContent);
          this.updatedContent.emit(this.postContent);
        });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['postContent'] && !changes['postContent'].firstChange) {
      this.loading=false;
      this.form = this.formBuilder.group({
        post : this.formBuilder.group({
          name: [this.postContent.name, Validators.required],
          desc: [this.postContent.desc, Validators.required],
          //global: [this.postContent.global],
          // img: ['', Validators.required],
          type: [this.postContent.type.id ? this.postContent.type.id : null],
          //recycled: [this.postContent.recycled_id ? this.postContent.recycled_id : null],
          //copied: [this.postContent.copied_id ? this.postContent.copied_id : null]
        }),
      });

      const attributes_default = this.postContent.attributes;
      const formControls: { [key: string]: any } = {};
      const formControls2: { [key: string]: any } = {};

      // Itera sobre los atributos y crea un control para cada uno
      attributes_default.forEach((attribute: any) => {
        formControls[attribute?.name] = [attribute?.value, Validators.required];
        if (this.postContent?.subcomponent_id!=undefined && this.postContent.subcomponent_attributes?.length > 0) {
          const foundAttribute = this.postContent.subcomponent_attributes.find((x:any) => x.name === attribute?.name);
          formControls2[attribute?.name] = [foundAttribute?.value || '', Validators.required];
        } else {
          formControls2[attribute?.name] = ['', Validators.required];
        }
      });

      // Crea el formulario utilizando el formBuilder
      this.formAttr = this.formBuilder.group({
        attr: this.formBuilder.group(formControls)
      });
      if (this.postContent?.subcomponent_id!=undefined) {
        this.formAttr2 = this.formBuilder.group({
          attr: this.formBuilder.group(formControls2)
        });
      }

      this.getContents();
    }
  }
  getContent() {
    this.postContentService.get(this.postContent.id)
      .pipe(first())
      .subscribe(
        data => {
          this.postContent=data.data;
          console.log('getContent',this.postContent);
          this.getContents();
        });
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
  /**/
  showTree=false;
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
      const newIndex = index + this.postContent.subcomponents.length;
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
          /*
          this.postContent.subcontents.forEach((subcontent: any, index: number) => {
            formControls['subcontent_'+index] = [subcontent?.id, Validators.required];
            });
           */
            this.formChilds = this.formBuilder.group({
              childs: this.formBuilder.group(formControls)
            });
          this.postContents =  data.data;
          //this.postContents= this.postContents.filter(x=> x.global===1);

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
          this.categories = res.data.category;
        },
        error => {
        });
  }
  onFileChange(event: any) {
    this.selectedImages = event.target.files;
    //this.form.value.post.img = event.target.files;
  }

  update() {
    this.submit = true;
    if(!this.loading) {
      this.loading = true;
      if (this.form.valid) {
        let formData = this.form.value;
        this.post.id = this.postContent.id;
        this.post.name = formData.post.name;
        this.post.desc = formData.post.desc;
        this.post.global = this.globalChecked;
        this.post.subcomponent_id = this.postContent.subcomponent_id;
        this.form.value.post.global=this.globalChecked;


        const formData2 = new FormData();
        for (let image of this.selectedImages) {
          formData2.append('images[]', image);
        }
        this.post.img = this.selectedImages;
        console.error(this.postContent.img)
        this.postContentService.update(
          this.postContent.id,
          this.post,
          this.formAttr.value.attr,
          this.formAttr2?.value.attr ? this.formAttr2?.value.attr:[],
          this.formChilds.value.childs)
          .subscribe({
            next: res => {
              this.postContent =res.data;
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
      return this.postContent.attributes
    // @ts-ignore
  }
  checkedGlobal(event: any) {

    this.globalChecked = !this.globalChecked;
  }

  removeContent(subcontent: PostContent) {
    this.postContentService.deleteSubComponent(subcontent.id)
      .subscribe({
        next: (res:any) => {
          this.postContent =res.data;
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
  onClick(content: any) {
    console.log('Se hizo clic en el componente:', content);
    this.postContent = content;
  }
  normalizarSubcomponente(subcomponente: any): any {
    return {
      id: subcomponente.component.id,
      subcomponent_id: subcomponente.id,
      name: subcomponente.component.name,
      desc: subcomponente.component.desc,
      subcomponent_attributes: subcomponente.subcomponent_attributes,
      subcomponents: subcomponente.subcomponents,
      attributes: subcomponente.component.attributes,
      type: subcomponente.component.type,
    };
  }
}

