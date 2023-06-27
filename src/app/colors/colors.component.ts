import { Component, OnInit } from '@angular/core';
import { color } from '../types/types';
import { ColorsService } from './colors.service';


@Component({
  selector: 'App-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  color:color[]=[];

  constructor(private colorsservice: ColorsService) 
  {
    this.color= this.colorsservice.getcolors();
   }
   
  isShowing : boolean = true;
    
 
  ngOnInit(): void {
  }

}
