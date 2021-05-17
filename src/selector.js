import { selector } from "recoil";
import { pokemon, filterPokemonValue } from ".";

export const filterPokemon = selector({
  key: "filterPokemon",
  get: ({ get }) => {
    const pokemonState = get(pokemon);
    const filterPokemonValueState = get(filterPokemonValue);

    if (filterPokemonValueState.length) {
      return pokemonState.filter(
        (item) => item.name.includes(filterPokemonValueState.trim()) && item
      );
    }
    return pokemon;
  },
});
