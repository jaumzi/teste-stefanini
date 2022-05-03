import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialModule } from '../material/material.module';
import { PaginatorModule } from '../paginator/paginator.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    MaterialModule,
  ],
  exports: [
    TableComponent,
  ]
})
export class TableModule { }
