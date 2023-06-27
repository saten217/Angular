import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Pigeon Auction';
  currentDateTime!: string;// Add definite assignment assertion (!)

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
    this.currentDateTime = formattedDate || ''; // Assign empty string if formattedDate is null
  }
}
