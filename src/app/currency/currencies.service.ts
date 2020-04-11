import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;


  getCurrenncies() {
    return this.http.get<Currency>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  }
}
