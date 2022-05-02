import { NgModule } from '@angular/core';
import { GraphicModule } from './graphic/graphic.module';
import { TableModule } from './table/table.module';



@NgModule({
  declarations: [
  ],
  imports: [
    TableModule,
    GraphicModule
  ],
  exports: [
    TableModule,
    GraphicModule
  ]
})
export class ComponentsLibModule { }
