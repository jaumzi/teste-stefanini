import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { LibTableComponent } from './lib-table.component';



@NgModule({
  declarations: [
    LibTableComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ],
  exports: [
    LibTableComponent
  ],
})
export class LibTableModule { }
