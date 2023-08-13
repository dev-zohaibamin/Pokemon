import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {
  HomeRootComponent,
  NavBarComponent,
  HomeComponent,
  PokemonDetailsComponent,
} from './components';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    HomeRootComponent,
    NavBarComponent,
    HomeComponent,
    PokemonDetailsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  providers: [],
})
export class HomeModule {}
