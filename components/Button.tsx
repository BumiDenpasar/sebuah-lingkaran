import React from 'react'

export default function Button(props:any) {
  return (
    <button
        type="submit"
        onClick={props.onclick}
        className={`relative z-[0] transition-all duration-1000 h-10 w-full flex items-center border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 ${props.type === "toggle" ? "dark:bg-slate-600 dark:border-slate-800 bg-yellow-400 border-yellow-600" : null} border-${props.color}-600 bg-${props.color}-400 rounded-xl text-white font-semibold`}
      >
        <div className={`absolute transition-all duration-700 left-4 ${props.type === "toggle" ? "dark:left-56  " : null}`}>
          {props.icon ? props.icon : null}
        </div>
        <p className={`left-12 absolute transition-all duration-700 ${props.type === "toggle" ? "dark:left-32" : null}`}>{props.name}</p>
      </button>
  )
}
