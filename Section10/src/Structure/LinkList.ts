class LinkNode{
    Data:number | null | any;
    NextNode:LinkNodeType
    constructor(Num:number){
        this.Data = Num;
        this.NextNode = null
    }
}
export  type LinkNodeType = LinkNode | null | undefined

export class LinkList{
    Start : LinkNodeType
    End : LinkNodeType
 private   Temp : LinkNodeType
    size : number
    constructor(){
        this.Start = null;
        this.End = null;
        this.Temp = null;
        this.size =0;
    }
      private insertFirstNode(data:number){
        this.Start = new LinkNode(data);
        this.End = this.Start;
        this.size++;
    }
    insertAtStart(data:number){
        if(this.size ===0){
          this.insertFirstNode(data)
        }
        else{
            this.Temp = this.Start;
            this.Start = new LinkNode(data);
            this.Start.NextNode = this.Temp;
            this.size++;
        }
    }
    insertAtEnd(data:number){
        if(this.size===0){
            this.insertFirstNode(data)
        }
        else if(this.size !=0 && this.End !=null){
            this.Temp = this.End;
            this.End = new LinkNode(data);
            this.Temp.NextNode = this.End; 
            this.size++;
        }
    }

    display(){
        if(this.size != 0 && this.Start != null ){
            this.Temp = this.Start;
        for(let i=0 ; i<this.size ; i++){
            console.log(this.Temp?.Data)
            this.Temp = this.Temp?.NextNode
        }
        }
    }
}

