import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudTaskRoutingModule } from './crud-task-routing.module';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { FieldsComponent } from './fields/fields.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentCompComponent,
    FieldsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CrudTaskRoutingModule,
    FormsModule
  ]
})
export class CrudTaskModule { }
