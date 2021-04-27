import {Component} from '@angular/core';
import {COLORS} from './constants';
import {Draggable} from '@shopify/draggable';
import {MouseSensor} from '@shopify/draggable';
import {Sortable} from '@shopify/draggable';
import {Droppable} from '@shopify/draggable';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
  host: {
    // '(document:mouseenter)': 'movePiece($event)',
    // '(document:mousemove)': 'myMouseMove($event)',
  }
})
export class ChessComponent {
  public rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  public columns = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public finalBoard: Square[][] = this.setBoard(this.rows, this.columns);
  public firstMove: boolean;
  public currentTile: any;
  public currentPiece: any;

  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      console.log('hi', value);
      // this.onDrop(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  drop(value: any, col) {
    console.log(value, col.id);

  }

  onRemoveModel(value: any) {
    let [el, source] = value;
  }

  // How to get current tile on the chess board
  myMethod(e) {
    // console.log(e.toElement.title);
    this.currentTile = e.toElement.title;
  }

  // How to get the current selected piece
  myMouseMove(e) {
    // console.log(e.toElement.id);
    this.currentPiece = e.toElement.id;
  }

  setBoard(row: any[], column: any[]) {
    let newBoard: Square[][];
    newBoard = new Array<Square[]>(8);
    let change = false;
    for (let i = 1; i <= 8; i++) {
      newBoard[i - 1] = new Array<Square>(8);
      for (let j = 1; j <= 8; j++) {
        newBoard[i - 1][j - 1] = {
          id: row[j - 1] + column[i - 1],
          whiteTile: change,
          piece: this.getPiece(row[j - 1] + column[i - 1])
        };
        change = !change;
      }
      change = !change;
    }
    return newBoard;
  }

  setBoardColor(i: number, j: number) {
    if (this.finalBoard[i][j].whiteTile === true) {
      return COLORS.WHITE_TILE;
    } else if (this.finalBoard[i][j].whiteTile === false) {
      return COLORS.BLACK_TILE;
    }
    return COLORS.BLACK_TILE;
  }

  getPiece(a: any): any {
    if (a === 'a2') {
      return 'PAWN';
    } else if (a === 'b2') {
      return 'PAWN';
    } else if (a === 'c2') {
      return 'PAWN';
    } else if (a === 'd2') {
      return 'PAWN';
    } else if (a === 'e2') {
      return 'PAWN';
    } else if (a === 'f2') {
      return 'PAWN';
    } else if (a === 'g2') {
      return 'PAWN';
    } else if (a === 'h2') {
      return 'PAWN';
    } else if (a === 'a1') {
      return 'ROOK';
    } else if (a === 'h1') {
      return 'ROOK';
    } else if (a === 'd1') {
      return 'KING';
    } else if (a === 'e1') {
      return 'QUEEN';
    } else if (a === 'b1') {
      return 'KNIGHT';
    } else if (a === 'g1') {
      return 'KNIGHT';
    } else if (a === 'c1') {
      return 'BISHOP';
    } else if (a === 'f1') {
      return 'BISHOP';
    } else if (a === 'a7') {
      return 'WPAWN';
    } else if (a === 'b7') {
      return 'WPAWN';
    } else if (a === 'c7') {
      return 'WPAWN';
    } else if (a === 'd7') {
      return 'WPAWN';
    } else if (a === 'e7') {
      return 'WPAWN';
    } else if (a === 'f7') {
      return 'WPAWN';
    } else if (a === 'g7') {
      return 'WPAWN';
    } else if (a === 'h7') {
      return 'WPAWN';
    } else if (a === 'a8') {
      return 'WROOK';
    } else if (a === 'h8') {
      return 'WROOK';
    } else if (a === 'e8') {
      return 'WKING';
    } else if (a === 'd8') {
      return 'WQUEEN';
    } else if (a === 'b8') {
      return 'WKNIGHT';
    } else if (a === 'g8') {
      return 'WKNIGHT';
    } else if (a === 'c8') {
      return 'WBISHOP';
    } else if (a === 'f8') {
      return 'WBISHOP';
    } else {
      return '';
    }
  }
}

export class Square {
  id: String = '""';
  whiteTile: boolean = false;
  piece: String = '""';
}
