import React from "react";
import { Wrapper, Content, Data } from "./Card.styles";
// Styles

const Card = ({ nome, codice, provincia, reportComuni, reportComuni2016 }) => (
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
      <strong>Report Comuni:</strong> <Data>{reportComuni}</Data>
    </Content>
    <Content>
      <strong>Report Comuni 2016:</strong> <Data>{reportComuni2016}</Data>
    </Content>
  </Wrapper>
);

export default Card;
