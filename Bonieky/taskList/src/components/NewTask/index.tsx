import * as C from './styles'
import { AiOutlinePlus } from 'react-icons/ai';
import { useState, KeyboardEvent} from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const NewTask = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('')
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }
    return (
        <C.Container>
            <div className='image'><AiOutlinePlus size = {50} /></div>
            <input 
                type='text'
                placeholder='Digite a tarefa'
                value={inputText}
                onChange={(e => setInputText(e.target.value))}
                onKeyUp={handleKeyUp}
            />
            
        </C.Container>
    )
}