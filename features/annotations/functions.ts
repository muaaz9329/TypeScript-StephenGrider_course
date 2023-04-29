const Multiplt2Nmbr = (a:number ,b: number ):number =>{
    return a *b;
}

//* Disecting this statement
/**
 * //* (a:number <-- {type of first variable} ,b: number <--{type of second Variable} ): number <--{type of return value , could be "any" or type you want like number } 
 * //*    
 */


interface WeatherInterface{
    date: Date;
    weather : string;
    Day:string
}



class WeatherClass{
    constructor( date : Date , weather : string , day: string){
        this.Date = date;
        this.Day = day;
        this.weather = weather
    }
    Date: Date;
    weather :string;
    Day:string
}

class WeatherClassFuncs extends WeatherClass{
    constructor(date : Date , weather : string , day: string){
        super(date,weather,day);
    }
    __testFunc(){
       
        console.log(this)
    }
}

const PrintingWeather = ({Date,weather,Day} : WeatherClass) => {

    // console.log(`Today Weather is ${weather}, date is ${Date.getFullYear()} and Day is ${Day}`)

}

PrintingWeather(new WeatherClassFuncs(new Date , 'Sunny' , 'Monday'))
const obj = new WeatherClassFuncs(new Date , 'Sunny' , 'Monday')
obj.__testFunc()