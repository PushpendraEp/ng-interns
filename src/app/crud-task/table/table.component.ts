import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  // @Input() formData: any;
  @Output() rowData: EventEmitter<any> = new EventEmitter<any>();
  formDataHeader: any = ['Id', 'Name', 'Class', 'Age', 'Edit', 'Del'];
  formDataMain: any = [];
  formData: any;
  searchColumn: string | number = 'name';
  @ViewChild('searchString') searchString : any;

  getFormData(value: any) {
    this.formData = value;
    this.formDataMain = JSON.parse(JSON.stringify(this.formData))
  }

  ngOnChanges(changes: any): void {
    // if (changes.formData.currentValue) {
    //   // this.formDataHeader = Object.keys(this.formData[0]);
    //   this.formDataMain = JSON.parse(JSON.stringify(this.formData));
    // }
  }

  searchData(search: any) {
    let searchString = search.value;
    searchString = searchString.replace(/^\s+/g, '');
    searchString = searchString.replace(/\s+$/g, '');
    this.filterDataForSearch(searchString);
  }

  filterDataForSearch(searchString: string) {
    let searchTimeOut;
    let searchData: any = searchString;
    if (searchTimeOut) {
      clearTimeout(searchTimeOut);
    }
    else {
      searchTimeOut = setTimeout(() => {
        if ('') {
          this.formData = this.formDataMain;
        }
        else {
          this.formData = this.formDataMain.filter((p: any) => {
            if (this.searchColumn == 'age') {
              let p1 = String(p[this.searchColumn]);
              if (p1.indexOf(searchData) > -1) {
                return p
              }
            }
            else {
              if (p[this.searchColumn].toUpperCase().indexOf(searchData.toUpperCase()) > -1) {
                return p
              }
            }
          });
        }
      }, 100);
    }
  }

  deleteRow(i: number) {
    this.formData.splice(i, 1);
  }

  editRow(i: number) {
    let rowD = this.formData[i];
    this.rowData.emit(rowD);
  }

  onSelected(value: string) {
    this.searchColumn = value;
    this.searchData(this.searchString.nativeElement);
  }

}
