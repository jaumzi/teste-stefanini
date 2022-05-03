import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

interface PaginateOptions {
  currentPage: number;
  totalItems: number;
  elementsPerPage: number;
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
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @Input() tableData: any[] = [];
  @Input() tableColumns: string[] = [];
  @Input() mapTableColumns: any = {};
  @Input() tableColumnsDetailRowRef: any;
  @Input() paginateOptions?: PaginateOptions;

  @Output('selectRow') selectRowChange: EventEmitter<any | null> = new EventEmitter<any | null>();
  expandedElement: any | null = null;
  realTableData?: any;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  setSortInDataSource() {
    this.realTableData = undefined;

    if (this.tableData) {
      this.realTableData = new MatTableDataSource(this.tableData);
      this.realTableData.sort = this.sort;
    }

    return this.realTableData;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  setExpandedElement(el: any | null) {
    let newExpandedElement: any | null = null;

    if (this.expandedElement !== el) {
      newExpandedElement = el;
    }

    this.expandedElement = newExpandedElement;
    this.selectRowChange.emit(newExpandedElement);
  }

}

