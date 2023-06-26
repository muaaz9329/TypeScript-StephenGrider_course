"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResult_1 = require("./MatchResult");
class WinAnalysis {
    run(matches) {
        let manUnitedWins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                manUnitedWins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                manUnitedWins++;
            }
        }
        return `Man United won ${manUnitedWins} games`;
    }
}
exports.WinAnalysis = WinAnalysis;
