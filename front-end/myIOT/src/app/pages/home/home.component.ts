import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Emulateurs, EmulateursService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public service: EmulateursService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.deviceID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    // tslint:disable-next-line: deprecation
    this.service.postEmulateurs().subscribe(
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
    this.service.putEmulateurs().subscribe(
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
    this.service.formData = new Emulateurs();
  }
  populateForm(selectedRecord: Emulateurs) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record?')) {
      this.service.deleteEmulateurs(id)
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
