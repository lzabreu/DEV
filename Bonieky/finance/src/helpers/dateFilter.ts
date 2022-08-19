import { Item } from '../types/Item'

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDay()}` /* mes soma 1 pois comeca em 0 */
}

export const filterListByMonth = (list: Item[], date: string): Item[] => { /*retorna array de Item */
    let newList: Item[] = []
    let [year, month] = date.split('-')
    for (let i in list) {
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)  
        ){
            newList.push(list[i])
        }
    }
    return newList
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

function addZeroToDate(n: number): string { 
    return n < 10 ? `0${n}` : `${n}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month)]} de ${year}`

}

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }