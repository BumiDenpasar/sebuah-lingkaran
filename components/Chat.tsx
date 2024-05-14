import React from 'react'

export default function Chat(props:any) {
  return (
    <div className='w-full px-5 py-4 rounded-2xl border border-black mt-2'>
        <div className='flex w-full justify-between items-center text-neutral-400 mb-4 text-sm'>
            <h5>from: gatau siapa</h5>
            <h5>{props.time}</h5>
        </div>
        <p className='w-full'>
            {props.chat}
        </p>
    </div>
  )
}
