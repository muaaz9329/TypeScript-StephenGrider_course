import { MatchResult } from "./MatchResult";
import { Analyzer } from "./types/AnalyzerInterface";
import { MatchData } from "./types/MathType";
export class AverageGoalAnalysis implements Analyzer{
    run(matches: MatchData[]): string {
        let manUnitedWins = 0;
        let NoOfGames = 0

for (let match of matches) {
  if (match[1] === 'Man United' ) {
    manUnitedWins+=match[3]
    NoOfGames++
  } else if (match[2] === 'Man United' ) {
    manUnitedWins+=match[4];
    NoOfGames++
  }
}
    return `Average of Goal is :${manUnitedWins/NoOfGames}`

    }
}