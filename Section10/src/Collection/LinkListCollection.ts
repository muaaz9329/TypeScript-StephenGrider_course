import { LinkList, LinkNodeType } from "../Structure/LinkList";
import { Collection } from "../types/types";

class LinkListCollection implements Collection {

  temp: LinkNodeType;
  temp2: LinkNodeType;
  constructor(public data: LinkList) {}
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
  
    // Check if nodes exist at the specified indices
    if (!leftNode || !rightNode) {
      return;
    }
  
    // Swap the nodes by updating the next pointers
    let tempNext = leftNode.NextNode;
    leftNode.NextNode = rightNode.NextNode;
    rightNode.NextNode = tempNext;
  
    // Update the Start pointer if needed
    if (this.data.Start === leftNode) {
      this.data.Start = rightNode;
    } else if (this.data.Start === rightNode) {
      this.data.Start = leftNode;
    }
  }
  
  compare(LeftIndex: number, RightIndex: number): boolean {
    
    this.temp = this.data.Start;
    for (let i = 0; i < LeftIndex; i++) {
      this.temp = this.temp?.NextNode;
    }
    this.temp2 = this.temp?.NextNode;
    console.log(this.temp?.Data > this.temp2?.Data)
    return this.temp?.Data > this.temp2?.Data;
    
  }
  display() {
    this.data.display();
  }
}

export default LinkListCollection;
