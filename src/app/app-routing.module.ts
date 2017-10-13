import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnakeComponent} from "./snake/snake.component";
import {StockComponent} from "./stock/stock.component";
import {ChessComponent} from "./chess/chess.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {path: 'snake', component: SnakeComponent, data: {imageUrl: '/assets/images/snakeBackground.jpg'}},
  {path: 'dashboard', component: StockComponent},
  {path: 'chess', component: ChessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
