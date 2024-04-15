import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
export default function Nav() {
  const { token, signOut } = useAuth()
  return (<nav className='flex pt-4 py-2 sticky z-50 -top-2 justify-center w-screen items-center  bg-white shadow-sm shadow-black/15 px-4 md:px-8'>
    <Link to={'/'} className="flex-grow">
      <h1 className=" font-tilt relative font-black text-4xl md:text-5xl">
        Movin Out <span className="absolute w-3.5 h-3.5 bg-gradient-to-tr from-purple-800 via-pink-800 to-purple-800 rounded-full"></span>
      </h1>
    </Link>

    <ul className="flex gap-6 md:gap-10 text-2xl md:text-3xl font-semibold font-tilt">
      {(token !== null) ? (<li><Link to={'/todo'}>Tasks</Link></li>) : (<li><Link to={'/login'}>Login</Link></li>)}
      {(token !== null) ? (<li><Link onClick={() => {
        if (signOut) signOut()
      }} to={'/'}>signout</Link></li>) : (<li><Link to={'/register'}>Register</Link></li>)}
    </ul>
  </nav>)
}