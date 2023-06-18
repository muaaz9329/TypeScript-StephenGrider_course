"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(Collection) {
        this.Collection = Collection;
    } //TODO: later gonna fix it
    sort() {
        const { length } = this.Collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.Collection.compare(j, j + 1)) {
                    this.Collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.default = Sorter;
