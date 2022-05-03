import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GraphicModule, MaterialModule, TableModule } from 'components-lib';
import { CustomCurrencyPipe } from 'src/app/utils/pipes/custom-currency.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    GraphicModule,
    MaterialModule,
  ],
})
export class DashboardModule { }
