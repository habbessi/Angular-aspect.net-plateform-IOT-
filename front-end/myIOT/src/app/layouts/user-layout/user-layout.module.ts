
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { UserLayoutRoutes } from './user-layout.routing';
import { HomeComponent } from '../../pages/home/home.component';
import { DeviceComponent } from '../../pages/device/device.component';
import { SiteComponent } from '../../pages/site/site.component';
import { ZoneComponent } from '../../pages/zone/zone.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    HomeComponent,
    DeviceComponent,
    SiteComponent,
    ZoneComponent,
    UserProfileComponent,

  ]
})

export class UserLayoutModule { }
