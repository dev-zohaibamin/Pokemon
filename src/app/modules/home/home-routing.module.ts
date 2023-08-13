import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  HomeRootComponent,
  PokemonDetailsComponent,
} from './components';
import { ROUTES } from 'src/app/constants/routes.contants';

const routes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    children: [
      { path: ROUTES.pokemon, component: HomeComponent },
      { path: 'pokemon-details/:id', component: PokemonDetailsComponent },

      { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
      { path: '**', redirectTo: 'pokemon' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
