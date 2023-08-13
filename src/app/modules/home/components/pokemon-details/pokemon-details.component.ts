import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service';
import { AxiosResponse } from 'axios';
import { PokemonDetails } from '../../interfaces/pokemon.details.interface';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  pokemonDetails$!: Observable<AxiosResponse<PokemonDetails>>;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private snackbar: SnackBarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const pokemonId = +params['id'];
      if (pokemonId) {
        this.snackbar.showMessage('Reteriving... Pokemon Details', false);
        this.getPokemonDetails(pokemonId);
      }
    });
  }

  /**
   * Get Pokemon Details
   * @param pokemonId 
   */
  getPokemonDetails(pokemonId: number) {
    this.pokemonDetails$ = this.pokemonService.getPokemonDetails(pokemonId);
  }
}
