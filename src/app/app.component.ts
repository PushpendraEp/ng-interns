import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'internsKT';
  @ViewChild('modalCloseButton') modalCloseButton: any;
  modalCloseBtn: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalCloseBtn = this.modalCloseButton;
    }, 0);
  }

}
