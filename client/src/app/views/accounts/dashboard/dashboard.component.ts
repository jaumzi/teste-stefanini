import { AccountService } from '../../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { toPrince } from 'src/app/utils/Formatter';
import { ApiVersionEnum } from 'src/app/models/enum-api-version/ApiVersionEnum';
import { ContaLegadoModel } from 'src/app/models/conta-legado/ContaLegadoModel';

const fixedNumber = (value: any) => {
  return Number(value.toFixed(2))
};

interface PaginateOptions {
  currentPage: number;
  totalItems: number;
  elementsPerPage: number;
}


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardsValue: any = {};
  tableData: any[] = [];
  tableColumns: string[] = [];
  mapTableColumns: any = {};
  paginateOptions?: PaginateOptions;
  selectData?: any;
  dataLoadedInApi = false;

  columns: { id: string, title: string }[] = [
    {
      id: 'dataLancamento',
      title: "Data do lançamento",
    },
    {
      id: 'descricao',
      title: "Descrição",
    },
    {
      id: 'numero',
      title: "Número",
    },
    {
      id: 'situacao',
      title: "Situação",
    },
    {
      id: 'dataConfirmacao',
      title: "Data de confirmação",
    },
    {
      id: 'dadosBancarios',
      title: "Dados bancários",
    },
    {
      id: 'valorFinal',
      title: "Valor final",
    }
  ];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getDataInApi();
  }

  getDataInApi() {
    this.tableColumns = [];
    this.mapTableColumns = {};

    this.accountService.getAllUsers(ApiVersionEnum.V1).subscribe((response: ContaLegadoModel) => {
      this.cardsValue = {
        quantidadeRemessas: response.totalControleLancamento?.quantidadeRemessas,
        quantidadeLancamentos: response.totalControleLancamento?.quantidadeLancamentos,
        valorLancamentos: response.totalControleLancamento?.valorLancamentos
      };

      this.paginateOptions = {
        currentPage: response.indice - 1,
        elementsPerPage: response.tamanhoPagina,
        totalItems: response.totalElements,
      };

      this.columns.forEach(column => {
        this.tableColumns.push(column.id);
        this.mapTableColumns[column.id] = column.title;
      });

      this.tableData = response.listaControleLancamento.map(lancamento => {
        const lanCCCliente = lancamento.lancamentoContaCorrenteCliente;
        const { numeroAgencia, numeroContaCorrente } = lanCCCliente.dadosDomicilioBancario
        const dadosBancarios = `${lancamento.nomeBanco} Ag ${numeroAgencia} CC ${numeroContaCorrente}`;

        return {
          dataLancamento: lancamento.dataLancamentoContaCorrenteCliente,
          descricao: lanCCCliente.nomeTipoOperacao,
          numero: lanCCCliente.numeroRemessaBanco,
          situacao: lanCCCliente.nomeSituacaoRemessa,
          dataConfirmacao: lancamento.dataEfetivaLancamento,
          dadosBancarios: dadosBancarios,
          valorFinal: toPrince(lancamento.valorLancamentoRemessa),
          valorFinalValue: lancamento.valorLancamentoRemessa
        }
      });

      setTimeout(() => { // simular demora da api
        this.dataLoadedInApi = true;
      }, 3000);
    });
  }

  handleSelectData(dataRow: any) {
    if (dataRow) {
      const chartType: ChartType = 'pie';
      const chartOptions: any = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
          },
          datalabels: {
            formatter: (value: any) => {
              return value + " %";
            }
          },
        }
      };

      const currentPercent = (dataRow.valorFinalValue * 100) / this.cardsValue.valorLancamentos;
      const totalPercent = 100 - currentPercent;

      const chartData: ChartData<'pie', number[], string | string[]> = {
        labels: ['Este', 'Total'],
        datasets: [
          { data: [fixedNumber(currentPercent), fixedNumber(totalPercent)] }
        ]
      }

      this.selectData = {
        row: dataRow,
        graphic: {
          options: chartOptions,
          data: chartData,
          type: chartType
        }
      };
    } else {
      this.selectData = null;
    }

  }
}
