import { Analyzer } from './types/AnalyzerInterface';
import { MatchData } from './types/MathType';
import { OutpurTarget } from './types/OutputTarget_interface';
export class Summary{
    analyzer:Analyzer;
    OutpurTarget :OutpurTarget

    constructor(newAnalyer:Analyzer , Target:OutpurTarget){
        this.OutpurTarget = Target;
        this.analyzer = newAnalyer;
    }
    buildAndPrintReport(data:MatchData[]){
        const Report = this.analyzer.run(data);
        this.OutpurTarget.print(Report);
    }
}