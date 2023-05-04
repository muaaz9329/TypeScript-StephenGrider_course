const oldVehical = {
    model:2003,
    broken:true,
    Price:20000
}

const PrintVehical = (vehical:{model:number,broken:boolean,Price:number}):void=>{
    console.log(`Model of Vehical : ${vehical.model}\nbroken: ${vehical.broken}\nPrice:${vehical.Price}`);
}
PrintVehical(oldVehical)