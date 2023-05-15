import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableSerachHomeComponent } from './dynamic-table-serach-home/dynamic-table-serach-home.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicTableSerachHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTableSearchRoutingModule { }
