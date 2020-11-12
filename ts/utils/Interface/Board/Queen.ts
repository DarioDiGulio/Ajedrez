import Piece from "./Piece.js";
import Pieces from "./Pieces.js";
import Team from "./Team.js";

export default class Pawn extends Piece {

  constructor(team: Team) {
    super(Pieces.Queen, team);
    this.html;
    team == Team.BLACK
      ? this.setHtml(Pieces.HTMLQueenBlack)
      : this.setHtml(Pieces.HTMLQueenWhite);
  }

  calculateMoves(): void {
    throw new Error("Method not implemented.");
  }
}
