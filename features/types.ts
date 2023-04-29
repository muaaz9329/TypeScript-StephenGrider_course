const today = new Date();
console.log(today.getDay())

const data = {
    age :23
}

class Data {
  
   constructor(){
    console.log('I Ran Muaaz')

   }
  

   PrintName(name:string){
    console.log(`I am Printing Name : ${name}`)
   }

}

const NewObj = new Data;

NewObj.PrintName("muaaz")