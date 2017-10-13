import {Component} from '@angular/core';
import {COLORS} from "./constants";
import {ChessService} from "./chess.service";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {
  public rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
  public columns = ["1", "2", "3", "4", "5", "6", "7", "8"];
  public finalBoard: Square[][] = this.setBoard(this.rows, this.columns);

  constructor(chessService: ChessService) {
  }

  setBoard(row: any[], column: any[]) {
    let newBoard: Square[][];
    newBoard = new Array<Square[]>(8);
    let change = false;
    // console.log("here", newBoard);
    for (let i = 1; i <= 8; i++) {
      newBoard[i - 1] = new Array<Square>(8);
      for (let j = 1; j <= 8; j++) {
        newBoard[i - 1][j - 1] = {
          id: row[j - 1] + column[i - 1],
          whiteTile: change,
          piece: this.getPiece(row[j - 1] + column[i - 1])
        };
        // console.log(newBoard[j]);
        change = !change;
      }
      change = !change;
    }
    console.log(newBoard);
    return newBoard;
  }

  setBoardColor(i: number, j: number) {
    // console.log(this.finalBoard);
    if (this.finalBoard[i][j].whiteTile === true) {
      return COLORS.WHITE_TILE
    } else if (this.finalBoard[i][j].whiteTile === false) {
      return COLORS.BLACK_TILE;
    }
    return COLORS.BLACK_TILE;
  }

  getPiece(a: any): any {
    // console.log(a);
    if (a === "a2") {
      return 'PAWN'
    } else if (a === "b2") {
      return 'PAWN'
    } else if (a === "c2") {
      return 'PAWN'
    } else if (a === "d2") {
      return 'PAWN'
    } else if (a === "e2") {
      return 'PAWN'
    } else if (a === "f2") {
      return 'PAWN'
    } else if (a === "g2") {
      return 'PAWN'
    } else if (a === "h2") {
      return 'PAWN'
    } else if (a === "a1") {
      return 'ROOK'
    } else if (a === "h1") {
      return 'ROOK'
    } else return ""
  }
}

export class Square {
  id: String = "";
  whiteTile: boolean = false;
  piece: String = "";
}
