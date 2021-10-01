
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/device', title: 'Device', icon: 'ni-air-baloon text-yellow', class: '' },
  { path: '/site', title: 'Site', icon: 'ni-atom text-danger', class: '' },
  { path: '/zone', title: 'Zone', icon: 'ni-curved-next text-warning', class: '' },
  { path: '/user-profile', title: 'User-Profile', icon: 'ni-curved-next text-warning', class: '' },


];

@Component({
  selector: 'app-sidebarr',
  templateUrl: './sidebarr.component.html',
  styleUrls: ['./sidebarr.component.scss']
})
export class SidebarrComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
