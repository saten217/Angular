import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsService } from './colors.service';
import { ColorsComponent } from './colors.component';
import { PigeonComponent } from './pigeon/pigeon.component';

@NgModule({
  declarations: [ColorsComponent, PigeonComponent],
  imports: [CommonModule],
  providers:[ColorsService],
  exports:[ColorsComponent]
})
export class ColorsModule { }
