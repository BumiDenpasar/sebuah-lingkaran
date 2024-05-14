import React from 'react'
import RedButton from './Button'

export default function Navbar(props:any) {
  return (
    <div className='flex w-full items-center fixed top-0 left-0 bg-neutral-200 px-8 py-5 justify-between'>
        <h5 className="text-2xl tracking-wide font-semibold">{props.name}</h5>
        <RedButton name='Hapus Lingkaran' />
    </div>
  )
}
