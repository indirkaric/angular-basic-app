import {Component, OnInit} from '@angular/core';
import {Exchange} from "../../models/Exchange";
import {CryptoService} from "../../services/crypto.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  exchanges: Exchange[] = [];
  length = 100
  pageSize = 2;
  currentPage = 0;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getExchanges(this.pageSize, this.currentPage)
      .subscribe((exchanges) => (this.exchanges = exchanges));
  }

  deleteExchange(exchange: Exchange) {
    this.cryptoService.deleteExchange(exchange)
      .subscribe(() => this.exchanges = this.exchanges.filter(filteredExchange => filteredExchange.id !== exchange.id));
  }

  updateExchange(exchange: Exchange) {
    this.cryptoService.updateExchange(exchange).subscribe();
  }

   pageChanged(event: PageEvent) {
    this.currentPage = this.handlePageNumber(event, this.currentPage)
    this.pageSize = event.pageSize
    this.cryptoService.getExchanges(this.pageSize, this.currentPage )
      .subscribe((exchanges) => (this.exchanges = exchanges));
    return event
  }

  handlePageNumber(event:PageEvent, currentPage:number) {
      if (event.previousPageIndex != null) {
        if (event.pageIndex > currentPage) {
          return event.pageIndex
        }
        else {
          return event.previousPageIndex -1
        }
      }
      return event.pageIndex
  }

}
