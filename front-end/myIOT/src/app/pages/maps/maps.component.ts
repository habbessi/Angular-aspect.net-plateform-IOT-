
import { Component, OnInit } from '@angular/core';
import { SiteDetails, SiteDetailsService } from './maps.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: ['agm-map { height: 600px; }']
})
export class MapsComponent implements OnInit {
  constructor(public service: SiteDetailsService) {
    this.lat = 33;
    this.lng = 9;
    this.mapTypeID = 'hybrid';
    this.located = false;
  }
  lat: number;
  lng: number;
  mapTypeID: string;
  located: boolean;


  ngOnInit() {
    this.service.refreshlist();
  }
  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.located = true;
    });
  }


}
