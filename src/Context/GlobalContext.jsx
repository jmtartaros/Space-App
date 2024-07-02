/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

const apiFotos = "https://fake-api-beryl-nine.vercel.app/fotos";
const initialState = {
  filtro: "",
  fotosDeGaleria: [],
  fotoSeleccionada: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTRO":
      return { ...state, filtro: action.payload };
    case "SET_FOTOS_DE_GALERIA":
      return { ...state, fotosDeGaleria: action.payload };
    case "SET_FOTO_SELECIONADA":
      return { ...state, fotoSeleccionada: action.payload };
    case "ALTERNAR_FAVORITO":
      // eslint-disable-next-line no-case-declarations
      const fotosDeGaleria = state.fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorita:
            fotoDeGaleria.id === action.payload.id
              ? !action.payload.favorita
              : fotoDeGaleria.favorita,
        };
      });
      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          setFotosDeGaleria: fotosDeGaleria,
          fotoSeleccionada: {
            ...state.fotoSeleccionada,
            favorita: !state.fotoSeleccionada.favorita,
          },
        };
      } else {
        return {
          ...state,
          fotosDeGaleria: fotosDeGaleria,
        };
      }
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiFotos);
        if (!res.ok) throw new Error("Error al obtener los datos");
        const data = await res.json();
        //setFotosDeGaleria([...data]);
        dispatch({ type: "SET_FOTOS_DE_GALERIA", payload: data });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
