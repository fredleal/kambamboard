export function loadLists() {
  return [
    { 
      topico: 'ToDo', 
      creatable: true,
      cards: [
        {
          id: 1,
          titulo: 'textoTitulo1',
          conteudo: 'textoConteudo1',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 2,
          titulo: 'textoTitulo2',
          conteudo: 'textoConteudo2',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 3,
          titulo: 'textoTitulo3',
          conteudo: 'textoConteudo3',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 4,
          titulo: 'textoTitulo4',
          conteudo: 'textoConteudo4',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 5,
          titulo: 'textoTitulo5',
          conteudo: 'textoConteudo5',
          lista: 'Conteudo Lista',
           
        },
      ]
    },
    { 
      topico: 'Doing', 
      creatable: false,
      cards: [
        {
          id: 6,
          titulo: 'textoTitulo6',
          conteudo: 'textoConteudo6',
          lista: 'Conteudo Lista',
           
        }
      ]
    },
    { 
      topico: 'Done', 
      creatable: false,
      cards: [
        {
          id: 7,
          titulo: 'textoTitulo7',
          conteudo: 'textoConteudo7',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 8,
          titulo: 'textoTitulo8',
          conteudo: 'textoConteudo8',
          lista: 'Conteudo Lista',
           
        },
        {
          id: 9,
          titulo: 'textoTitulo9',
          conteudo: 'textoConteudo9',
          lista: 'Conteudo Lista',
        }
      ]
    },
  ];
}