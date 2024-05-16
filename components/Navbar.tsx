'use client'

import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
  import { ThemeToggle } from './ThemeToggle'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import CopyLinkButton from './CopyLinkButton'
import DeleteButton from './DeleteButton'

export default function Navbar(props:any) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='flex items-center justify-center fixed top-0 left-0 w-screen'>
        <div className='max-w-xl w-full bg-purple-500 text-white rounded-b-3xl'>
          <div className='flex w-full justify-between items-center px-8 py-5'>
            <Link href='/' className='scale-125 ml-3'>
              <BiArrowBack />
            </Link>

            <div className='flex flex-col items-center justify-center ml-5'>
              <h5 className="tracking-wide font-lg font-semibold">{props.name}</h5>
              <h5 className="text-sm tracking-wide">Sebuah Lingkaran.</h5>
            </div>
            <div className='scale-50'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>

        <div className={`fixed bottom-0 right-0 left-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center top-0 m-auto w-screen h-screen backdrop-blur-sm`}>
          <div className='flex flex-col items-center justify-center py-5 min-w-80 h-60 bg-white dark:bg-neutral-900 rounded-xl shadow-lg'>
            <div className='flex items-center justify-between w-full px-7 mb-5 text-purple-500 dark:text-white'>
              <h1 className='font-bold text-xl'>Main Menu</h1>
              <button className='font-semibold' onClick={() => {setOpen(!isOpen)}}>X</button>
            </div>
            <div className='space-y-2 w-full px-7'>
              <CopyLinkButton />
              <ThemeToggle />
              <DeleteButton id={props.group_id}/>
            </div>
            
            
          </div>
        </div>

    </div>
  )
}
