import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";
import Cargando from "../Cargando";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;
const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = () => {
  const {
    fotosDeGaleria,
    alternarFavorito,
    setFotoSeleccionada,
    setTag,
    filtro,
  } = useContext(GlobalContext);

  return !fotosDeGaleria || fotosDeGaleria.length === 0 ? (
    <Cargando />
  ) : (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotosDeGaleria
              .filter((foto) => {
                return (
                  filtro === "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      filtro
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen
                  alternarFavorito={alternarFavorito}
                  alSolicitarZoom={(foto) => setFotoSeleccionada(foto)}
                  key={foto.id}
                  foto={foto}
                />
              ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;