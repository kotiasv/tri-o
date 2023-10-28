import {
    Navbar,
    About,
    Benefits,
    Blog,
    Footer
} from "../components"

const App = () => {
    return (
        <div className="selection:bg-yellow-500 selection:text-white">
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
            {/* benefits */}
            <Benefits />
            {/* demo */}
            <section className="py-32">
                <div className="px-7 mx-auto md:max-w-2xl">
                    <h2 className="text-4xl font-bold md:ml-2">
                        An <span className="text-yellow-500">
                            Unique
                        </span> Fashion Demo.
                    </h2>
                    <p className="mt-5 text-gray-500 md:ml-2">
                        Our key aim is to provide an exciting clothing collection alongside an excellent shopping experience for all our customers.
                    </p>
                    <div className="mt-4 grid sm:grid-flow-col sm:justify-center gap-5">
                        <div className="w-full sm:w-72 h-64 bg-black" />
                        <div className="w-full sm:w-72 h-64 bg-black" />
                    </div>
                </div>
            </section>
            {/* collection */}
            <section className="h-[570px] w-full bg-no-repeat bg-center bg-cover bg-[url('./collection.jpg')] grid items-center before:bg-[#34343450] before:w-full before:h-full relative before:absolute before:top-0">
                <div className="grid justify-end items-center w-full max-w-5xl mx-auto">
                    <h2 className="text-6xl max-w-sm text-center md:max-w-lg font-bold text-white z-10 leading-[6rem]">
                        The Triple Osbourne Pre Fall Collection.
                    </h2>
                </div>
            </section>
            {/* blog */}
            <section className="py-32">
                <div className="after:h-1 after:w-20 after:bg-yellow-400 after:block after:mx-auto">
                    <h2 className="text-3xl font-bold text-center uppercase">
                        blog
                    </h2>
                    <p className="mt-5 mx-auto text-sm max-w-sm text-center text-gray-500 mb-8">
                        Meet excellent blog styles with lots of new features and beautiful easy-to-use layouts.
                    </p>
                </div>
                <Blog />
            </section>
            {/* testimonials */}
            <section className="py-32 bg-black">
                <div className="max-w-sm sm:max-w-lg md:max-w-3xl px-4 mx-auto">
                    <div className="w-20 h-20 bg-white rounded-full" />
                    <p className="mt-7 text-white text-xl sm:text-2xl md:text-3xl max-w-sm sm:max-w-lg md:max-w-3xl font-bold tracking-wider">
                        <sub className="text-5xl">“</sub>
                        This is absolutely the best theme I have ever used.
                        The design quality is exquisite. Their response time is unheard of.
                    </p>
                    <div className="w-20 h-1 bg-yellow-400 mt-9" />
                    <div className="text-white grid grid-flow-col max-w-[300px] mt-7">
                        <p className="uppercase font-bold">
                            Jessica Jung
                        </p>
                        <p>
                            Graphic Design
                        </p>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default App
