import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionBoxTaskHomeComponent } from './selection-box-task-home/selection-box-task-home.component';

const routes: Routes = [
  {
    path: '',
    component: SelectionBoxTaskHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionBoxTaskRoutingModule { }
