// type Annootations 


// single variable Anootations
var Work : string = 'hi';  //-> : string -> is type annotation
let age :number = 2;

//Classes

class Data{

}

let obj : Data = new Data();

//object literals

const XY_Cordinates : {x:number; y:number}={
    x:12,
    y:13
}

//Functions

const Printname : (working:string)=>number = (name:string)=>{
    console.log(name)
   return 0;
}

