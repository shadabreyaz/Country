import React, { createContext, useState } from 'react'

export const theme = createContext()

export default function ThemeContext({children}) {
    const[isDark,setIsDark]= useState(JSON.parse(localStorage.getItem('Dark')))
  return (
     <theme.Provider value={[isDark,setIsDark]}>
        {children}
     </theme.Provider>
  )
}

