import { MatchData } from "./MathType";

export interface Analyzer{
    run(matches:MatchData[]):string;
}