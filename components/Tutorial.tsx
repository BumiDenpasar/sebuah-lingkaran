
export default function Tutorial(props:any) {
    if (!props.show) {
        return null;
      }

  return (
    <div className="p-2" onClick={props.onClose}>
        <div className="rotate-45 w-5 h-5 absolute top-0 right-10 drop-shadow-lg rounded-sm bg-purple-500"></div>
        <div className='bg-purple-500 text-sm text-white w-full h-max px-5 py-3 drop-shadow-lg rounded-2xl'>
            {props.message}
        </div>
    </div>
  )
}
