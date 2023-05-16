/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
export class CustomMap {
 private googleMap: google.maps.Map;
  constructor(element : HTMLElement) {
    this.googleMap = new google.maps.Map(
      element,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable : Company | User){
    new google.maps.Marker({
      map:this.googleMap,
      position:mappable.location
    }
    )
  }
}
