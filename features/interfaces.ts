const oldVehical = {
    model:2003,
    broken:true,
    Price:20000
}

const PrintVehical = (vehical:{model:number,broken:boolean,Price:number}):void=>{
    console.log(`Model of Vehical : ${vehical.model}\nbroken: ${vehical.broken}\nPrice:${vehical.Price}`);
}
PrintVehical(oldVehical)

// They Type Anotation of PrintVehical function is very long and makes the code not good for readbility
// so in order to resolve this problem we can use interface

interface Vehical {
    model:number;
    Price:number;
    broken:boolean;
   
}

const PrintVehical_UsingInterface=(vehical : Vehical):void=>{
    console.log(`Model of Vehical : ${vehical.model}\nbroken: ${vehical.broken}\nPrice:${vehical.Price}`);
}

PrintVehical_UsingInterface(oldVehical) // As we can this is Reusable Annotation using interface and it overall makes the code more readable



// you can also add other primative data type in the interfaces as well , like date or ther types etc.
//you can also add Funtion and describe the date type it will return in Interfaces

interface NewInterface_withFunction{
    name:string;
    year:Date;
    broken:boolean;
    summary():string;
}


const newOldCar_obj = {
    name:'old civic',
    year :new Date(),
    broken:true,
    summary(){
        return this.broken ? `this vehical is broken` : 'this vehical is okay'
    }
}


const IsVehicalBroken = (vehical : NewInterface_withFunction):void =>{
   console.log( vehical.summary());

}

IsVehicalBroken(newOldCar_obj);



// typescript under the hood only cheack weather the item given the interface object 
// type have the properties described in the interface so lets say if a function 
// have interface property of broken and chechBroken which is function

interface Reportable {
    checkBroken():string
}

const newObj ={
    name:'Mehran',
    year:2002,
    broken:true,
    checkBroken(){
        return this.broken ? `Car is Shit brooo` : `Bruhhh car is bustin ass Frrr`
    }
}

const isCarBroken = (item : Reportable):void =>{
   console.log( item.checkBroken())
}

isCarBroken(newObj) // as you can see newObj have 4 property and the interface Reportable have 2 ,
// in function isCarBroken the item is given Reportable type , and when isCarBroken() finction is called 
//with newObj as param then typescript under the hood only cares to check weather newObj object have 
//the Decribed properties of Reportable interface 


// Here is an example of code Reuseablity in typeScript using interfaces

const Drink ={
    name : 'coke',
    carbonated :true,
    sugar : 40,
    checkBroken() :string {
        return this.sugar >30 ? `Dawwggg sugar is High as fuck man`:`this shit is fine as fuck`
    }
}
isCarBroken(Drink)