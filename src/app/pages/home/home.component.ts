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


  markers: Marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true,
      visible: false,
      opacity: 0.7,
      color: 'red'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false,
      visible: true,
      opacity: 0.6,
      color: 'green'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true,
      visible: true,
      opacity: 0.4,
      color: 'red'
	  }
  ]

}
