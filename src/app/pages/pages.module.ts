import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCypUk2SzHAICGtb-VRI3JfwG3PPvlx2H8'
    }),
    ReactiveFormsModule
  ]
})
export class PagesModule { }
