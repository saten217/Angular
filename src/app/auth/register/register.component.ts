import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth1';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

   isLoading: boolean=false;
  
   passwordMatched:boolean = true;
   submit1(){
    if(this.isLoading) return;
    this.isLoading=true;

    if(this.form1.password !== this.form1.retypepwd)
    {
      this.passwordMatched=false;
      return;
    }
    const auth = getAuth();
createUserWithEmailAndPassword(auth, this.form1.email, this.form1.password)
  .then((userCredential) => {
  console.log("usercedintials");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(()=>this.isLoading=false);
   }

  ngOnInit(): void {
  }

}
