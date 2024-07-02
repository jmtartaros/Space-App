/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import BotonIcono from "../../BotonIcono";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import useFotoModal from "../../../Hooks/useFotoModal";
const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "370px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Pie = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// eslint-disable-next-line react/prop-types
const Imagen = ({ foto, expandida = false }) => {
  const { openModal } = useFotoModal();
  const { dispatch } = useContext(GlobalContext);

  // eslint-disable-next-line react/prop-types
  const imgFavorita = foto.favorita
    ? "/iconos/favorito-activo.png"
    : "/iconos/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Pie>
          <h4>{foto.fuente}</h4>
          <BotonIcono
            onClick={() => {
              dispatch({ type: "ALTERNAR_FAVORITO", payload: foto });
            }}
          >
            <img src={imgFavorita} alt="Icone de favorito" />
          </BotonIcono>
          {!expandida && (
            <BotonIcono
              aria-hidden={expandida}
              onClick={() => {
                openModal(foto);
              }}
            >
              <img src="/iconos/expandir.png" alt="Icono de expandir" />
            </BotonIcono>
          )}
        </Pie>
      </figcaption>
    </Figure>
  );
};

export default Imagen;
