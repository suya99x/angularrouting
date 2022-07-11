import { Component } from '@angular/core';
import { Authservice } from './service/guard/authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice:Authservice){}
  title = 'angularrouting';

  onloginClick(){
  this.authservice.login();
}

onlogoutClick(){
  this.authservice.logout();
}
}

