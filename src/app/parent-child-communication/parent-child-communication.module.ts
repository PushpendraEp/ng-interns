import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildCommunicationRoutingModule } from './parent-child-communication-routing.module';
import { ParentComComponent } from './parent-com/parent-com.component';
import { ChildComComponent } from './child-com/child-com.component';


@NgModule({
  declarations: [
    ParentComComponent,
    ChildComComponent
  ],
  imports: [
    CommonModule,
    ParentChildCommunicationRoutingModule
  ]
})
export class ParentChildCommunicationModule { }
