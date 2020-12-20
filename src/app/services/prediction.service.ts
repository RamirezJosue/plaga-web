import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = `${environment.base_url}/predict`;

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(
    private http: HttpClient
  ) { }

  post( anho: number ) {
    return this.http.post(base_url, {anho} );
  }
}