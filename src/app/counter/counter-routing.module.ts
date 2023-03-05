import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterHomeComponent } from './counter-home/counter-home.component';

const routes: Routes = [
  {
    path: '',
    component: CounterHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
