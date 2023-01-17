import Header from "./components/Header"
import { Photo } from "./components/Photo"

function App() {

 let name:string = 'Luciano'

  return (
    <div className="">
      <Header title = 'Titulo' pageNumber = '1' />
      <Header title = 'Titulo'pageNumber = '2' />
      <p className="text-base bg-gray-700 text-white">Hello {name}</p> 
      <Photo url='https://google.com/logos/google.jpg' legenda='Google'> //Vai COMO PROPS
        <img src="https://google.com/logos/google.jpg" alt="" /> // Vai como CHILDREN
      </Photo>
      
    </div>
  )
}

export default App
