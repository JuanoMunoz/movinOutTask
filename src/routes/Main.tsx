import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Main() {
  return (
    <>
      <Nav></Nav>
      <section className="flex  w-screen  relative mt-52 md:mt-64 xl:mt-96 justify-center items-center">
        <article className="absolute mb-44  md:mb-52   filter blur-3xl  top-0 bottom-0  flex  justify-center items-center -z-30">
          <div className="rounded-full mix-blend-darken -right-5  w-80 absolute lg:-right-9 h-80 md:w-[21rem] md:h-[21rem] lg:w-96 lg:h-96 bg-purple-700"></div>
          <div className="rounded-full mix-blend-darken absolute -left-5 lg:-left-9 w-80 h-80 md:w-[21rem] md:h-[21rem] lg:w-96 lg:h-96 bg-pink-500"></div>
        </article>
        <h1 className="font-serif mb-44 md:mb-52 lg:mb-28 drop-shadow-2xl shadow-black w-48 text-white  md:text-balance  z-50 text-4xl md:w-80 md:text-6xl">
          Streamline Your Tasks, Elevate Your Life.
        </h1>
      </section>
      <article className="w-screen  md:h-96 mt-40 md:mt-48 border-0   md:grid grid-cols-2 place-content-center">
        <div className="place-self-center mix-blend-multiply relative w-full  h-96 flex justify-center border-2 bg-gradient-to-r from-blue-500 to-violet-600 ">
          <h3 className="text-xl text-white  w-40 text-pretty font-semibold font-serif place-self-center">
            Take it everywhere, get it done.
          </h3>
          <div className=" custom-shape-divider-top-1713046325">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="place-self-center hidden mix-blend-multiply relative w-full  h-96 md:flex justify-center border-2 bg-gradient-to-r from-violet-600 to-blue-800 ">
          <h3 className="text-xl text-white  w-40 text-pretty font-semibold font-serif place-self-center">
            Task mastery, anytime, anywhere.
          </h3>
          <div className=" custom-shape-divider-top-1713046057">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </article>
      <Footer></Footer>
    </>
  );
}
