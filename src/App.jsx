import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



const App = () => {
  return (
    <div className='fondo'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la mejor tienda de videojuegos"} />
    </div>
  )
}

export default App