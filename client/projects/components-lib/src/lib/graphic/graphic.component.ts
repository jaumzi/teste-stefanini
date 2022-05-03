import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'lib-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() options: ChartConfiguration['options'];
  @Input() data?: ChartData<'pie', number[], string | string[]>;
  @Input() type: ChartType = 'pie';

  public plugins = [DatalabelsPlugin];

  constructor() {

  }

  ngOnInit(): void {
  }

}
