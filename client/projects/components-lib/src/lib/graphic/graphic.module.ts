import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic.component';



@NgModule({
  declarations: [
    GraphicComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    GraphicComponent
  ]
})
export class GraphicModule { }
