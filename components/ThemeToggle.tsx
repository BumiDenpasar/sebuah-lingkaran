"use client"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        theme === "dark" ? setDarkMode(true) : setDarkMode(false)
    }, [])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

  return (
    <div className="text-black dark:text-white absolute bottom-10 w-screen text-center text-light transition-all duration-500"
    onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Gelap" : "Terang"}
    </div>
  )
}
