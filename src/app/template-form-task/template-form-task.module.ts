import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormTaskRoutingModule } from './template-form-task-routing.module';
import { FormsModule } from '@angular/forms';
import { TemplateHomeComponent } from './template-home/template-home.component';


@NgModule({
  declarations: [
    TemplateHomeComponent
  ],
  imports: [
    CommonModule,
    TemplateFormTaskRoutingModule,
    FormsModule
  ]
})
export class TemplateFormTaskModule { }
