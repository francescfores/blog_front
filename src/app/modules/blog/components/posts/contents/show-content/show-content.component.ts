import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Post} from "../../../../models/post";
import {Router} from "@angular/router";
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
  postContentsFiltered!: PostContent[];

  //alert
  text: any;
  color: any;
  show=false;
  autocloseTime=2000;
  private category: Post;
  selectedFile: any;
  loading=false;
  @Input() post_id:any=null;
  @Output() showContentEv = new EventEmitter<number>();
  table={
    columns:[
      {
        column_name: 'name',
        order: '',
        value: ''
      },
      {
        column_name: 'desc',
        order: '',
        value: ''
      },
      {
        column_name: 'type',
        order: '',
        value: ''
      },
      {
        column_name: 'actions',
        order: '',
        value: ''
      },
    ],
    current_page: "1",
    links: undefined,
    data: undefined
  };

  constructor(
    private router: Router,
    private postContentService: PostContentService,
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
    if(this.post_id!=null){
      this.paginatedByPost(1);
      document.addEventListener('load', () => {
        console.log('eeepa');
        //this.paginatedByPost(this.table.current_page);
      });
    }else {
      this.updateFilter();
      document.addEventListener('load', () => {
        console.log('eeepa2');
       // this.paginatedAll(this.table.current_page);
      });
    }

    this.table.columns.forEach((column:any)=>{
      console.log(column.column_name)
    })

  }

  onClick(content: any) {
    setTimeout(() => {
      this.showContentEv.emit(content);
      console.log('Se hizo clic en el componente:', content);
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
  delete(component_id:number) {
    if(this.post_id!=null){
      this.postContentService.deleteRelation(this.post_id,component_id)
        .subscribe({
          next: (res:any) => {
            this.toastr.info(res.message);
            this.submitted = false;
            this.paginated(this.table.current_page)
          },
          error: (err: any) => { },
          complete: () => { }
        });
    }else {
      this.postContentService.delete(component_id)
        .subscribe({
          next: (res:any) => {
            this.toastr.info(res.message);
            this.submitted = false;
            this.paginated(this.table.current_page)
          },
          error: (err: any) => { },
          complete: () => { }
        });
    }

  }

  paginatedByPost(page:any){

    this.postContentService.paginatedByPost(page, this.post_id)
      .subscribe({
        next: res => {
          console.log('res')
          console.error(res)
          this.posts= res.data;
          //this.postContentsFiltered = this.posts;

          this.table.current_page =res.data.current_page+'';
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }
  paginatedAll(page:any){

    this.postContentService.paginated(page)
      .subscribe({
        next: res => {
          this.posts= res.data;
          //this.postContentsFiltered = this.posts.data;
          //this.postContentsFiltered = this.postContentsFiltered.filter((x:any)=> x.global===1);
          this.table.current_page =res.data.current_page+'';
        },
        error: (err: any) => { },
        complete: () => { }
      });
  }

  paginated(pr:any) {
    this.table.current_page=this.sharedService.paginated(pr, this.table);
    if(this.post_id!=null){
      this.paginatedByPost(this.table.current_page)
    }else {
      this.paginatedAll(this.table.current_page)
    }
  }
  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }

  filterOrder(column:any){
    let filter = this.table.columns.find(x => x.column_name === column.column_name);
    if(filter){
      if(filter.order==''){
        filter.order = 'asc';  // Cambiar el valor del filtro
      }
      else if(filter.order==='asc'){
        filter.order = 'desc';  // Cambiar el valor del filtro
      }else {
        filter.order = '';  // Cambiar el valor del filtro
      }
    }
    console.log(filter)
    console.log(this.table.columns)
    this.updateFilter();
  }

  filterValue(value: any,column_name:any) {
    let filter = this.table.columns.find(x => x.column_name === column_name.column_name);
    console.log(value.target.value)
    console.log(value.target.key)
    console.log(column_name)
    console.log(filter)

    if(filter){
        filter.value = value.target.value;  // Cambiar el valor del filtro
      }
    console.log(filter)
    this.updateFilter();
  }

  updateFilter(){
    this.table.current_page =1+'';

    this.postContentService.filterPaginated(this.table)
      .subscribe({
        next: res => {
          this.posts= res.data;
          //this.postContentsFiltered = this.posts.data;
          //this.postContentsFiltered = this.postContentsFiltered.filter((x:any)=> x.global===1);
          console.log(this.table)
          this.table.links =res.data.links;
          this.table.data =res.data.data;
          this.table.current_page =res.data.current_page+'';
          console.log(this.table)

        },
        error: (err: any) => { },
        complete: () => { }
      });
  }
}
