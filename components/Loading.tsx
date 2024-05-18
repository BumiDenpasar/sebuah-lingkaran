import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className='pointer-events-none w-screen h-screen bg-purple-100 absolute top-0 z-50 flex justify-center items-center'>
            <Image
                src="/images/loading.gif"
                alt="loading"
                width={500}
                height={500}
                objectFit="cover"
                priority
            />
        </div>
    )
}
