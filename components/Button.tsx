
export default function RedButton(props:any) {
  return (
    <button onClick={props.onclick} className="bg-red-700 rounded-3xl px-4 py-3 text-sm text-white">
        <h5 >{props.name}</h5>
    </button>
  )
}
