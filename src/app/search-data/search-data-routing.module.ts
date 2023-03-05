import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDataHomeComponent } from './search-data-home/search-data-home.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDataHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDataRoutingModule { }
