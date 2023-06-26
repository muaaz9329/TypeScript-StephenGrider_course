// Genraics
 // these are used to assing the type of data in classes
 // Works same as function argument 
 // function example


 const addanyNumber = (a:number , b :number):number =>{
    return a +b ;
 }

 // generic works same as function arguments;

 class HoldData <typeOfData> {
    Data : typeOfData;
    constructor(data: typeOfData){
        this.Data = data;
    }
 }

 // now this class have genraic <typeOfData> , this work same as argument in typescrpt

 const holdNumber = new HoldData <number> (12);
console.log(holdNumber.Data);
const holdString = new HoldData <string> ("Muaaz");
console.log(holdString.Data);

// can be understood from this simple example