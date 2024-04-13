import { Link } from "react-router-dom"
export default function Error() {
    return (
        <>
            <section className="flex flex-col md:gap-12 gap-5 py-20 w-screen h-screen  justify-center items-center">
                <h1 className="font-tilt text-2xl md:text-6xl lg:text-8xl font-black">404 - PAGE NOT FOUNDED</h1>
                <Link className="italic font-tilt text-lg md:text-xl lg:text-3xl hover:text-blue-400 text-blue-600" to={'/'}>back to index</Link>
            </section>
        </>
    )
}