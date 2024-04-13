import { LoginIcon } from "../assets/Icons"
export default function LoginForm() {
    return( <form className=" p-4 flex flex-col  justify-center lg:gap-5 items-center w-72 md:w-80 lg:w-[22rem] h-96 lg:h-[28rem] bg-gradient-to-tr from-white via-gray-100 to-white shadow-2xl">
        <h3 className=" font-bold mb-10  lg:mb-7 text-pretty text-xl">Access to <span className="bg-gradient-to-br bg-clip-text text-transparent from-purple-500 to-pink-400 via-violet-600">Movin Out</span></h3>
                <div className="flex flex-col justify-center gap-5  items-center">
                <input  className="text-lg h-8 md:h-12 focus:outline-none border-4 p-3 rounded-lg w-full border-purple-400" type="email" placeholder="email@mail.com..." name="" id="" />
                    <input className="text-lg h-8 md:h-12 focus:outline-none border-4 p-3 rounded-lg w-full  border-purple-400" placeholder="password..." type="password" name="" id="" />
                    <button type="submit" className="w-full flex justify-center items-center rounded-lg md:mt-5 text-lg md:py-3 py-2 bg-purple-950 text-white hover:bg-purple-800 gap-2 transition-colors duration-300 font-bold font-serif" ><LoginIcon></LoginIcon><span>log in</span></button>
                    </div>
        </form>)
}