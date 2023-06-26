import { OutpurTarget } from './types/OutputTarget_interface';

export class ConsoleReport implements OutpurTarget{
    print(report: string): void {
        console.log(report)
    }
}