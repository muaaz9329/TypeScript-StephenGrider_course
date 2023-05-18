import {faker} from '@faker-js/faker'
import { canBeMapped } from './types';

export class User implements canBeMapped{
    name:string;
    location : {
        lat:number;
        lng:number;
    }
    constructor(){

        this.name = faker.name.firstName();
        this.location = {
            lat:Number(faker.address.latitude()),
            lng:Number(faker.address.longitude())
        }
        
    }
}