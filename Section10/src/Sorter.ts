import NumberCollection from "./Collection/NumberCollection";
import { Collection } from "./types/types";


class Sorter {
  constructor(public Collection : Collection) {} //TODO: later gonna fix it
  sort(): void {
    const {length} = this.Collection
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        
        if (this.Collection.compare(j,j+1)) {
        
          this.Collection.swap(j,j+1)
          
        }
      }
    }
  }
}

export default Sorter;
