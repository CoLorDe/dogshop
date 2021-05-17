import React from "react";
import { useRecoilState } from "recoil";

import { Modal } from '@material-ui/core/Modal';

import { pokemon } from "../../";

const DeleteModal = (props) => {
  const { show, id, handleClose } = props;

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
      {product ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton
        </Modal>
      )}
    </>
  }
}
