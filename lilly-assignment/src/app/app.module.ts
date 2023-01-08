import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SubHeaderComponent,
    LineChartComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
