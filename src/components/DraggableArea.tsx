import Draggable from "react-draggable"
import { Undo, Trash, Check } from "../assets/Icons"
import {useRef } from "react";

export default function DraggableArea({todoActive, messages}:Props) {
    const todoContainer = useRef<HTMLDivElement>(null)
    const completedContainer = useRef<HTMLDivElement>(null) 
    return (            <div className="w-full relative md:gap-24 lg:gap-56 h-screen flex justify-center items-center">

            <Draggable handle=".handle"  bounds={"parent"} >

            <div ref={todoContainer} className={`w-[22rem] ${todoActive?'flex': 'hidden'} md:flex absolute z-30 md:w-[19rem]  md:relative lg:w-[20rem] h-[77%] md:h-auto 2xl:max-h-[38rem] md:max-h-[27rem]  bg-gradient-to-b from-[#7827e6] via-[#8d39ec] via-30% to-[80%] overflow-x-hidden no-scrollbar overflow-y-scroll  to-[#ea80fc] flex-col justify-start items-center shadow-2xl shadow-[#8d39ec]  rounded-md`}>

                    <h4 className="font-black hidden md:block md:cursor-grab w-full text-center text-white  py-5 font-mono text-2xl italic handle">TODO</h4>
                    {messages.map((message,id)=>(<div key={id} className="w-[93%] group relative cursor-pointer  font-bold bg-slate-50 px-2 rounded-tr-2xl rounded-bl-2xl  my-2.5 text-lg font-sans py-3  ">
                        <div className=" hidden group-hover:flex justify-around items-center w-full absolute  rounded-tr-2xl rounded-bl-2xl inset-0 bg-black/95 h-full ">
                        <button>
                            <Check />
                        </button><button>
                            <Trash />
                        </button>
                        </div>
                        <h5 className=" truncate text-pretty ">{message.message}</h5>
                    </div>   ))}                  
            </div>
            </Draggable>
            <Draggable handle=".handle"  bounds={"parent"} >

                <div ref={completedContainer} className={`w-[22rem] z-30 md:w-[19rem]  ${todoActive?'hidden':'flex'} md:flex  relative lg:w-[20rem] h-[77%] md:h-auto 2xl:max-h-[38rem] md:max-h-[27rem]  bg-gradient-to-b from-black from-40%  via-[#222] via-60% to-[90%] overflow-x-hidden no-scrollbar overflow-y-scroll  to-purple-900 flex-col justify-start items-center shadow-2xl shadow-purple.800  rounded-md`}>

                    <h4 className="font-black hidden md:block md:cursor-grab italic w-full text-center text-white  py-5 font-mono text-2xl handle">COMPLETED TASK</h4>
                    {messages.map((message,id)=>(<div key={id} className="w-[93%] group relative cursor-pointer  font-bold bg-slate-50 px-2 rounded-tr-2xl rounded-bl-2xl  my-2.5 text-lg font-sans py-3  ">
                        <div className=" hidden group-hover:flex justify-around items-center w-full absolute  rounded-tr-2xl rounded-bl-2xl inset-0 bg-black/95 h-full ">
                        <button title="undo task">
                            <Undo />
                        </button><button title="delete task completed">
                            <Trash />
                        </button>
                        </div>
                        <h5 className=" truncate text-pretty ">{message.message}</h5>
                    </div>   ))}                  
            </div>
            </Draggable>
            </div>
            )
}
interface Props{
    todoActive: boolean
    messages: {message:string}[]
}