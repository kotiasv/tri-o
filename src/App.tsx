import { Navbar } from "../components"

const App = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            {/* hero */}
            <section className="pt-20 h-screen">
                <h2 className="uppercase text-center mt-52 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[.2em] font-bold">minimalism</h2>
                <p className="text-center md:text-lg max-w-xs mx-auto mt-10 md:max-w-md lg:max-w-lg font-bold tracking-wide">
                    Responsive & Retina ready, Tri-o looks awesome and elegant on all devices and screen size
                </p>
                <button className="uppercase block transition-colors hover:border-white hover:bg-black hover:text-white mx-auto border border-black px-7 py-4 mt-14">buy theme now</button>
            </section>
            <section>
                
            </section>
        </>
    )
}

export default App
