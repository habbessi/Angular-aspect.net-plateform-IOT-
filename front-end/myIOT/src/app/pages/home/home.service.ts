import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Emulateurs {
  deviceID = 0;
  temperature = '';
  humudite = '';
  date = '';

}

@Injectable({
  providedIn: 'root'
})
export class EmulateursService {
  SiteDetails: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/Emulateurs';
  formData: Emulateurs = new Emulateurs();
  list: Emulateurs[];

  postEmulateurs() {
    return this.http.post(this.baseURL, this.formData);
  }
  putEmulateurs() {
    return this.http.put(`${this.baseURL}/${this.formData.deviceID}`, this.formData);
  }
  deleteEmulateurs(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Emulateurs[]);
  }
}
