import React from 'react'
import {Wrapper, Content} from './Card.styles'
// Styles

const Card = ({ nome, cap }) => (
    <Wrapper>
        <Content>
            <strong>Nome:</strong> {nome}
        </Content>
        <Content>
            <strong>Cap:</strong> {cap}
        </Content>
    </Wrapper>
);


export default Card;