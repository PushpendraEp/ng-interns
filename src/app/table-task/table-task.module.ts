import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTaskRoutingModule } from './table-task-routing.module';
import { TableOfObjectComponent } from './table-of-object/table-of-object.component';


@NgModule({
  declarations: [
    TableOfObjectComponent
  ],
  imports: [
    CommonModule,
    TableTaskRoutingModule
  ]
})
export class TableTaskModule { }
