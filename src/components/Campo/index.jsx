import styled from "styled-components";
import search from "./search.png";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyles = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px !important;
  height: 38px;
`;

const CampoInput = () => {
  const boxFiltro = useRef(null);
  const { dispatch } = useContext(GlobalContext);
  return (
    <InputContainer>
      <InputStyles
        ref={boxFiltro}
        type="text"
        placeholder="¿Qué estás buscando?"
      />
      <IconLupa
        src={search}
        alt="logo-search"
        onClick={() => {
          dispatch({
            type: "SET_FILTRO",
            payload: boxFiltro.current.value,
          });
        }}
      />
    </InputContainer>
  );
};
export default CampoInput;
