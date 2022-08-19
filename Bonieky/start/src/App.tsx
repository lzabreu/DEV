import React from 'react'
import { useState } from 'react'  // cria variavel com estados
import Header from './components/Header'    // header é um componente function
import  Center from './components/Center'
import { Footer } from './components/Footer'  // footer é um componente const


function App() {
  
  let name = 'Luciano'
  const [age, setAge] = useState(57)
  const [bg, setBg] = useState('#FF0000')
  const [list, setList] = useState([
    'Opção 1',
    'Opção 2',
    'Opção 3',
  ])

  const handleClickAzul = () => {
    setBg('#0000FF')
    setAge(20)
  }
  const handleClickVermelho = () => {
    setBg('#FF0000')
    setAge(57)
  }
  
  return (
    
    <div style={{backgroundColor: bg}}>
      <Header />
      <br />
      <Center name = {name} age = {age}/>
      <br />
      <button onClick={handleClickAzul}>Azul 20 anos</button>
      <button onClick={handleClickVermelho}>Vermelho 57 anos</button>
      <br />
      {age > 20 && `Texto condicional baseado no estado (valor) da váriável age`}
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))
        }
      </ul>
      <Footer />
    </div>
  )
}

export default App
