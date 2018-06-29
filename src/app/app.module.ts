import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlotlyModule } from './plotly/plotly.module';
import { ControlModule } from './control/control.module';
import { MaterialModule } from './material/material.module';
import { UicmpntComponent } from './uicmpnt/uicmpnt.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UicmpntComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlotlyModule,
    ControlModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
