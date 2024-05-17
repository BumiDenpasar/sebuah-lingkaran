'use client'
import { useEffect } from "react"

export function ThemeConfig(){
    useEffect(() => {
        const savedTheme = sessionStorage.getItem('theme')
        if (savedTheme === "dark") {
          document.documentElement.classList.add('dark')
        }
      }, [])
}