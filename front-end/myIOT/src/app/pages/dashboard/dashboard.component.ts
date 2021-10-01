import { ToastrModule, ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDetails, UserDetailsService } from './dashboard.service';

// core components

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public service: UserDetailsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (this.service.formData.userDetailsID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.postUserDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'User Details Register');

      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.putUserDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'User Details Register');

      },
      err => {
        console.log(err);
      }
    );

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserDetails();
  }

}
