import { atom } from "recoil";

export const pokemon = atom({
  key: 'pokemon',
  default: [],
})

export const filterPokemonType = atom({
  key: "filterPokemonType",
  default: "",
})
