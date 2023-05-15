import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableSearchRoutingModule } from './dynamic-table-search-routing.module';
import { DynamicTableSerachHomeComponent } from './dynamic-table-serach-home/dynamic-table-serach-home.component';


@NgModule({
  declarations: [
    DynamicTableSerachHomeComponent
  ],
  imports: [
    CommonModule,
    DynamicTableSearchRoutingModule
  ]
})
export class DynamicTableSearchModule { }
