import styled from "styled-components";
import CampoInput from "../Campo";

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
  return (
    <HeaderStyles>
      <img src="img/logo.png" alt="logo" />
      <CampoInput />
    </HeaderStyles>
  );
};
export default Cabecera;
