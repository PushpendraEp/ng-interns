import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.css']
})
export class FormArrayTableComponent {
  @Input() formDataArray: any;
  @Output() editFormData: EventEmitter<any> = new EventEmitter<any>();

  editForm(){
    this.editFormData.emit(this.formDataArray);
    this.formDataArray = [];
  }

}
