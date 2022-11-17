import React from 'react'

import GlobalStyle from './styles/global'

import Board from './components/Board';

function App() {
  return (
    <>
    <h1>Kanban Board</h1>
    <Board />
    
    <GlobalStyle />
    </>

  )
}

export default App
