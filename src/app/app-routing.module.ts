import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnakeComponent} from "./snake/snake.component";
import {StockComponent} from "./stock/stock.component";
import {ChessComponent} from "./chess/chess.component";
import {AboutMeComponent} from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about-me',
    pathMatch: 'full',
  },
  {path: 'snake', component: SnakeComponent, data: {imageUrl: '/assets/images/snakeBackground.jpg'}},
  {path: 'dashboard', component: StockComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'chess', component: ChessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
