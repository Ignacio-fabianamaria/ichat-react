import { ReactNode } from "react"

interface ICardProps {
  children: ReactNode;
  title: string
}


function Cardwrapper({ children, title }: ICardProps) {
  return (
    <div className="bg-blue h-screen flex items-center justify-center">
      <div className="bg-white rounded-[1rem] p-6 mb-12 text-center w-[500px] ">
        <h3 className="mb-5 text-3xl text-black font-bold">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default Cardwrapper