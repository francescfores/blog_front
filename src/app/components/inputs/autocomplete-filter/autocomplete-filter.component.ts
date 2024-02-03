import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PostContent} from "../../../modules/blog/models/post-content";

@Component({
  selector: 'app-autocomplete-filter',
  templateUrl: './autocomplete-filter.component.html',
  styleUrl: './autocomplete-filter.component.css'
})

export class AutocompleteFilterComponent implements OnInit, AfterViewInit {
  @Input() formGroupParent!: FormGroup|any;
  @Input() formGroupControlName!: string;
  myControl = new FormControl<string | any>('');
  @Input() options: any[]=[] ;
  filteredOptions!: Observable<any[]>;
  @Output() showContentEv = new EventEmitter<number>();
  @Output() newItemEvent = new EventEmitter<any>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.value;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  ngAfterViewInit() {

  }

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  displayFn(any: any): string {
    console.log('displayFn')
    console.log(any)
    return any && any.name ? any.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    if(name!=''){
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));

    }else {
      return [];
    }
  }
}
