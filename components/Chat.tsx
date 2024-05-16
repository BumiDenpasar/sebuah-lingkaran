
export default function Chat(props:any) {
  return (
    <div className='w-full px-5 py-4 rounded-2xl mt-2 bg-white dark:bg-neutral-900 shadow-sm'>
        <div className='flex w-full justify-between items-center font-light text-purple-400 dark:text-purple-200 mb-4 text-sm'>
            <h5>from: gatau siapa</h5>
            <h5>{props.time}</h5>
        </div>
        <p className='w-full text-neutral-700 dark:text-white'>
            {props.chat}
        </p>
    </div>
  )
}
