"use client"
import { useEffect, useState } from "react"
import { IoMdSunny } from "react-icons/io"
import { MdDarkMode } from "react-icons/md"

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        theme === "dark" ? setDarkMode(true) : setDarkMode(false)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <button onClick={() => setDarkMode(!darkMode)} className='px-5 py-2 w-full  flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4  dark:border-slate-800 border-yellow-700 rounded-xl bg-yellow-400 dark:bg-slate-600 text-white font-semibold'>
            {darkMode ? <MdDarkMode /> : <IoMdSunny />}
            <p>{darkMode ? "Dark" : "Light"} Mode</p>
        </button>
    )
}
