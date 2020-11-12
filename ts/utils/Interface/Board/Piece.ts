import Status from "../Status.js";
import Team from "./Team.js";

abstract class Piece {
  private name: string;
  private position: number[];
  private image: string;
  private status: Status;
  protected html: string;
  private team: Team;

  constructor($name: string, $team: Team) {
    this.name = $name;
    this.status = Status.Alive;
    this.team = $team;
  }

  /**
   * Setter $html
   * @param {string} innerHTML
   */
  public set $html(innerHTML: string) {
    this.html = innerHTML;
  }

  /**
   * Getter $html
   * @return {string}
   */
  public get $html(): string {
    return this.html;
  }

  public setHtml(innerHTML: string): void {
    this.$html = innerHTML;
  }

  abstract calculateMoves(): void;
}

export default Piece;
