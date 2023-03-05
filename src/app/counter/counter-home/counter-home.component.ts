import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css']
})
export class CounterHomeComponent {

  num: number = 0;

  handleBtnClick(exp: string) {
    switch (exp) {
      case '+':
        this.num += 1;
        break;
      case '-':
        this.num -= 1;
        break;
      case '+5':
        this.num += 5;
        break;
      case '-5':
        this.num -= 5;
        break;
      case '-Random':
        this.num -= Math.floor(Math.random() * 10);
        break;
      case '+Random':
        console.log(Math.random)
        this.num += Math.floor(Math.random() * 10);
        break;
      default:
        break;
    }
  }

}
