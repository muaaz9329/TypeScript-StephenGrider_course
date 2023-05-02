const profile = {
  age: 12,
  name:"Muaaz",
  cords:{
    lat:12,
    lon:13
  },
  setAge(age:number):void{
    this.age = age;
  }
};

const {lat , lon}:{lat:number, lon:number}  = profile.cords

console.log(lat)
