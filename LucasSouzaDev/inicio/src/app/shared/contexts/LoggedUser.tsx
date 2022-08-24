import {createContext, useCallback, useEffect, } from 'react'

type Props = {
    children?: React.ReactNode
};

interface ILoggedUserContextData {
    loggedUser: string
    logOut: () => void
}

export const LoggedUserContext = createContext<ILoggedUserContextData>({} as ILoggedUserContextData)

export const LoggedUserContextProvider: React.FC<Props> = ({ children}) => {
    
    const handleLogOut = useCallback(() => {
        console.log('Logged out')
    }, [])

    return (
        <LoggedUserContext.Provider value={{loggedUser: 'Luciano', logOut: handleLogOut}}>
            {children}
        </LoggedUserContext.Provider>
    )
}
