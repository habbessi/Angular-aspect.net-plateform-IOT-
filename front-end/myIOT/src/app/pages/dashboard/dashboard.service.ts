import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UserDetails {
  userDetailsID = 0;
  firstName = '';
  lastName = '';
  phoneNum = '';
  birthday = '';
  cin = '';
  email = '';
}

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  UserDetails: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/UserDetails';
  formData: UserDetails = new UserDetails();
  list: UserDetails[];

  postUserDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putUserDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.userDetailsID}`, this.formData);
  }
  deleteUserDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as UserDetails[]);
  }
}
