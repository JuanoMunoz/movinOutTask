import { Link } from "react-router-dom"
export default function Nav() {
    return (      <nav className='flex pt-4 py-2 sticky -top-2 justify-center w-screen items-center  bg-white shadow-sm shadow-black/15 px-4 md:px-8'>
        <Link to={'/'} className="flex-grow">
        <h1 className=" font-tilt relative font-black text-4xl md:text-5xl">
          Movin Out <span className="absolute w-3.5 h-3.5 bg-gradient-to-tr from-purple-800 via-pink-800 to-purple-800 rounded-full"></span>
        </h1>
        </Link>

        <ul className="flex gap-6 md:gap-10 text-2xl md:text-3xl font-semibold font-tilt">
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li>
        </ul>
      </nav>)
}