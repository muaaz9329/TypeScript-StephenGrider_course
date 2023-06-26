import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { Summary } from './Summary';
import { AverageGoalAnalysis } from './AverageGoalAnalysis';
import { ConsoleReport } from './OutputTaget';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('./football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let newSummary = new Summary(new AverageGoalAnalysis , new ConsoleReport )

newSummary.buildAndPrintReport(matchReader.matches);


