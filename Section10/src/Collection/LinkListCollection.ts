import Sorter from "../Sorter";
import { LinkList, LinkNodeType } from "../Structure/LinkList";
import { Collection } from "../types/types";

class LinkListCollection extends Sorter implements Collection {

  constructor(public data: LinkList) {
    super();
  }
  get length() {
    return this.data.size;
  }
  swap(LeftIndex: number, RightIndex: number): void {
    
  
    let leftNode: LinkNodeType | undefined = this.data.Start;
    let rightNode: LinkNodeType | undefined = this.data.Start;
  
    // Traverse to the left node
    for (let i = 0; i < LeftIndex; i++) {
      leftNode = leftNode?.NextNode;
    }
  
    // Traverse to the right node
    for (let i = 0; i < RightIndex; i++) {
      rightNode = rightNode?.NextNode;
    }
  
  
    // Swap the nodes by updating the next pointers
    let leftHand = leftNode?.Data;
    leftNode!.Data = rightNode?.Data;
    rightNode!.Data = leftHand;

  
   
  }
  
  compare(LeftIndex: number, RightIndex: number): boolean {

  let temp: LinkNodeType;
  let temp2: LinkNodeType;
    
    temp = this.data.Start;
    for (let i = 0; i < LeftIndex; i++) {
      temp = temp?.NextNode;
    }
    temp2 = temp?.NextNode;
   
    return temp?.Data > temp2?.Data;
    
  }
  display() {
    this.data.display();
  }
}

export default LinkListCollection;
