import { Component, ElementRef, Input, OnChanges } from '@angular/core';

import * as d3 from 'd3';
import { lineChartOptions } from './line-chart.chartoptions';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {
  public lineChartOptions = lineChartOptions;
  @Input()
  public data: any;
  @Input()
  public years: any
  lineChartLabels: any;
  lineChartData: any = [];
  totalPopulation: any;
  constructor(public chartElem: ElementRef) {
  }

  public ngOnChanges(changes: any): void {
    if (changes.hasOwnProperty('years') && this.data) {
      this.calculateTotalPopulation();
      this.drawChart();
      window.addEventListener('resize', () => this.drawChart());
    }
  }

  calculateTotalPopulation() {
    const initialValue = 0;
    const filterDataSet = this.data.filter((d:any) => d.Year === this.years).map((d:any) => d.Population);
    const sum = filterDataSet.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      initialValue
    );
    this.totalPopulation = sum;
  }

  drawChart() {
     this.lineChartLabels = [];
     let lineData = [];
     this.lineChartData = [];
     for(let i=1950 ; i<= +this.years; i++){
       this.lineChartLabels.push(i);
        const filterDataSet = this.data.filter((d:any) => d.Year === i).map((d:any) => d.Population_Growth_Rate);
        const initialValue = 0;
        const sum = filterDataSet.reduce(
          (accumulator: number, currentValue: number) => accumulator + currentValue,
          initialValue
        );
        lineData.push(sum)
     }

      this.lineChartData.push({
        data: lineData,
        label: 'Population Growth',
       })

  }



}
