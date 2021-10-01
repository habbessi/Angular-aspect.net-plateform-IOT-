import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../sidebarr/sidebarr.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../pages/shared/user.service';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.scss']
})
export class NavbarrComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  };

  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location, private element: ElementRef, private router: Router, public service: UserService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.service.getUserProfile();
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'home';
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
