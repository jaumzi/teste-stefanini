import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}


@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  @Input() tableData: PeriodicElement[] = [];
  @Input() tableColumns: string[] = [];
  @Input() tableColumnsDetailRowRef: any;

  @Output('selectRow') selectRowChange: EventEmitter<PeriodicElement | null> = new EventEmitter<PeriodicElement | null>();
  expandedElement: PeriodicElement | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  setExpandedElement(el: PeriodicElement) {
    if (this.expandedElement === el) {
      this.expandedElement = null;
    } else {
      this.expandedElement = el;
    }

    this.selectRowChange.emit(this.expandedElement);
  }

}

