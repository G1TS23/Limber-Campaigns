import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from "./feature/feature.component";
import { CommonModule } from '@angular/common';
import { FeatureSkeletonComponent } from "./feature-skeleton/feature-skeleton.component";
import { FeaturesService } from '../../services/features.service';
import { HeaderComponent } from "./header/header.component";
import { Feature } from '../../models/feature';

@Component({
  selector: 'app-campagnes',
  standalone: true,
  imports: [
    FeatureComponent,
    CommonModule,
    FeatureSkeletonComponent,
    HeaderComponent
],
  templateUrl: './campagnes.component.html',
  styleUrl: './campagnes.component.scss'
})
export class CampagnesComponent implements OnInit {

  constructor(private featuresService: FeaturesService){}

  data!: any;
  features!: Feature[];
  nbFeatures!: number;
  totalPages!: number;
  currentPage!: number;
  featuresPerPage!: number;
  sortDesc!: boolean;
  searchValue!: string;
  tab!: boolean;

  ngOnInit(): void {

    this.data = this.featuresService.getFeatures();

    console.log(typeof this.data);

    this.featuresPerPage = 5;
    this.sortDesc = true;
    this.searchValue = "";
    this.tab = true;

    this.features = this.returnSearchFeatures();
   
    this.features.forEach((element) => {
      element.createdDate = element.createdDate.split('/').join('');
    });

    this.sort();

    this.features.forEach((element) => {
      element.badges.sort();
    });

    console.log(this.features);
  }

  nextPage(): void {
    if(this.currentPage < this.totalPages){
    this.currentPage ++;
    }
    }
    previousPage() {
      if(this.currentPage > 1){
        this.currentPage --;
        }
    }

    updateListview(event: Event): void {

      const value: string = (event.target as HTMLInputElement).value;

      switch(value){
        case "0" :
          this.featuresPerPage = 5;
          break;
        case "1" :
          this.featuresPerPage = 10;
          break;
        case "2" :
          this.featuresPerPage = this.nbFeatures;
          break;
      }

      this.totalPages = Math.ceil(this.nbFeatures / this.featuresPerPage);
      this.currentPage = 1;

      console.log(value);
  
      }

      changeSortOrder(event: Event): void {
        const value: string = (event.target as HTMLInputElement).value;
        value === "1" ? this.sortDesc = false : this.sortDesc = true;
        this.sort();
      }

      sort(): void{
        this.features.sort((a: any, b: any) => {
          if(!this.sortDesc){
            return parseInt(a.createdDate) - parseInt(b.createdDate);
          } else return parseInt(b.createdDate) - parseInt(a.createdDate);
          });
      }

      searchFeature(event: Event): void {
        this.searchValue = (event.target as HTMLInputElement).value;
        this.features = this.returnSearchFeatures();
      }

      returnSearchFeatures(): Feature[]{
        const searchedFeatures: Feature[] = this.data.campaigns.filter((feature: { name: string; }) => 
            feature.name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(this.searchValue.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")));
        this.nbFeatures = searchedFeatures.length;
        this.totalPages = Math.ceil(this.nbFeatures / this.featuresPerPage);
        this.currentPage = 1;
        return searchedFeatures;
      }

      newCampaign(): void {
        alert("Ajouter une nouvelle campagne");
      }

        switchTab(): void {
          this.tab = !this.tab;
        }




}
