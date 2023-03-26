import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulairo';
import ListadoNoticias from './components/ListadoNOticias';

function App() {

  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(()=> {
    const consultarAPI = async () => {
      const url =`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4b5933677dce4ed3b1ab51724cbc4525`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    } 
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo = 'Buscador de Noticias'
      />
        <div className='container white'>
          <Formulario 
            guardarCategoria ={guardarCategoria}
          />
          <ListadoNoticias
            noticias={noticias}
          />
        </div>
      
    </Fragment>
  );
}

export default App;
