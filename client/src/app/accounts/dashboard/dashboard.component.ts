import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
// import { DataTableDirective } from 'angular-datatables';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @ViewChild(DataTableDirective, { static: false })

  data = [];

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe((response: any)=> {
      this.data = response;
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    // $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   dtInstance.draw();
    // });
  }
}
