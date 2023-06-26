"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const AverageGoalAnalysis_1 = require("./AverageGoalAnalysis");
const OutputTaget_1 = require("./OutputTaget");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let newSummary = new Summary_1.Summary(new AverageGoalAnalysis_1.AverageGoalAnalysis, new OutputTaget_1.ConsoleReport);
newSummary.buildAndPrintReport(matchReader.matches);
