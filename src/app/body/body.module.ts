import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    TarjetasComponent
  ]
})
export class BodyModule { }
