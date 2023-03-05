import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrls: ['./parent-com.component.css']
})
export class ParentComComponent {
  parentData: string = `THIS IS PARENT'S DATA`;
  childData: string | undefined;

  getDataFromChild(event: any){
    this.childData = event;
  }

}
