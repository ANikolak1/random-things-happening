import {Component} from '@angular/core';
import {COLORS} from "./constants";
import {ChessService} from "./chess.service";
import {dragula, DragulaService} from "ng2-dragula";
import {until} from "selenium-webdriver";
import elementTextContains = until.elementTextContains;
import {containsElement} from "@angular/animations/browser/src/render/shared";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {
  public rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
  public columns = ["1", "2", "3", "4", "5", "6", "7", "8"];
  public finalBoard: Square[][] = this.setBoard(this.rows, this.columns);
  public firstMove: boolean;

  constructor(chessService: ChessService,
              dragulaService: DragulaService) {
    dragulaService.setOptions('fourth-page', {copy: true, copySortSource: true});
    dragulaService.drop.subscribe((value) => {
      console.log(value);
      console.log(value[2].innerText); //Where piece moved to
      console.log(value[1].classList[0]); //What its value is (determine if white or black)
      console.log(value[1].y);
      console.log(value[1].x);
      this.pawnFirstMove(value);
      this.onDrop(value);
    });
  }

  onDrop(value: any) {
  if (value[2] == null)
  return;
  if (value[2].id !== value[2].id && value[2].id !== value[3].id)
    value[1].remove();
};

  pawnFirstMove(value: any) {

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
    // console.log(newBoard);
    return newBoard;
  }

  setBoardColor(i: number, j: number) {
    // console.log(this.finalBoard);
    if (this.finalBoard[i][j].whiteTile === true) {
      return COLORS.WHITE_TILE
    } else if (this.finalBoard[i][j].whiteTile === false) {
      return COLORS.BLACK_TILE;
    } return COLORS.BLACK_TILE;
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
    }else if (a === "d1") {
      return 'KING'
    }else if (a === "e1") {
      return 'QUEEN'
    }else if (a === "b1") {
      return 'KNIGHT'
    }else if (a === "g1") {
      return 'KNIGHT'
    }else if (a === "c1") {
      return 'BISHOP'
    }else if (a === "f1") {
      return 'BISHOP'
    }else if (a === "a7") {
      return 'WPAWN'
    } else if (a === "b7") {
      return 'WPAWN'
    } else if (a === "c7") {
      return 'WPAWN'
    } else if (a === "d7") {
      return 'WPAWN'
    } else if (a === "e7") {
      return 'WPAWN'
    } else if (a === "f7") {
      return 'WPAWN'
    } else if (a === "g7") {
      return 'WPAWN'
    } else if (a === "h7") {
      return 'WPAWN'
    } else if (a === "a8") {
      return 'WROOK'
    } else if (a === "h8") {
      return 'WROOK'
    }else if (a === "e8") {
      return 'WKING'
    }else if (a === "d8") {
      return 'WQUEEN'
    }else if (a === "b8") {
      return 'WKNIGHT'
    }else if (a === "g8") {
      return 'WKNIGHT'
    }else if (a === "c8") {
      return 'WBISHOP'
    }else if (a === "f8") {
      return 'WBISHOP'
    } else return ""
  }
}

export class Square {
  id: String = "";
  whiteTile: boolean = false;
  piece: String = "";
}
