import { Component } from '@angular/core';
import { DataGetService } from 'src/app/services/data-get.service';

@Component({
  selector: 'app-selection-box-task-home',
  templateUrl: './selection-box-task-home.component.html',
  styleUrls: ['./selection-box-task-home.component.css'],
})
export class SelectionBoxTaskHomeComponent {
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];

  selectedCountry: string | number = '';
  selectedState: string | number = '';
  selectedCity: string | number = '';

  selectCountryPlaceholder: boolean = false;
  selectStatePlaceholder: boolean = false;
  selectCityPlaceholder: boolean = false;

  constructor(private _dataGetService: DataGetService) {
    _dataGetService.getCountryList().subscribe({
      next: (data) => {
        if (data.result !== 'null') {
          this.countryList = data.result;
          this.stateList = [];
          this.cityList = [];
          this.selectedState = '';
          this.selectedCity = '';
          this.selectStatePlaceholder = true;
          this.selectCityPlaceholder = true;
          this.selectCountryPlaceholder = true;
        }
      },
      error: (err) => {
        console.log('Error in getting country list !!', err);
      },
    });
  }

  changeCountry() {
    this.selectStatePlaceholder = false;
    this.selectCityPlaceholder = false;
    this._dataGetService.getStateList(this.selectedCountry).subscribe({
      next: (data) => {
        if (data.result !== 'null') {
          this.stateList = data.result;
          this.cityList = [];
          this.selectedCity = '';
          this.selectedState = '';
          this.selectStatePlaceholder = true;
          this.selectCityPlaceholder = true;
        }
      },
      error: (err) => {
        console.log('Error in getting state list !!', err);
      },
    });
  }

  changeState() {
    this.selectCityPlaceholder = false;
    this._dataGetService.getCityList(this.selectedState).subscribe({
      next: (data) => {
        if (data.result !== 'null') {
          this.cityList = data.result;
          this.selectedCity = '';
          this.selectCityPlaceholder = true;
        }
      },
      error: (err) => {
        console.log('Error in getting city list !!', err);
      },
    });
  }

  changeCity() {
    console.log(this.selectedCity);
  }
}
