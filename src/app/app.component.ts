import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic02';
  users:string[] = ["sreekanth","reddy","seelam"];
  users1:any[] = [
    {id:'101',name:'sreekanth',city:'vijayawada'},
    {id:'102',name:'reddy',city:'pune'},
    {id:'103',name:'ramesh',city:'hyderabad'}
  
  ];

   isUserLoggedIn:Boolean  = false;
    selectcountry:string;
   countries:any[] = [
     {code:'IND',country:'India'},
     {code:'DE',country:'Germany'},
     {code:'Uk',country:'UnitedKingdom'},
   ];
choice(code){
  this.selectcountry= code;

}

}
