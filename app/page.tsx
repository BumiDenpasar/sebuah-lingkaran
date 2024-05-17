'use client'
import LogoLarge from "@/components/LogoLarge";
import Transition from "@/components/Transition";
import Watermark from "@/components/Watermark";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme')
    if (savedTheme === "dark") {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <>
      <Transition>
        {
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <LogoLarge />
            <Link href='/group' className='px-5 py-2 w-max mt-5 flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4  border-purple-600 rounded-xl bg-purple-400 text-white font-semibold'>
              Buat Sirkel
            </Link>
            <Link href='/join' className='px-5 py-2 w-max mt-5 mb-16 flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4  border-purple-300 rounded-xl bg-purple-200 text-purple-400 font-semibold'>
              Join Sirkel
            </Link>
          </div>

        }
      </Transition>
      <Watermark />
    </>
  );
}
