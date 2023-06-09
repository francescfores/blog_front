import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-outside',
  templateUrl: './select-outside.component.html',
  styleUrls: ['./select-outside.component.css']
})
export class SelectOutsideComponent implements OnInit, AfterViewInit {
  @Input() formGroupParent!: FormGroup|any;
  @Input() formGroupControlName!: string;
  @Input() value!: any;
  @Input() items!: any[];
// FormControl store validators
  control!: FormControl;

  ngAfterViewInit(): void {
    // Fetch Form control (validator) from FormGroup parent
    this.control = <FormControl>this.formGroupParent.get([this.formGroupControlName]);
    if (this.value) {
      this.control.setValue(this.value);
    }
  }

  selectItem($event: Event) {

  }

  ngOnInit():void{

  }

}
