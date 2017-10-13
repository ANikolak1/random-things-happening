import {trigger, state, style, animate, transition} from '@angular/animations';
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {StockService} from "./stock.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  animations: [
    trigger('trending', [
      state('DOWN', style({
        'background-color': 'red'
      })),
      state('UP', style({
        'background-color': 'green'
      })),
      transition('UP => DOWN', [
        style({transform: 'translateX(-100%)'}),
        animate(3000)
      ]),
      transition('DOWN => UP', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class StockComponent implements OnInit{
  title = 'Stock Dashboard';
  stockPrices = [];
  stockService: StockService;

  constructor(stockService: StockService,
              private router: Router,)
  {
    this.stockService = stockService;
  }

  ngOnInit() {
    // check for updated prices
    setInterval(() => {this.getStockPrices(); }, 1000);
  }

  getStockPrices() {
    this.stockService.getStockPrices().then(prices => {
      // console.log('just got prices: ', prices);
      this.stockPrices = prices;
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToSnake() {
    this.router.navigate(['/snake']);
  }

}
