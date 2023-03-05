import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormTaskRoutingModule } from './reactive-form-taskg-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveHomeComponent } from './reactive-home/reactive-home.component';


@NgModule({
  declarations: [
    ReactiveHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormTaskRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormTaskModule { }
