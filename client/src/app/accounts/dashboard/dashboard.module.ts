import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LibTableModule } from '../../components/lib-table/lib-table.module';
import { LibGraphicModule } from '../../components/lib-graphic/lib-graphic.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibTableModule,
    LibGraphicModule
  ],
})
export class DashboardModule { }
