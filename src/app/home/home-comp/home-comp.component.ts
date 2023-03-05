import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent {

  @Input() modalCloseBtn: any;

  closeModal() {
    if(this.modalCloseBtn) {
      this.modalCloseBtn.nativeElement.click();
    }
  }

}
