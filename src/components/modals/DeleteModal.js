import React from "react";
import { useRecoilState } from "recoil";

import { Dialog } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { pokemon } from "../../";

const DeleteModal = (props) => {
  const { open, id, handleClose } = props;

  const [ pokemonList, setPokemonList ] = useRecoilState(pokemon)
  const  pokemon = pokemonList.length
  ? pokemonList.find((item) => item.id === id)
  : null;
  const index = pokemonList.findIndex((item) => item === pokemon);

  const deletePokemon = () => {
    setPokemonList(removePokemon(pokemonList, index));
    handleClose();
  };

  return {
    <>
      {pokemon ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="delete-dialog-title">Delete</DialogTitle>
          <Typography variant="body1" gutterBottom>
            Are you sure?
          </Typography>
          <Button variant="contained" color="secondary" onclick={() => handleClose()}>
            no
          </Button>
          <Button variant="contained" color="primary" onclick={() => deletePokemon()}>
            Yes
          </Button>
        </Dialog>
      ) : (
        ""
      )};
    </>
  }

function removePokemon(pokemon, i) {
  return [...pokemon.slice(0,i), ...pokemon.slice(i+1)];
}

export default DeleteModal;
