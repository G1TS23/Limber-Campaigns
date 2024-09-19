import { Injectable } from '@angular/core';
import * as campaigns from '../assets/campaigns.json';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

    private data: object = campaigns;

    getFeatures(): object{
        console.log(typeof this.data);
        return this.data;
    }
}