import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class ZoneDetails {
  siteID = 0;
  zoneDetailsID = 0;
  designation = '';
  description = '';
  typeAgri = '';
  site: any;

}

@Injectable({
  providedIn: 'root'
})
export class ZoneDetailsService {
  ZoneDetails: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/ZoneDetails';
  formData: ZoneDetails = new ZoneDetails();
  list: ZoneDetails[];

  postZoneDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putZoneDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.zoneDetailsID}`, this.formData);
  }
  deleteZoneDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as ZoneDetails[]);
  }
}
