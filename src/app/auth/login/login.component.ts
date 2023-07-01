import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 form: LoginForm={
  email:'',
  password:''
 };

 isLoading:boolean=false;

  constructor() { }

  submit()
  {
    if(this.isLoading) return;
    this.isLoading=true;
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
   alert("login successful");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("credientials doesnot match")
  }).  finally(()=> this.isLoading=false);
  }

  ngOnInit(): void {
  }

}
