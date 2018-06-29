import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';
import { UnknownComponent } from './unknown/unknown.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ControlComponent,
    ButtonComponent,
    SliderComponent,
    UnknownComponent
  ],
  exports: [ControlComponent]
})
export class ControlModule { }
