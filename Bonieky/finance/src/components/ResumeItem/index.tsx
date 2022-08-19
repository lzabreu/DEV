import * as C from './styles'
import { Item } from '../../types/Item'
import { items } from '../../data/items'
import { TableItem } from '../TableItem'

type Props = {
    title: string
    value: number
    color?: string
}

export const ResumeItem = ({ title, value, color}: Props) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    )
}
