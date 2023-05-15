import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableColumnHomeComponent } from './dynamic-table-column-home/dynamic-table-column-home.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicTableColumnHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTableColumnRoutingModule { }
