"use client"
import { useEffect, useState } from "react"
import { MdDarkMode } from "react-icons/md"

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
     <button onClick={() => setDarkMode(!darkMode)} className='px-5 py-2 w-full flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 transition-all border-slate-800 rounded-xl bg-slate-600 text-white font-semibold'>
    <MdDarkMode />
    <p>{darkMode ? "Dark" : "Light"} Mode</p>
    </button>
  )
}
