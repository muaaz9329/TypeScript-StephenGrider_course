import { Collection } from "../types/types";
import Sorter from "../Sorter";
export class CharacterCollection extends Sorter implements Collection {
  public data: string;
  constructor(Data: string) {
    super();
    this.data = Data;
  }

  get length() {
    return this.data.length;
  }
  swap(LeftIndex: number, RightIndex: number): void {
    const Character = this.data.split("");
    const leftHand = Character[LeftIndex];
    Character[LeftIndex] = Character[RightIndex];
    Character[RightIndex] = leftHand;

    this.data = Character.join("");
  }
  compare(LeftIndex: any, RightIndex: any): boolean {
    return (
      this.data[LeftIndex].toLowerCase() > this.data[RightIndex].toLowerCase()
    );
  }
}
