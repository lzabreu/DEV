import { useState } from 'react'
import { Item } from '../../types/item'
import * as C from './styles'


type Props = {
    item: Item
    onChange: (id: number, isDone: boolean) => void
}

export const ListItem = ({item, onChange}: Props) => {
   // const[isChecked, setIsChecked] = useState(item.isDone)

    return (
        <C.Container done = {item.isDone}>
            <input 
            type="checkbox" 
            checked = {item.isDone} 
            onChange ={e => onChange(item.id, e.target.checked)}
            />
            
            <label>{item.taskName} Esta feita:{item.isDone.toString()}</label>
        </C.Container>
    
    )

    
}

