import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ZoneDetails, ZoneDetailsService } from './zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  constructor(public service: ZoneDetailsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.zoneDetailsID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.postZoneDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Zone Details Register');

      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.putZoneDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Zone Details Register');

      },
      err => {
        console.log(err);
      }
    );

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ZoneDetails();
  }
  populateForm(selectedRecord: ZoneDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record?')) {
      this.service.deleteZoneDetails(id)
        // tslint:disable-next-line: deprecation
        .subscribe(
          res => {
            this.service.refreshlist();
            this.toastr.error('deleted successfully', 'Zone Details Register');
          },
          err => { console.log(err); }
        );
    }

  }

}
