import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOfObjectComponent } from './table-of-object/table-of-object.component';

const routes: Routes = [
  {
    path: '',
    component: TableOfObjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTaskRoutingModule { }
