import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  @ViewChild('clientForm') form: any;

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = true;

  constructor(
    private flashMessage: FlashMessagesService, 
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid} : {value: Client, valid: boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      this.flashMessage.show("Please fill out the form correctly", { cssClass: "alert-danger", timeout: 4000 });
    } else {
      this.clientService.newClient(value);
      this.flashMessage.show("New client added", { cssClass: "alert-success", timeout: 4000 });
      this.router.navigate(['/']);
    }
  }
}
