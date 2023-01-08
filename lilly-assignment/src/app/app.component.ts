import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  allYear: any;
  responseData: any;
  filteredData: any;
  lineChartData: any[] = [];
  selectedYear: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/population.csv', { responseType: 'blob' }).subscribe((file: any) => {
      const csvFile = file;
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(csvFile);
      fileReader.onload = (event: any) => {
        let binaryData = event.target.result;
        let workbook = XLSX.read(binaryData, { type: 'binary' });
        workbook.SheetNames.forEach(sheet => {
          this.responseData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          const years = this.responseData.map((rec: any) => rec['Year']);
          this.allYear = years.filter(function (item: any, pos: any) {
            return years.indexOf(item) == pos;
          });
        });
      }
    });
  }

  onYearChange(event: any) {
    this.selectedYear = event;
  }
}
