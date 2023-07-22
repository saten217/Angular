import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';
import { from } from 'rxjs';



@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'Pigeon Auction';
  currentDateTime!: string;// Add definite assignment assertion (!)

  constructor(private datePipe: DatePipe, private authservice :AuthService) {}
  isAuthenticated(){
    return this.authservice.isAuthenticated;
  }

  ngOnInit(): void {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
    this.currentDateTime = formattedDate || ''; // Assign empty string if formattedDate is null
   initializeApp(firebaseConfig);
  }
  logout(){
    this.authservice.logout();
  }
}
