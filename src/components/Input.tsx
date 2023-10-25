interface IInputProps{
    placeholder: string
}

function Input({placeholder}: IInputProps) {
  return (
   <div className="mb-4">
    <input
    type="text"
    placeholder={placeholder}
    className="w-full px-4 py-2 rounded border-2 border-neutral-200 focus:border-blue" />
   </div>
  )
}

export default Input