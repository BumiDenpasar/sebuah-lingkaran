import React from 'react'

export default function Button(props:any) {
  return (
    <button
        type="submit"
        onClick={props.onclick}
        className={`px-5 py-2 w-full flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 dark:border-${props.dark}-800 dark:bg-${props.dark}-600 border-${props.color}-600 bg-${props.color}-400 rounded-xl text-white font-semibold`}
      >
        {props.icon ? props.icon : null}
        <p>{props.name}</p>
      </button>
  )
}
