/// <reference types="@types/google.maps" />

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
}
