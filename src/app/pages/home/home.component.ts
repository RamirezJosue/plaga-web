import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Marker } from '../../interfaces/marker';
import { PredictionService } from '../../services/prediction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat: number = -6.51389;
  lng: number = -76.7408;

  zoom: number = 9;
  input: any = {};

  predictions: any [] = [];

  anho = new FormControl('2021');
  constructor(
    private predictionService: PredictionService
  ) { }

  ngOnInit(): void {
  
  }

  postPrediction() {
    this.predictionService.post(this.anho.value).subscribe((resp: any) => {
      this.input = resp.inputs;
      this.predictions = resp.predictions;
      console.log(this.predictions);
    })
  }


}
