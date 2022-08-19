import { useState } from 'react'
import * as C from './App.styles'
import { ListItem } from './components/ListItem'
import { NewTask } from './components/NewTask'
import { Item } from './types/item'


function App() {

  const [list, setList] = useState<Item[]>([
   // {id: 1, taskName: 'Tomar banho', isDone: false},
   // {id: 1, taskName: 'Secar o corpo', isDone: true},
  ])

  const handleAddTask = (taskName: string) => {
    let newList =[...list]
    newList.push({
      id: list.length + 1,
      taskName: taskName,
      isDone: false
    })
    setList(newList)
  }

  const handleTaskChange = (id:number, done: boolean) => {
    let newList = [...list]
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].isDone = done
      }
    }
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        <NewTask onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem 
          key = {index} 
          item = {item}
          onChange = {handleTaskChange}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
