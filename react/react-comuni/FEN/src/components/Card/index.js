import React from "react";
import { Wrapper, Content } from "./Card.styles";
// Styles

const Card = ({ nome, cap, provincia }) => (
  <Wrapper>
    <Content>
      <strong>Nome:</strong> {nome}
    </Content>
    <Content>
      <strong>Cap:</strong> {cap}
    </Content>
    <Content>
      <strong>Prov:</strong> {provincia}
    </Content>
  </Wrapper>
);

export default Card;
