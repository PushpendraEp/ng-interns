import { Component } from '@angular/core';

@Component({
  selector: 'app-table-of-object',
  templateUrl: './table-of-object.component.html',
  styleUrls: ['./table-of-object.component.css']
})
export class TableOfObjectComponent {

  public data = [
    { sn: 1, name: "Shubham", age: 10, course: "React Native" },
    { sn: 2, name: "Ravi", age: 11, course: "Node JS" },
    { sn: 3, name: "Deepak", age: 12, course: "Angular JS" },
    { sn: 4, name: "Divyanshu", age: 11, course: "Python" },
    { sn: 5, name: "Kirti", age: 12, course: "Python" }
  ]
  public dataHeader: any;

  constructor() {
    console.log(this.data);
    this.dataHeader = Object.keys(this.data[0]);
    console.log(this.dataHeader);

  }
}
