import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exchange} from "../../models/Exchange";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exchange-item',
  templateUrl: './exchange-item.component.html',
  styleUrls: ['./exchange-item.component.css']
})
export class ExchangeItemComponent implements OnInit {

  @Input() exchange: Exchange;
  @Output() onDeleteExchange : EventEmitter<Exchange> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(exchange: Exchange) {
    this.onDeleteExchange.emit(exchange);
  }
}
