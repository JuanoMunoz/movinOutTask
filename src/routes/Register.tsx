import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import RegisterForm from "../components/RegisterForm"
export default function Register() {
    return (<>
        <Nav></Nav>
        <section className="w-screen md:mt-10 h-screen flex justify-center items-center
        ">
        <section className="md:flex mb-20 font-sans  md:scale-90 md:justify-center rounded-md md:px-8 lg:px-20 lg:gap-16 md:gap-5 md:items-start md:bg-gradient-to-br from-purple-950 via-purple-800 to-purple-900 md:shadow-md md:shadow-purple-950 py-10">
                <article className="hidden md:grid md:gap-8 lg:gap-2.5 md:grid-rows-3 md:grid-cols-1">
                    <h4 className="text-white md:w-40 lg:w-60 font-semibold text-pretty md:text-3xl md:mx-3  lg:text-5xl font-tilt ">Start managing <span className=" font-bold border-b-4  border-b-pink-300">your</span> tasks</h4>
                    <div></div>
                    <h6 className="place-self-end text-white text-pretty md:text-xl md:mx-3  lg:text-2xl font-tilt ">already have an account? <Link to={'/login'} className="italic underline text-blue-500">log in</Link> </h6>
        </article>
        <RegisterForm></RegisterForm>
        </section>
        </section>
    </>)
}