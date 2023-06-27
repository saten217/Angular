import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth1';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  form1: RegisterForm={
    email:'',
    password:'',
    retypepwd:''
   };

   submit1(){
    console.log(this.form1);
   }

  ngOnInit(): void {
  }

}
