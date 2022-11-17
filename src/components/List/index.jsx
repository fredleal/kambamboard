import React from 'react'

import { MdAdd } from 'react-icons/md'
import Card from '../Card'

import { Container } from './styles'

export default function List({ data }) {
  return (
    <Container>
        <header>
            <h2>{data.topico}</h2>
            {data.creatable && (
            <button type="button">
                <MdAdd size={32} color="#fff"/>
            </button>
            )}
        </header>

        <ul>
              {data.cards.map(card => <Card key={card.id} data={card} />)}
        </ul>
    </Container>
  )
}
