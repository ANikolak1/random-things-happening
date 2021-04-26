// import Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// a local module, our main component
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SnakeService} from "./snake/snake.service";
import {SnakeComponent} from "./snake/snake.component";
import { StockComponent } from './stock/stock.component';
import {StockService} from "./stock/stock.service";
import { NavigationComponent } from './navigation/navigation.component';
import { ChessComponent } from './chess/chess.component';
import {ChessService} from "./chess/chess.service";
import {DragulaModule, DragulaService} from "ng2-dragula";
import { AboutMeComponent } from './about-me/about-me.component';
import {DraggableDirective} from '../assets/directives/draggable.directive';
import {DroppableDirective} from '../assets/directives/droppable.directive';

const directives = [DraggableDirective, DroppableDirective];

@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    StockComponent,
    NavigationComponent,
    ChessComponent,
    AboutMeComponent,
    directives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragulaModule,
  ],
  providers: [StockService, SnakeService, ChessService, DragulaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
