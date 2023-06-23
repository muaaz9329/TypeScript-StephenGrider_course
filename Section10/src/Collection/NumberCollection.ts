import Sorter from "../Sorter";
import { Collection } from "../types/types";

class NumberCollection extends Sorter implements Collection{
    constructor(public Data : number[]){
        super()
    }
    swap(LeftNumber:number , RightNumber:number): void {
        const Temp = this.Data[LeftNumber];
        this.Data[LeftNumber]=this.Data[RightNumber]
        this.Data[RightNumber]=Temp
    }
    get length(){
        return this.Data.length
    }
    compare(LeftIndex: any, RightIndex: any): boolean {
        return this.Data[LeftIndex] > this.Data[RightIndex]
    }
}

export default NumberCollection