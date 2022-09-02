/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { createContext, useCallback, useContext, useState } from 'react'


interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

interface IDrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
	return useContext(DrawerContext)
}

// eslint-disable-next-line react/prop-types
export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	const toggleDrawerOpen = useCallback(() => {
		setDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
	}, [])
  

	return (
    
		<DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
			{ children }
		</DrawerContext.Provider>

	)
}