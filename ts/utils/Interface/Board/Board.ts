import DomElements from "../DomElements.js";
import DomElement from "../DomElement.js";
import Pawn from "./Pawn.js";
import Tower from "./Tower.js";
import Horse from "./Horse.js";
import Bishop from "./Bishop.js";
import King from "./King.js";
import Queen from "./Queen.js";
import Piece from "./Piece.js";
import Team from "./Team.js";

class Board {
  private LIMIT_POSITION: number = 8;
  private board: DomElement[][] = [[], [], [], [], [], [], []];

  constructor() {
    this.setBoard();
    this.setPieces();
  }

  private setBoard() {
    const lockers: DomElements = new DomElements(".col");
    for (let i = 0; i < this.LIMIT_POSITION; i++) {
      this.board[i] = lockers.getFirstCount(8);
    }
  }

  private setPawns(): void {
    for (let i = 0; i < this.LIMIT_POSITION; i++) {
      this.board[1][i].setPiece(new Pawn(Team.WHITE));
      this.board[6][i].setPiece(new Pawn(Team.BLACK));
    }
  }

  private setTowers(): void {
    this.board[0][0].setPiece(new Tower(Team.WHITE));
    this.board[0][this.LIMIT_POSITION - 1].setPiece(new Tower(Team.WHITE));
    this.board[this.LIMIT_POSITION - 1][0].setPiece(new Tower(Team.BLACK));
    this.board[this.LIMIT_POSITION - 1][this.LIMIT_POSITION - 1].setPiece(
      new Tower(Team.BLACK)
    );
  }

  private setHorses(): void {
    this.board[0][1].setPiece(new Horse(Team.WHITE));
    this.board[0][this.LIMIT_POSITION - 2].setPiece(new Horse(Team.WHITE));
    this.board[this.LIMIT_POSITION - 1][1].setPiece(new Horse(Team.BLACK));
    this.board[this.LIMIT_POSITION - 1][this.LIMIT_POSITION - 2].setPiece(
      new Horse(Team.BLACK)
    );
  }

  private setBishop(): void {
    this.board[0][2].setPiece(new Bishop(Team.WHITE));
    this.board[0][this.LIMIT_POSITION - 3].setPiece(new Bishop(Team.WHITE));
    this.board[this.LIMIT_POSITION - 1][2].setPiece(new Bishop(Team.BLACK));
    this.board[this.LIMIT_POSITION - 1][this.LIMIT_POSITION - 3].setPiece(
      new Bishop(Team.BLACK)
    );
  }

  private setRoyalty(): void {
    this.board[0][3].setPiece(new Queen(Team.WHITE));
    this.board[0][this.LIMIT_POSITION - 4].setPiece(new King(Team.WHITE));
    this.board[this.LIMIT_POSITION - 1][3].setPiece(new Queen(Team.BLACK));
    this.board[this.LIMIT_POSITION - 1][this.LIMIT_POSITION - 4].setPiece(
      new King(Team.BLACK)
    );
  }

  private setPieces() {
    this.setPawns();
    this.setTowers();
    this.setHorses();
    this.setBishop();
    this.setRoyalty();
  }
}

export default Board;
