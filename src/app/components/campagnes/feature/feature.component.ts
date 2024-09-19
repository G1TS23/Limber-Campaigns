import { Component, Input } from '@angular/core';
import { Feature } from '../../../models/feature';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

  @Input() feature!: Feature;

  shareFeature() {
    alert(`Share : ${this.feature.name}`);
    }

  editFeature() {
    alert(`Edit : ${this.feature.name}`);
    }
  
  featureParams() {
    alert(`Paramètres : ${this.feature.name}`);
    }

}
