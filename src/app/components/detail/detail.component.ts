import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country: any;
  countryName: string = "";
  constructor(private router: ActivatedRoute, private countryService: CountriesService) {
    this.countryName += this.router.snapshot.params.nombre;
  }

  ngOnInit(): void {
    this.getCountryDetail();
  }

  getCountryDetail(){
    this.countryService.getCountryByName(this.countryName)
      .subscribe((data : any) => this.country = data[0]);
  }

}
