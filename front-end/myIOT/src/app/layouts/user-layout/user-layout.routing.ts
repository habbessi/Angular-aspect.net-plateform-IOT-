import { Routes } from '@angular/router';


import { HomeComponent } from '../../pages/home/home.component';
import { DeviceComponent } from '../../pages/device/device.component';
import { SiteComponent } from '../../pages/site/site.component';
import { ZoneComponent } from '../../pages/zone/zone.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

export const UserLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'site', component: SiteComponent },
  { path: 'zone', component: ZoneComponent },
  { path: 'user-profile', component: UserProfileComponent },

];
