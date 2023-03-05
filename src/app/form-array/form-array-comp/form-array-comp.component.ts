import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array-comp',
  templateUrl: './form-array-comp.component.html',
  styleUrls: ['./form-array-comp.component.css']
})
export class FormArrayCompComponent {

  formDataArray: any;
  formEditDataArray: any;

  getFormData(formData: any){
    this.formDataArray = formData;
  }

  getEditFormData(formData: any){
    this.formEditDataArray = formData;
  }

}
