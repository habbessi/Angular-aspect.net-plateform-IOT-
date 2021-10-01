import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarrComponent } from './sidebarr/sidebarr.component';
import { NavbarrComponent } from './navbarr/navbarr.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [

    NavbarrComponent,
    SidebarrComponent
  ],
  exports: [

    NavbarrComponent,
    SidebarrComponent
  ]
})
export class ComponentisModule { }
