import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(p => p.HomeModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud-task/crud-task.module').then(p => p.CrudTaskModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form-task/reactive-form-taskg.module').then(p => p.ReactiveFormTaskModule)
  },
  {
    path: 'template-form',
    loadChildren: () => import('./template-form-task/template-form-task.module').then(p => p.TemplateFormTaskModule)
  },
  {
    path: 'table-task',
    loadChildren: () => import('./table-task/table-task.module').then(p => p.TableTaskModule)
  },
  {
    path: 'parent-child-comp',
    loadChildren: () => import('./parent-child-communication/parent-child-communication.module').then(p => p.ParentChildCommunicationModule)
  },
  {
    path: 'form-array',
    loadChildren: () => import('./form-array/form-array.module').then(p => p.FormArrayModule)
  },
  {
    path: 'country-capital',
    loadChildren: () => import('./search-data/search-data.module').then(p => p.SearchDataModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(p => p.CounterModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
