"use strict";
// Genraics
// these are used to assing the type of data in classes
// Works same as function argument 
// function example
const addanyNumber = (a, b) => {
    return a + b;
};
// generic works same as function arguments;
class HoldData {
    constructor(data) {
        this.Data = data;
    }
}
// now this class have genraic <typeOfData> , this work same as argument in typescrpt
const holdNumber = new HoldData(12);
console.log(holdNumber.Data);
const holdString = new HoldData("Muaaz");
console.log(holdString.Data);
// can be understood from this simple example
