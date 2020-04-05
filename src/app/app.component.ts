import { Component, OnInit } from '@angular/core';

import { LocalService } from './services/local.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private localService: LocalService) {

  }
  setLocalStorage() {
    // Set the User data
    let user = {
      name: 'Jordi',
      lastname: 'cuevas'
    }
    this.localService.setJsonValue('user', user);
  }
  getLocalStorage() {
    // Get the user data
    let userdata = this.localService.getJsonValue('user');
    console.log(userdata)
  }
  ngOnInit() {
    this.setLocalStorage();
    this.getLocalStorage();
  }
}
