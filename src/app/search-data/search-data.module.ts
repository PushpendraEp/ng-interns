import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDataRoutingModule } from './search-data-routing.module';
import { SearchDataHomeComponent } from './search-data-home/search-data-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchDataHomeComponent
  ],
  imports: [
    CommonModule,
    SearchDataRoutingModule,
    FormsModule
  ]
})
export class SearchDataModule { }
