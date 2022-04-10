import React, { useState } from "react";
import {dark,light} from './theme.js'
let theme = "light"|"dark"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light":"dark")
  }


let styleProps = {
  body: {
    backgroundColor: theme === "dark"?dark.body.backgroundColor:light.body.backgroundColor,
  },
  primary:  theme === "dark"?dark.primary:light.primary,
  secondary: theme === "dark"?dark.secondary:light.secondary,
  tertiary:theme === "dark"?dark.tertiary:light.tertiary ,
  quatnary: theme === "dark"?dark.quatnary:light.quatnary,
}

const cssVar = document.querySelector(':root')

cssVar.style.setProperty('--background',styleProps.body.backgroundColor)
cssVar.style.setProperty('--primary',styleProps.primary)
cssVar.style.setProperty('--secondary',styleProps.secondary)
cssVar.style.setProperty('--tertiary',styleProps.tertiary)
cssVar.style.setProperty('--quatnary',styleProps.quatnary)

return(
  <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
  </ThemeContext.Provider>
)
}

