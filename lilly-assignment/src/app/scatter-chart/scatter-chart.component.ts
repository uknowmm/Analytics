import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { bubbleChartOptions } from './scatter-chart.chartOptions';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnChanges {
  public bubbleChartOptions = bubbleChartOptions;
  @Input()
  public data: any;
  @Input()
  public years: any
  bubbleChartLabels: any;
  bubbleChartData: any = [];
  constructor() { }

  public ngOnChanges(changes: any): void {
    if (changes.hasOwnProperty('years') && this.data) {
      this.drawChart();
      window.addEventListener('resize', () => this.drawChart());
    }
  }

  drawChart() {
    let data: any = [];
    this.bubbleChartData = [];
    const filterDataSet = this.data.filter((d: any) => d.Year === this.years);
  //   const dataLbl = this.data.filter((d:any) => d.Year === this.years).map((d:any) => d.Population_Density);
  //   this.bubbleChartLabels = dataLbl.filter(function(item:any, pos: any) {
  //     return dataLbl.indexOf(item) == pos;
  // })
  //   console.log(this.bubbleChartLabels);
    let i = 0;
    let j = 0;
    let k= 200;
    filterDataSet.forEach((locationObj: any) => {
      data = [];
      i = i + 50;
      j = j + 10;
      k= k+5;
      const tempObj2: any = {};
      tempObj2.x = locationObj.Population_Density;
      tempObj2.y = locationObj.Population_Growth_Rate;
      tempObj2.r = this.numberWeight(locationObj.Population);
      tempObj2.lbl = locationObj.Country;
      data.push(tempObj2);
      this.bubbleChartData.push({
        label: locationObj.Country,
        backgroundColor: `rgb(200, ${i}, ${j})`,
        data: data,
      })
    });
  }

  numberWeight(n: number): number {
    if (n <= 100) {
      return 2;
    }
    else if (100 < n && n <= 500) {
      return 5;
    }
    else if (500 < n && n <= 1000) {
      return 8;
    } else if (1000 < n && n <= 1500) {
      return 10;
    } else {
      return 12;
    }

  }
  }
