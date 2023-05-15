import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableColumnRoutingModule } from './dynamic-table-column-routing.module';
import { DynamicTableColumnHomeComponent } from './dynamic-table-column-home/dynamic-table-column-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DynamicTableColumnHomeComponent
  ],
  imports: [
    CommonModule,
    DynamicTableColumnRoutingModule,
    FormsModule
  ]
})
export class DynamicTableColumnModule { }
