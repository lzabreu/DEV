import React, { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value)
  }
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-400'>
      <div className='flex flex-col text-lg ml-4 mt-4'>
        <div>
          Nome:
          <input className='ml-2' type="text" value={name} onChange={handleName} />
        </div>
        
        Sobrenome:
        <input type="text" value={surname} onChange={handleSurname} />
        Idade:
        <input type="text" value={age} onChange={handleAge} />
      </div>
      <br />
      <div className='text-xl ml-4'>
        <p>Olá {name} {surname} tudo bem?</p> 
        <p>Você tem {age} anos.</p> 
      </div>
    </div>
  )
}

export default App
