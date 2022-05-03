import { Component, Input, OnInit } from '@angular/core';

interface PaginateOptions {
  currentPage: number;
  totalItems: number;
  elementsPerPage: number;
}

@Component({
  selector: 'lib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() paginateOptions?: PaginateOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
