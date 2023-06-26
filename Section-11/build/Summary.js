"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(newAnalyer, Target) {
        this.OutpurTarget = Target;
        this.analyzer = newAnalyer;
    }
    buildAndPrintReport(data) {
        const Report = this.analyzer.run(data);
        this.OutpurTarget.print(Report);
    }
}
exports.Summary = Summary;
