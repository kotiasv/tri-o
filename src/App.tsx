import { Navbar, About } from "../components"

const App = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            {/* hero */}
            <section className="pt-20 pb-80">
                <h2 className="uppercase text-center mt-72 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[.2em] font-bold">minimalism</h2>
                <p className="text-center md:text-lg max-w-xs mx-auto mt-10 md:max-w-md lg:max-w-lg font-bold tracking-wide">
                    Responsive & Retina ready, Tri-o looks awesome and elegant on all devices and screen size
                </p>
                <button className="uppercase block transition-colors hover:border-white hover:bg-black hover:text-white mx-auto border border-black px-7 py-4 mt-14">buy theme now</button>
            </section>
            {/* who we are */}
            <section className="pt-32">
                <div className="after:w-20 after:h-1 after:bg-yellow-400 after:block after:mt-8 after:mx-auto pb-12">
                    <h2 className="text-center tracking-wide text-2xl md:text-3xl px-4 font-bold uppercase">
                        Everything you can imagine is tri-o
                    </h2>
                    <p className="mt-10 text-center xs:text-lg text-gray-500 font-bold tracking-wide leading-7 max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
                        Tri-O is a unique and growing women&apos;s fashion brand making hot new trends affordable for everyone.
                    </p>
                </div>
                <About />
            </section>
        </>
    )
}

export default App
