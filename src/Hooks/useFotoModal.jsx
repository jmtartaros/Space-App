import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const useFotoModal = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const openModal = (foto) => {
    dispatch({ type: "SET_FOTO_SELECIONADA", payload: foto });
  };

  const closeModal = () => {
    dispatch({ type: "SET_FOTO_SELECIONADA", payload: null });
  };

  const fotoSeleccionada = state.fotoSeleccionada;

  const ifOpenModal = state.openModal;

  return { openModal, closeModal, fotoSeleccionada, ifOpenModal };
};

export default useFotoModal;
