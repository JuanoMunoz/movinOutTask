
import { Link, Navigate } from "react-router-dom"
import { HomeIcon, Send } from "../assets/Icons"
import { useRef, useState } from "react"
import DraggableArea from "../components/DraggableArea"
import useAuth from "../hooks/useAuth"
export default function TodoSpace() {
    // const [inputValue, setInputValue] = useState()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [todoActive, setTodoActive] = useState<boolean>(true)

    const handleCompletedTasks = () => {
        setTodoActive(false)
    }
    const handleTodo = () => {
        setTodoActive(true)
    }
    const { token } = useAuth() ?? {}
    if (!token) { return <Navigate to={'/'} replace></Navigate > }
    return (
        <section className="w-screen h-screen flex flex-col md:flex-row justify-center items-center gap-14">
            <nav className="fixed top-0 z-20  w-screen h-20 md:h-11 bg-white shadow-xl grid grid-cols-5 grid-rows-1 place-content-center">
                <button onClick={handleTodo} className={`md:hidden text-lg col-span-2 font-bold place-self-center ${todoActive ? 'border-b-4' : ''} h-full w-full border-purple-700`}>TODO</button>
                <Link className="scale-150  md:col-span-5 place-self-center" to={'/'}><HomeIcon></HomeIcon></Link>
                <button onClick={handleCompletedTasks} className={`md:hidden text-lg col-span-2 font-bold place-self-center ${todoActive ? '' : 'border-b-4'} h-full w-full border-purple-700`}>COMPLETED</button>
            </nav>
            <DraggableArea messages={[{ message: 'holaa' }]} todoActive={todoActive}></DraggableArea>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (inputRef.current?.value.trim() == '') return
                // setMessages(prevState => prevState ? [...prevState, inputRef.current?.value] : [inputRef.current?.value])
            }} className="fixed z-20 bottom-5 w-screen flex justify-center items-center  " >
                <div className="relative flex w-[95%] md:w-[60%] lg:w-[45%]  ">
                    <input ref={inputRef} type="text" placeholder="Add task...." className=" text-black/95 text-lg focus:outline-none pr-[4.6rem] border-2 border-purple-700 mx-auto rounded-full lg:text-xl shadow-md shadow-purple-700 w-full md:h-12 lg:h-14 h-10  px-7" name="" id="" />
                    <button className=" absolute right-0  rounded-r-full z-10 md:h-12 lg:h-14 h-10 text-sm bg-gradient-to-br from-violet-500 hover:from-violet-400 hover:via-violet-500 hover:to-violet-800 transition duration-500 delay-150 from-10 via-violet-600 via-80% to-violet-950 px-4" type="submit"><Send></Send></button>
                </div>
            </form>



        </section>
    )
}