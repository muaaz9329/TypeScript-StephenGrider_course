class Vehical{
    horn():string{
        return 'beep beep'
    }
    drive():string{
        return 'Chuga chuga'
    }
}

const mehran = new Vehical();
console.log(mehran.horn())


// Basic inheritance 

class Car extends Vehical{

    drive(): string {
        return 'vroom vroom'
    }
}

const newCorolla = new Car();
console.log(newCorolla.drive())
console.log(newCorolla.horn())
// here class car have all the mathods and properties of its parent Class Vehical
//most of the oop is same as Java that I have done is last sem
// Can also do method overloading like I have done with Drive method


// Modifiers

//its same as java 
// Private only allow the access to methods and fields within class , not to objects and childs
// Public allows free access to all
// protected allow the access to class methods to only child classes not to objects

// the reason to use these modifiers is not to add any kind of application security layer
// the reason we use modifiers is to not allow the other developers to get access to some methods that you
// might think they might break , so you restict the access to that special method




//* Fields and constuctor in classes

class Book {
   private author : string = 'null'; // intializer or default value must be given in order for typescript to make it work

   setAuthor(author : string):void{
    this.author = author;
   }
   getAuthor():string{
    return this.author;
   }
}

// this is how fields are made in Javascript classes


//Using constructor
// first method
class Student{
     public student: string;
     constructor(name:string){
        this.student = name
     }
}

// second method that is only given in Javascript as i have not seen this in java
class Class{
    constructor(public noOfKids:number){}
}
const Cosc3A = new Class(48);
console.log(Cosc3A.noOfKids);


// The use of super in Javascript

class Parent{
    constructor(public name:string){}
    NewMeth(){
        console.log('hi I am new Method');
    }
}

class Child extends Parent{
    constructor(public FatherName:string , name:string){
        super(name) // this is the parent constructor that must be called
                    // When Working with the child Class constructor and its arguments must be fullfilles
    }
}

const NewObj = new Child('Sarfraz','Muaaz');
console.log(NewObj.name);
