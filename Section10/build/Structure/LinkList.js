"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = void 0;
class LinkNode {
    constructor(Num) {
        this.Data = Num;
        this.NextNode = null;
    }
}
class LinkList {
    constructor() {
        this.Start = null;
        this.End = null;
        this.Temp = null;
        this.size = 0;
    }
    insertFirstNode(data) {
        this.Start = new LinkNode(data);
        this.End = this.Start;
        this.size++;
    }
    insertAtStart(data) {
        if (this.size === 0) {
            this.insertFirstNode(data);
        }
        else {
            this.Temp = this.Start;
            this.Start = new LinkNode(data);
            this.Start.NextNode = this.Temp;
            this.size++;
        }
    }
    insertAtEnd(data) {
        if (this.size === 0) {
            this.insertFirstNode(data);
        }
        else if (this.size != 0 && this.End != null) {
            this.Temp = this.End;
            this.End = new LinkNode(data);
            this.Temp.NextNode = this.End;
            this.size++;
        }
    }
    display() {
        var _a, _b;
        if (this.size != 0 && this.Start != null) {
            this.Temp = this.Start;
            for (let i = 0; i < this.size; i++) {
                console.log((_a = this.Temp) === null || _a === void 0 ? void 0 : _a.Data);
                this.Temp = (_b = this.Temp) === null || _b === void 0 ? void 0 : _b.NextNode;
            }
        }
    }
}
exports.LinkList = LinkList;
