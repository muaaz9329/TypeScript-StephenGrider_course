import {faker} from '@faker-js/faker'

export class Company{
    name_of_company:string;
    short_name:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
        this.name_of_company = faker.company.name();
        this.short_name = faker.company.catchPhrase();
        this.location = {
            lat : Number(faker.address.latitude()),
            lng:Number(faker.address.longitude()),
        }
    }
}