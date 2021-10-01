import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class SiteDetails {
  siteDetailsID = 0;
  country = '';
  city = '';
  latitude = '';
  longitude = '';
  description = '';
}

@Injectable({
  providedIn: 'root'
})
export class SiteDetailsService {
  SiteDetails: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/SiteDetails';
  formData: SiteDetails = new SiteDetails();
  list: SiteDetails[];

  postSiteDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putSiteDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.siteDetailsID}`, this.formData);
  }
  deleteSiteDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as SiteDetails[]);
  }

}
