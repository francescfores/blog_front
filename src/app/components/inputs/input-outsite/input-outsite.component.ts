import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-outsite',
  templateUrl: './input-outsite.component.html',
  styleUrls: ['./input-outsite.component.css']
})
export class InputOutsiteComponent implements OnInit{
  @Input() formGroupParent!: FormGroup|any;
  @Input() formGroupControlName!: string;
  @Input() value!: any;
  @Input() label!: any;
// FormControl store validators
  control!: FormControl;
  ngOnInit():void{
    // Fetch Form control (validator) from FormGroup parent
    this.control = <FormControl>this.formGroupParent.get(this.formGroupControlName);
  }
}
