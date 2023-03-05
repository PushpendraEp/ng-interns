import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent {

  @Input() parentData: any;
  childData: string = "THIS IS CHILD'S DATA";
  @Output() sendToParent: EventEmitter<string> = new EventEmitter<string>();

  sendData(){
    this.sendToParent.emit(this.childData);
  }

}
