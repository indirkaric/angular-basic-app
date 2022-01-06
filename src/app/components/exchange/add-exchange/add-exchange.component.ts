import { Component, OnInit } from '@angular/core';
import {CryptoService} from "../../services/crypto.service";

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {
  name: string;
  website: string;
  volume_24h: number;
  error: string;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void { }

  onSave() {
    const exchange = {
      name: this.name,
      exchange_id: this.name,
      website: this.website,
      volume_24h: this.volume_24h
    };
    this.cryptoService.addExchange(exchange).subscribe();
  }

}
