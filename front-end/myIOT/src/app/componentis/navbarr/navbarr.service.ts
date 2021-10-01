import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UserProfile {
  fullName = '';
  userName = '';
  email = '';
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  UserProfile: any;
  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44311/api/UserProfile';
  formData: UserProfile = new UserProfile();
  list: UserProfile[];

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as UserProfile[]);
  }
}
