import * as C from './styles'
import { Item } from '../../types/Item'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const handlePreviousMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month), 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()} + 1`)

    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month), 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()} + 1`)
    }

    return (
      <C.Container>
        
        <BsFillArrowLeftSquareFill onClick={handlePreviousMonth} cursor='pointer' width={40}/>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <BsFillArrowRightSquareFill onClick={handleNextMonth} cursor='pointer' width={40}/>
       
        <C.ResumeArea>
            <ResumeItem title='Receitas' value={income} />
            <ResumeItem title='Despesas' value={expense} />
            <ResumeItem title='Balanço' value={income - expense} color={(income - expense) < 0 ? 'red': 'green'}/>
        </C.ResumeArea>
      </C.Container>
    );
}
