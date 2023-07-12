import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-fields',
  templateUrl: './form-array-fields.component.html',
  styleUrls: ['./form-array-fields.component.css'],
})
export class FormArrayFieldsComponent implements OnChanges {
  formData: any;
  @Input() formEditDataArray: any;
  @Output() sendFormData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _fb: FormBuilder) {
    this.formData = _fb.group({
      user: _fb.array([]),
    });
    this.addUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    try {
      if (changes['formEditDataArray']['currentValue']['user']) {
        this.formData.reset();
        this.getUser.controls = [];
        for (let i = 0; i < changes['formEditDataArray']['currentValue']['user'].length; i++) {
          this.addUser();
        }
        this.formData.patchValue(changes['formEditDataArray']['currentValue']);
      }
    } catch (e) {
      console.log(
        'ERR ------------------>>>>>>>>>>>>>>>>>>> Check ngOnChanges in form-array-fields-component'
      );
    }
  }

  get getUser() {
    return this.formData.controls['user'] as FormArray;
  }

  deleteUser(i: number) {
    this.getUser.removeAt(i);
  }

  addUser() {
    const addLe = this._fb.group({
      name: [''],
      class: [''],
      age: [''],
    });
    this.getUser.push(addLe);
  }

  submitUser() {
    if (this.formData.status == 'VALID') {
      this.sendFormData.emit(this.formData.value);
      this.getUser.controls = [];
      this.addUser();
      this.formData.reset();
    }
  }
}
