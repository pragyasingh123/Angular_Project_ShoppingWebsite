import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation1',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  NavComponent :any=[];
  logoTitle="Architects";
  logoTitle2="BR";

  NavComponent1 :any=[];
  NavType1="Furniture"
  NavType2="Const";

  constructor() { }

  ngOnInit(): void {
    this.NavComponent=["Project","About","Contact","Home","Career"];
    this.NavComponent1=["Careers","Out Trains","Dashboard"];
  }
 
 
}
