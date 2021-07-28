import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  nameCountry: string = "";
  countries: any[] = [];
  isVisible: boolean = false;
  isLoading: boolean;
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.isLoading = true;
    this.countryService.getCountries()
      .subscribe((data: any) => {
        this.countries = data;
        this.isLoading = false;
      });
  }

  searchCountry() {
    this.isLoading = true;
    this.countryService.getCountryByName(this.nameCountry)
      .subscribe((data: any) => {
        this.countries = data;
        this.isLoading = false;
      });
  }

  verify() {
    if (this.nameCountry === "") {
      this.getAllCountries();
    } else {
      this.searchCountry();
    }
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  selectRegion(selectedRegion: string){
    this.isLoading = true;
    this.countryService.getCountriesByRegion(selectedRegion)
      .subscribe((data:any) => {
        this.countries = data;
        this.isLoading = false;
      });
    this.isVisible = !this.isVisible;
  }
}