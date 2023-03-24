import React from "react";
import { Wrapper, Content, Data } from "./Card.styles";
// Styles

const Card = ({ nome, codice, provincia, cap, codCatastale }) => (
  <Wrapper>
    <Content>
      <strong>Nome:</strong> {nome}
    </Content>
    <Content>
      <strong>Codice:</strong> {codice}
      {/*cap.map((capSingle) => {
        return <Data> {capSingle} </Data>;
      })*/}
    </Content>
    <Content>
      <strong>Provincia:</strong> <Data>{provincia}</Data>
    </Content>
    <Content>
      <strong>Cap:</strong> <Data>{cap}</Data>
    </Content>
    <Content>
      <strong>Cod Catastale</strong> <Data>{codCatastale}</Data>
    </Content>
  </Wrapper>
);

export default Card;
