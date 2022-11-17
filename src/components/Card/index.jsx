import React from 'react';

import { MdEditNote, MdNavigateNext } from 'react-icons/md'

import { Container, Label } from './styles';

export default function Card({ data }){

    return (
        <Container>
            <header>
                <Label color="eeb111" />
                <h3>{data.titulo}</h3>
                <MdEditNote size={32}/>
            </header>
            <p>{data.conteudo}</p>
            <img src="https://avatars.githubusercontent.com/u/61808963?v=4" alt='' />
            <MdNavigateNext size={32}/>
        </Container>
    )
}