import { Component } from '@angular/core';
import { DataGetService } from 'src/app/services/data-get.service';

@Component({
  selector: 'app-search-data-home',
  templateUrl: './search-data-home.component.html',
  styleUrls: ['./search-data-home.component.css']
})
export class SearchDataHomeComponent {
  countryData: any;
  countryCapital: string | undefined;
  constructor(private dataGetService: DataGetService) {
    this.dataGetService.getCountryData().subscribe(data => {
      this.countryData = data;
      // console.log(this.countryData);
    })
  }

  selectedCountry(country: any) {
    // console.log(country.capital[0]);
    this.countryCapital = country.capital[0];
  }

}
