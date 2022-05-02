import { AccountService } from '../../services/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dtData = [];
  selectData?: any;

  constructor(private accountService: AccountService) {

    this.dtOptions = {
      responsive: true,
      columns: [
        { title: "Data do lançamento", data: 'dataLancamentoContaCorrenteCliente' },
        { title: "Descrição", data: 'lancamentoContaCorrenteCliente.nomeTipoOperacao' },
        { title: "Número", data: 'lancamentoContaCorrenteCliente.numeroRemessaBanco' },
        { title: "Situação", data: 'lancamentoContaCorrenteCliente.nomeSituacaoRemessa' },
        { title: "Data de confirmação", data: 'dataEfetivaLancamento' },
        {
          title: "Dados bancários",
          data: null,
          render: (row: any) => {
            const dadosBanco = row.lancamentoContaCorrenteCliente.dadosDomicilioBancario;
            return `${row.nomeBanco} ${dadosBanco.numeroAgencia} CC ${dadosBanco.numeroContaCorrente}`;
          }
        },
        { title: "Valor final", data: 'valorLancamentoRemessa' },
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.selectData = {
            row: data,
            graphic: {
              // adicionar dados necessarios pra renderizar o grafico
            }
          };
        });
        return row;
      },
      ajax: (dataTablesParameters: any, callback = (obj: any) => {}) => {
        this.getDataInApi((res) => {
          callback({
            recordsTotal: res.totalElements,
            pageLength: res.tamanhoPagina,
            data: res.listaControleLancamento
          });
        });
      },
    };
  }

  ngOnInit(): void {

  }

  getDataInApi(callback = (res: any) => {}) {
    this.accountService.getAllUsers().subscribe((response: any) => {
      this.dtData = response;
      callback(response);
    });
  }

}
