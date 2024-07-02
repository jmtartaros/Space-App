import styled from "styled-components";
import CampoInput from "../Campo";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const HeaderStyles = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;
//Siempre los componentes se inicializan con mayusculas

const Cabecera = () => {
  const { setFiltro } = useContext(GlobalContext);
  return (
    <HeaderStyles>
      <img src="img/logo.png" alt="logo" />
      <CampoInput setFiltro={setFiltro} />
    </HeaderStyles>
  );
};
export default Cabecera;
