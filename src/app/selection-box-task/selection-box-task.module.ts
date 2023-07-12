import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionBoxTaskRoutingModule } from './selection-box-task-routing.module';
import { SelectionBoxTaskHomeComponent } from './selection-box-task-home/selection-box-task-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectionBoxTaskHomeComponent
  ],
  imports: [
    CommonModule,
    SelectionBoxTaskRoutingModule,
    FormsModule
  ]
})
export class SelectionBoxTaskModule { }
