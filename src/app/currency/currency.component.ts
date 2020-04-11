import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import { Currency } from './currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies: Currency;

  constructor(public currenciesService: CurrenciesService) { }

  ngOnInit() {
    return this.currenciesService.getCurrenncies().subscribe(data => {
      this.currencies = data;
      console.log(this.currencies);
    });

  }


}
