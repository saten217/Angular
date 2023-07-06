import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth1';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  form1: RegisterForm={
    email:'',
    password:'',
    retypepwd:''
   };

   
  
   passwordMatched:boolean = true;
   submit1(){
    this.authservice.Register(this.form1);
   }

   isLoading(){
    return this.authservice.isLoading;
   }

   

  ngOnInit(): void {
  }

}
