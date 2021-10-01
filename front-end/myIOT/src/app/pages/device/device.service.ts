import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class DeviceDetails {
  zoneID = 0;
  deviceDetailsID = 0;
  type = '';
  description = '';
  unite = '';

}

@Injectable({
  providedIn: 'root'
})
export class DeviceDetailsService {
  DeviceDetails: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/DeviceDetails';
  formData: DeviceDetails = new DeviceDetails();
  list: DeviceDetails[];

  postDeviceDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putDeviceDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.deviceDetailsID}`, this.formData);
  }
  deleteDeviceDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as DeviceDetails[]);
  }
}
