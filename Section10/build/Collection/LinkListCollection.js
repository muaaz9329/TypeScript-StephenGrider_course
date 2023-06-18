"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkListCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.size;
    }
    swap(LeftIndex, RightIndex) {
        let leftNode = this.data.Start;
        let rightNode = this.data.Start;
        // Traverse to the left node
        for (let i = 0; i < LeftIndex; i++) {
            leftNode = leftNode === null || leftNode === void 0 ? void 0 : leftNode.NextNode;
        }
        // Traverse to the right node
        for (let i = 0; i < RightIndex; i++) {
            rightNode = rightNode === null || rightNode === void 0 ? void 0 : rightNode.NextNode;
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
        }
        else if (this.data.Start === rightNode) {
            this.data.Start = leftNode;
        }
    }
    compare(LeftIndex, RightIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.temp = this.data.Start;
        for (let i = 0; i < LeftIndex; i++) {
            this.temp = (_a = this.temp) === null || _a === void 0 ? void 0 : _a.NextNode;
        }
        this.temp2 = (_b = this.temp) === null || _b === void 0 ? void 0 : _b.NextNode;
        console.log(((_c = this.temp) === null || _c === void 0 ? void 0 : _c.Data) > ((_d = this.temp2) === null || _d === void 0 ? void 0 : _d.Data));
        return ((_e = this.temp) === null || _e === void 0 ? void 0 : _e.Data) > ((_f = this.temp2) === null || _f === void 0 ? void 0 : _f.Data);
    }
    display() {
        this.data.display();
    }
}
exports.default = LinkListCollection;
