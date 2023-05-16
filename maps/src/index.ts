/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";
let newUser = new User();
let newCompany = new Company();
let map = new CustomMap(document.getElementById('map') as HTMLElement);
map.addMarker(newUser);
map.addMarker(newCompany);