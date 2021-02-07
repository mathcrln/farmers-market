import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../assets/styles/theme"
import { GlobalStyles } from "../assets/styles/global"
import { useDarkMode } from "../hooks/useDarkMode"
import Header from "../components/shared/header"
import Navigation from "../components/shared/navigation"
import { Container } from "./layout.styled"
export default function Layout({ children }) {
  const [theme, setTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header />
      {children}
      <Navigation />
    </ThemeProvider>
  )
}
