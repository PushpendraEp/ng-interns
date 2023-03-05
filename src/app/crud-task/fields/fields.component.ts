import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnChanges {
  formData: any = [];
  @Output() sendToParent: EventEmitter<any> = new EventEmitter<any>();
  @Input() rowD: any;
  @ViewChild('form') form: NgForm | undefined;
  integreRegex = /^\d+$/;
  idArray: any = [];

  onSubmit() {
    if (this.formData.length > 0) {
      let checkIndex = this.idArray.indexOf(this.form?.value.id);
      if (checkIndex == -1) {
        this.formData.push(this.form?.value);
        this.idArray.push(this.form?.value.id);
      }
      else {
        this.formData[checkIndex] = this.form?.value;
      }
    }
    else {
      this.formData.push(this.form?.value);
      this.idArray.push(this.form?.value.id);
    }
    this.sendToParent.emit(this.formData);
    this.form?.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rowD'].currentValue) {
      let rowData = changes['rowD'].currentValue;
      this.formSetValue(rowData);
    }
  }

  formSetValue(rowD: any) {
    this.form?.control.patchValue(rowD);
  }

}
