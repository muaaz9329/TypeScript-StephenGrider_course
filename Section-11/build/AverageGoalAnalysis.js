"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalAnalysis = void 0;
class AverageGoalAnalysis {
    run(matches) {
        let manUnitedWins = 0;
        let NoOfGames = 0;
        for (let match of matches) {
            if (match[1] === 'Man United') {
                manUnitedWins += match[3];
                NoOfGames++;
            }
            else if (match[2] === 'Man United') {
                manUnitedWins += match[4];
                NoOfGames++;
            }
        }
        return `Average of Goal is :${manUnitedWins / NoOfGames}`;
    }
}
exports.AverageGoalAnalysis = AverageGoalAnalysis;
