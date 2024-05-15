import React from 'react'
import RedButton from './Button'

export default function Navbar(props:any) {
  return (
    <div className='flex w-full items-center justify-center fixed top-0 left-0 bg-white dark:bg-black px-8 py-5'>
        <div className='max-w-xl w-full flex justify-between items-center'>
          <h5 className="text-2xl tracking-wide font-semibold">{props.name}</h5>
          <RedButton name='Hapus Lingkaran' />
        </div>
    </div>
  )
}
