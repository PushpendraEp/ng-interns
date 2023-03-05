import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent {
  formData: any;
  rowData: any;
  @ViewChild(TableComponent) tableComponent: TableComponent | undefined;

  getDataInParent(event: any) {
    this.formData = event;
    this.tableComponent?.getFormData(this.formData);
  }

  getRowData(rowD: any) {
    this.rowData = rowD;
  }

}
