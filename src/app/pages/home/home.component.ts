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

  visible: boolean = false;
  constructor(
    private predictionService: PredictionService
  ) { }

  ngOnInit(): void {
  
  }

  postPrediction() {
    this.predictionService.post(this.anho.value).subscribe((resp: any) => {
      this.input = resp.inputs;
      const predictions = resp.predictions.map((pre: any) => {
        switch (pre.provincia) {
          case 'BELLAVISTA':
            return { lat: -7.06694, lng:  -76.5847, provincia: pre.provincia, ...pre };
          case 'SAN MARTIN':
            return { lat: -6.51389, lng:  -76.7408, provincia: pre.provincia, ...pre };
          case 'RIOJA':
            return { lat: -6.0625, lng:  -77.1678, provincia: pre.provincia, ...pre };
          case 'MOYOBAMBA':
            return { lat: -6.03472, lng:  -76.9747, provincia: pre.provincia, ...pre };
          case 'PICOTA':
            return { lat: -6.92056, lng:  -76.3303, provincia: pre.provincia, ...pre };
          case 'TOCACHE':
            return { lat: -8.18861, lng:  -76.5103, provincia: pre.provincia, ...pre };
          default:
            break;
        }
        return pre.provincia;
      });
      this.predictions = predictions;
      console.log(this.predictions);
    })
  }

  onMouseOver(infoWindow: any) {
      infoWindow.open();
  }

  onMouseOut(infoWindow: any) {
      infoWindow.close();
  }

}
