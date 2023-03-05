import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayCompComponent } from './form-array-comp/form-array-comp.component';
import { FormArrayTableComponent } from './form-array-table/form-array-table.component';
import { FormArrayFieldsComponent } from './form-array-fields/form-array-fields.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormArrayCompComponent,
    FormArrayTableComponent,
    FormArrayFieldsComponent
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormArrayModule { }
