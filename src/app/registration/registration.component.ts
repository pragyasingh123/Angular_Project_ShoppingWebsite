import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isShowForm:boolean;
  
  constructor() { 
   this.isShowForm=false;
  }

  ngOnInit(): void {
  }

  ShowFormOnClick(){
   this.isShowForm=true;

  }

  HideFormonClick(){

    this.isShowForm=false;
  }
}
