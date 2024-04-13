import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"
export default function Login() {
           return (<>
        <Nav></Nav>
        <section className="w-screen md:mt-10 h-screen flex justify-center items-center
        ">
        <section className="md:flex mb-20 font-sans  md:scale-90 md:justify-center rounded-md md:px-8 lg:px-20 lg:gap-16 md:gap-5 md:items-start md:bg-gradient-to-br from-purple-950 via-purple-800 to-purple-900 md:shadow-md md:shadow-purple-950 py-10">
            <LoginForm></LoginForm>
                <article className="hidden md:grid place-content-center justify-items-start  md:grid-rows-3 md:grid-cols-1">
                    <h4 className="text-white md:w-40 lg:w-60 font-semibold text-pretty md:text-3xl md:mx-3  lg:text-5xl font-tilt ">Organise <span className=" font-bold border-b-4  border-b-pink-300">your</span> routine</h4>
                    <p className=" md:px-4 lg:px-2 text-gray-50 text-lg place-self-start">set short, medium and long term goals</p>
                    <h6 className=" self-end md:mt-[6.3rem] lg:mt-[7.5rem] text-white text-pretty md:text-xl md:mx-3  lg:text-2xl font-tilt ">new in Movin Out? <Link to={'/register'} className="italic underline text-blue-500">Sign uo</Link> </h6>
        </article>
        </section>
        </section>
    </>)
}