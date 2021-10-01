import { ToastrService } from 'ngx-toastr';
import { UserDetails, UserDetailsService } from './../dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(public service: UserDetailsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshlist();
  }
  populateForm(selectedRecord: UserDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record?')) {
      this.service.deleteUserDetails(id)
        // tslint:disable-next-line: deprecation
        .subscribe(
          res => {
            this.service.refreshlist();
            this.toastr.error('deleted successfully', 'User Details Register');
          },
          err => { console.log(err); }
        );
    }

  }

}
