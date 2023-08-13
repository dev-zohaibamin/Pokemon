import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, catchError, from, of } from 'rxjs';
import { API_URL } from 'src/app/constants/api.constants';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonDetails } from '../interfaces/pokemon.details.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getPokemon(setting: {
    limit: number;
    offset: number;
  }): Observable<AxiosResponse<Pokemon>> {
    const { limit, offset } = setting;
    return from(
      axios.get<Pokemon>(
        `${API_URL.base_URL}${API_URL.pokemon}?limit=${limit}&offset=${offset}`
      )
    ).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }

  getPokemonDetails(
    pokemon_number: number
  ): Observable<AxiosResponse<PokemonDetails>> {
    return from(
      axios.get<PokemonDetails>(
        `${API_URL.base_URL}${API_URL.pokemon}/${pokemon_number}/`
      )
    ).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}
