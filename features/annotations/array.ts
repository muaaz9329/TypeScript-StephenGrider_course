const carMaker:string[] = ['ford', 'toyota','chevy']
const twoDimentionString: string[][] = [];
const NewDate: Date[] = [new Date , new Date]


//typescript inference helping with variable

const newCar = carMaker[0] // infrenece made this newCar Variable String
const NewDimentionArray = NewDate.pop() // Again Inference at work here 

const flterarray = carMaker.map((item : string):string=>{
    return item;
}) // automatically providing us with methods and types


//flexible Array 
const FlexibleArray = ['this is string', new Date] // here infrence occurs which shows that this is array that can consists of string or Date Object
const AnotationArray: (string | Date)[] = [] // here Annotation is done by the user to show that This array can store both strings and Date Objects.