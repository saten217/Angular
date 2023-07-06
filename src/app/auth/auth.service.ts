import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/Auth';
import { RegisterForm } from '../types/auth1';

@Injectable({
  providedIn: 'root'
})
 

export class AuthService {
  isAuthenticated: boolean =false;
  isLoading:boolean=false;
  constructor() { }
 
  Login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading=true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
       this.isAuthenticated=true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       this.isAuthenticated=false;
      }).  finally(()=> this.isLoading=false);
  }
  passwordMatched:boolean=true;

  Register(form1:RegisterForm){
    if(this.isLoading) return;
    this.isLoading=true;
    if(form1.password !== form1.retypepwd)
    {
      this.passwordMatched=false;
      return;
    }
    const auth = getAuth();
   
createUserWithEmailAndPassword(auth, form1.email, form1.password)
  .then((userCredential) => {
  this.isAuthenticated=true;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated=false;
    // ..
  }).finally(()=>this.isLoading=false);
  }

}
