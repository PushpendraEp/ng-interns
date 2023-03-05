import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveHomeComponent } from './reactive-home/reactive-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormTaskRoutingModule { }
