import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivateGaurd } from '../service/guard/deactivate-gaurdservice';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit,IDeactivateGaurd {

  constructor() { }
  canExit(){
    if(confirm('are you sure you want to exit')){
      return true;
    }
    return false;
  }
  ngOnInit(): void {
  }

}
