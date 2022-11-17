import React from 'react';

import { MdEditNote, MdNavigateNext } from 'react-icons/md'

import { Container, Label } from './styles';

export default function Card({ data }){

    return (
        <Container>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
                <h3>{data.titulo}</h3>
                <MdEditNote size={32}/>
            </header>
            <p>{data.conteudo}</p>
            { data.user && <img src={data.user} alt="" /> }
            <MdNavigateNext size={32}/>
        </Container>
    )
}