import React from 'react'

export default function Loading() {
    return (
        <iframe src="https://giphy.com/embed/ibWGYUw1hF4Q8gMOhi"
            className="pointer-events-none w-screen h-screen bg-purple-100 absolute top-0 z-50 flex justify-center items-center"
            width="480" height="480">
        </iframe>
    )
}
