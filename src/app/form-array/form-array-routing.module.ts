import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayCompComponent } from './form-array-comp/form-array-comp.component';

const routes: Routes = [
  {
    path: '',
    component: FormArrayCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArrayRoutingModule { }
