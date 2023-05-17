/// <reference types="@types/google.maps" />

import { canBeMapped } from './types';
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

  // addMarker(mappable : Company | User){
  //   new google.maps.Marker({
  //     map:this.googleMap,
  //     position:mappable.location
  //   }
  //   )
  //* } first Approch without interface
  
  addMarker(mappble : canBeMapped):void{
    new google.maps.Marker({
      map:this.googleMap,
      position:mappble.location
    })
  }
}
