import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PokemonService } from 'src/app/modules/home/service';
import {
  Pokemon,
  PokemonResultsEntity,
} from '../../interfaces/pokemon.interface';
import { SubscriptionManagementDirective } from 'src/app/shared/directives/subscription-mangement-directive';
import { AxiosResponse } from 'axios';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes.contants';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  extends SubscriptionManagementDirective
  implements OnInit
{
  displayedColumns: string[] = ['name', 'url'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private snackbar: SnackBarService
  ) {
    super();
  }

  private limitSetting = {
    limit: 1000,
    offset: 0,
  };

  ngOnInit() {
    this.loadData();
  }

  /**
   * Load Pokemon Data
   */
  loadData() {
    this.snackbar.showMessage('Reteriving Pokemons...', false);
    this.pokemonService.getPokemon(this.limitSetting).subscribe({
      next: (response: AxiosResponse<Pokemon>) => {
        const pokemonData: Pokemon = response.data;
        this.dataSource.data = pokemonData.results;
        this.dataSource.paginator = this.paginator;
      },
      error: () => {
        this.snackbar.showMessage('Error fetching pokemon data', true);
      },
    });
  }

  /**
   * Search Pokemon
   * @param event
   */
  search(event: KeyboardEvent) {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchQuery.trim().toLowerCase();
  }

  /**
   * On Row Click Navigate to Details page
   * @param row
   */
  onRowClick(row: PokemonResultsEntity) {
    const { url } = row;
    const parts = url.split('/');
    const pokemonNumber = parts[parts.length - 2];
    this.router.navigate([`${ROUTES.home}/${ROUTES.details}`, pokemonNumber]);
  }
}
