import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {Post} from "../../../../models/post";
import {PostContent} from "../../../../models/post-content";
import {Router} from "@angular/router";
import {CategoryService} from "../../../../services/api/post-category.service";
import {SharedService} from "../../../../../../services/shared.service";
import {ToastrService} from "ngx-toastr";
import {AuthenticationAdminService} from "../../../../../../services/api/authentication-admin.service";
import {first, map, startWith} from "rxjs/operators";
import {PostContentService} from "../../../../services/api/post-content.service";
import {ShowContentComponent} from "../show-content/show-content.component";
import {PostContentType} from "../../../../models/post-content-type";

import {Observable} from "rxjs";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent implements OnInit{
  form!: FormGroup;
  public post!: Post;
  public component!: PostContent;
  @Input() post_id:any=null;
  @Input() component_id:any=null;
  @Input() components!: PostContent[];
  componentsFiltered: any[] =[];
  @Output() createContentEv = new EventEmitter<any>();
  submit!: boolean;
  loading=false;
  selectedImages: File[] = [];
  types!: PostContentType[];
  copyChecked = false;
  recycleChecked = false;
  globalChecked = false;
  selectetContent: any;

  constructor(
    private componentService: PostContentService,
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
  ){
    this.post = new Post();
    this.component = new PostContent();
  }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      component : this.formBuilder.group({
        name: ['name', Validators.required],
        desc: ['desc', Validators.required],
        component: ['',],
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

  getContents(){
    this.componentService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          const formControls: { [key: string]: any } = {};
          this.components =  data.data;
          this.loading=false;
          //this.componentsFiltered= this.components.filter(x=> x.global===1);
          this.componentsFiltered= this.components.map(x => ({id:x.id, name:x.name}) );
        },
        error => {
          this.toastr.error('get ccomponents error!');
        });
  }

  getTypes(){
  this.componentService.getAllTypes()
    .pipe(first())
    .subscribe(
      res => {
        this.types = res.data;
      },
      error => {
        this.toastr.error('get types error!');
      });
}

  onFileChange(event: any) {
    this.selectedImages = event.target.files;
  }

  uploadImages() {
    const formData = new FormData();
    for (let image of this.selectedImages) {
      formData.append('images[]', image);
    }
  }

  create() {
    this.submit = true;

    if(!this.loading){
      this.loading=true;
      if (this.form.get(['component'])?.valid){

        let formData = this.form.value;
        this.component.name = formData.component.name;
        this.component.desc = formData.component.desc;
        this.component.type = formData.component.type;
        this.component.component = formData.component.component;

        if (this.copyChecked || this.recycleChecked) {
          this.component.copied_id = this.selectetContent.id;

          if (this.recycleChecked) {
            this.component.copy_childs = this.recycleChecked;
          }
        }
        this.component.global = this.globalChecked;
        this.component.post = this.post_id !== undefined ? this.post_id : undefined;
        this.component.subcontents = this.post_id === undefined ? this.component_id : undefined;

        this.component.img = this.selectedImages;

        setTimeout(() => {
          this.componentService.create(this.component)
            .subscribe({
              next: res => {
                this.toastr.info(res.message);
                this.loading=false;
                this.createContentEv.emit(res.data.id);
                const event = new Event('load');
                document.dispatchEvent(event);
                this.component=new PostContent();
              },
              error: (err: any) => {
                this.loading=false;
                this.toastr.error(err);
                this.component=new PostContent();
              },
              complete: () => {
                console.log('complete')
              }
            });
        }, 300)

      } else {
        this.loading=false;
        this.toastr.error('Form invalid!');
      }
    }
  }

  selectContent(event: any) {
    //const selectedType = event.target.value;
    this.selectetContent=event.option.value.id;
    let content = this.components.find(x => x.id == this.selectetContent);
    this.selectetContent= content;
      this.form.get('component.name')?.setValue(content?.name);
      this.form.get('component.desc')?.setValue(content?.desc);
      this.form.get('component.type')?.setValue(content?.type.id);
      this.form.get('component.subcontent')?.setValue(content?.id);
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
