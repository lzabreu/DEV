import { useContext } from "react"
import {LoggedUserContext } from '../contexts'

export const newLoggedUser = () => {
    const context = useContext(LoggedUserContext)
    return context
}

