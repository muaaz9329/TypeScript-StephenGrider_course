const drink ={
    color:'brown',
    carbonation:true,
    sugar:40
}

//* tuples are just arrays with fixed type sequences
//with out using type alias

const pepsi :[string,boolean,number] = ['brown',true,40]

//with using type alias
type Drink = [string , boolean , number];

const sprite: Drink = ['clear',true , 50]