import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterHomeComponent } from './counter-home/counter-home.component';


@NgModule({
  declarations: [
    CounterHomeComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
