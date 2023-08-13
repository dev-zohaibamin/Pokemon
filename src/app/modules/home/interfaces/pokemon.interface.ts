export interface Pokemon {
    count: number;
    next?: string;
    previous?: null;
    results: (PokemonResultsEntity)[];
  }
  export interface PokemonResultsEntity {
    name: string;
    url: string;
  }
  