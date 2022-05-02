import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { LibGraphicComponent } from '../lib-graphic/lib-graphic.component';

@Component({
  selector: 'lib-table',
  templateUrl: './lib-table.component.html',
  styleUrls: ['./lib-table.component.css']
})
export class LibTableComponent implements OnInit {

  @Input() options: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   this.dtTrigger.next(null);
  // }

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }

  // rerender(): void {
  //   this.dtElement?.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.destroy();
  //     this.dtTrigger.next(null);
  //   });
  // }
}
