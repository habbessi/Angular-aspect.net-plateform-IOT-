import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { SiteDetails, SiteDetailsService } from './site.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor(public service: SiteDetailsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.siteDetailsID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.postSiteDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Site Details Register');

      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.putSiteDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Site Details Register');

      },
      err => {
        console.log(err);
      }
    );

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new SiteDetails();
  }
  populateForm(selectedRecord: SiteDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record?')) {
      this.service.deleteSiteDetails(id)
        // tslint:disable-next-line: deprecation
        .subscribe(
          res => {
            this.service.refreshlist();
            this.toastr.error('deleted successfully', 'site Details Register');
          },
          err => { console.log(err); }
        );
    }

  }

}

