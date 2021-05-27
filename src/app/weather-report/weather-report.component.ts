import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { cities } from '../../data/cities';
declare var $:any;

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  selectedOptionVal: any;
  errorMessage: string = "";
  weatherDetails: any;
  apiKey: string = "https://api.weatherapi.com/v1/current.json?key=7b4b72a0bd124bbeb18105937212205&q=";
  showData: boolean = false;
  citiesValues: any = cities;

  constructor(private http: HttpClient, private ngxLoader: NgxUiLoaderService) { } 

  ngOnInit(): void {
  }

  getWeather(){
    this.ngxLoader.start();
    this.selectedOptionVal = $( "#myselect option:selected" ).val();
    if(this.selectedOptionVal)
    {
      this.http.get<any>(this.apiKey+this.selectedOptionVal+'&aqi=no').subscribe({
        next: data => {
        this.weatherDetails = data;
        console.log(this.weatherDetails);
        if(this.weatherDetails){
          this.showData = true;
          this.ngxLoader.stop();
        }   
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
            this.showData = false;
            this.ngxLoader.stop();
        }
    });
    }
    else{
      this.showData = false;
      this.ngxLoader.stop();
    }

}

}
