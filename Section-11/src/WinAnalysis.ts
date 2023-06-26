import { MatchResult } from "./MatchResult";
import { Analyzer } from "./types/AnalyzerInterface";
import { MatchData } from "./types/MathType";

export class WinAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    let manUnitedWins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        manUnitedWins++;
      }
    }

    return `Man United won ${manUnitedWins} games`;
  }
}
