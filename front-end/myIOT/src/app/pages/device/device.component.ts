import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DeviceDetails, DeviceDetailsService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(public service: DeviceDetailsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.deviceDetailsID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.postDeviceDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Capteur  Register');

      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.putDeviceDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Capteur Register');

      },
      err => {
        console.log(err);
      }
    );

  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new DeviceDetails();
  }
  populateForm(selectedRecord: DeviceDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record?')) {
      this.service.deleteDeviceDetails(id)
        // tslint:disable-next-line: deprecation
        .subscribe(
          res => {
            this.service.refreshlist();
            this.toastr.error('deleted successfully', 'Capteur Register');
          },
          err => { console.log(err); }
        );
    }

  }

}
