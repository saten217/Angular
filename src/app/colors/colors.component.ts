import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pigeon-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  name= 'grizzle';
  color='black and white';
  src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1173347120%2Fphoto%2Ffull-body-of-grizt-color-speed-racing-pigeon-bird-isolate-white-background.jpg%3Fs%3D170667a%26w%3D0%26k%3D20%26c%3D_3RF_xxcv9dl7UNFnQqdI13M8rbJMLYKrdnGb55PrAY%3D&tbnid=jh6_uMoFmPhiWM&vet=12ahUKEwiRiP7hpJX_AhVszXMBHSyeBacQMyghegUIARCUAg..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Ffull-body-of-grizt-color-speed-racing-pigeon-bird-isolate-white-background-gm1173347120-325864315&docid=WzhPbA_IBdUfSM&w=444&h=388&q=pigeon%20color%20bird%20images&ved=2ahUKEwiRiP7hpJX_AhVszXMBHSyeBacQMyghegUIARCUAg';
  name2 :string='red';
  color2 :string='brown';
  src2: string='https://rcannon992.files.wordpress.com/2020/04/rock-dove-columba-livia-25-apr-20-iridecsence.jpg';

  isdisabled: boolean=false;
 
  clickbutton(){
    alert('button clicked');
    this.isdisabled=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
