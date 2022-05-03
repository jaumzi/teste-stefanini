import { NgModule } from '@angular/core';
import { GraphicModule } from './graphic/graphic.module';
import { TableModule } from './table/table.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorModule } from './paginator/paginator.module';



@NgModule({
  declarations: [
  ],
  imports: [
    TableModule,
    GraphicModule,
    PaginatorModule
  ],
  exports: [
    TableModule,
    GraphicModule,
    PaginatorModule
  ]
})
export class ComponentsLibModule { }
