import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [tag, setTag] = useState(0);
  const [filtro, setFiltro] = useState("");
  const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/fotos");
        if (!res.ok) throw new Error("Error al obtener los datos");
        const data = await res.json();
        setFotosDeGaleria([...data]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    setTimeout(() => getData(), 5000);
  }, []);

  const alternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita,
      });
    }

    setFotosDeGaleria(
      fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorita:
            fotoDeGaleria.id === foto.id
              ? !foto.favorita
              : fotoDeGaleria.favorita,
        };
      })
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        filtro,
        setFiltro,
        fotosDeGaleria,
        setFotosDeGaleria,
        fotoSeleccionada,
        setFotoSeleccionada,
        alternarFavorito,
        setTag,
        tag,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
