import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule
  ],
  exports: [
    MatSliderModule,
  ]
})
export class MaterialModule { }
