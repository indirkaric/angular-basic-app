import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Exchange} from "../models/Exchange";
import {RequestHelper} from "../helper/request.helper";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiBaseUrl = 'http://localhost:3004/exchanges'

  constructor(private http: HttpClient) { }

  getExchanges(limit: number, page: number): Observable<Exchange[]> {
    const paginationUrl = `${this.apiBaseUrl}/?_limit=${limit}&_page=${page}`
    return this.http.get<Exchange[]>(paginationUrl)
  }

  deleteExchange(exchange: Exchange) {
    const deleteUrl = `${this.apiBaseUrl}/${exchange.id}`
    return this.http.delete<Exchange>(deleteUrl)
  }

  updateExchange(exchange: Exchange): Observable<Exchange> {
    const updateUrl = `${this.apiBaseUrl}/${exchange.id}`
    return this.http.put<Exchange>(updateUrl, exchange, RequestHelper.httpOptions)
  }

  addExchange(exchange: Exchange): Observable<Exchange> {
    return this.http.post<Exchange>(this.apiBaseUrl, exchange, RequestHelper.httpOptions)
  }

}
