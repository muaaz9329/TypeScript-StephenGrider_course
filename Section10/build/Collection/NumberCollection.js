"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberCollection {
    constructor(Data) {
        this.Data = Data;
    }
    swap(LeftNumber, RightNumber) {
        const Temp = this.Data[LeftNumber];
        this.Data[LeftNumber] = this.Data[RightNumber];
        this.Data[RightNumber] = Temp;
    }
    get length() {
        return this.Data.length;
    }
    compare(LeftIndex, RightIndex) {
        return this.Data[LeftIndex] > this.Data[RightIndex];
    }
}
exports.default = NumberCollection;
