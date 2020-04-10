import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-currency-component',
  templateUrl: './currency-component.component.html',
  styleUrls: ['./currency-component.component.css']
})
export class CurrencyComponentComponent implements OnInit,OnChanges {
  currencyWidth:number;
  price:number=250;
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.currencyWidth=1000/this.price; 
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
