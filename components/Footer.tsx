const Footer = () => {
    return (
        <footer className="mt-52 bg-[#222] text-white px-12 lg:px-5 py-12">
            <div className="max-w-lg mx-auto grid sm:grid-cols-2 xl:grid-flow-col sm:max-w-2xl xl:max-w-6xl lg:gap-14">
                <div className="pt-7 max-w-xs">
                    <h3 className="uppercase font-bold text-2xl mb-7">
                        booking
                    </h3>
                    <p className="text-gray-500 pr-2">
                        Max Weatherall. Productions
                        562 Sycamore Circle
                        Atlanta, GA 30342<br />
                        T: +920364426
                    </p>
                    <p className="text-gray-500 mt-5">
                        Email: your@example.com
                        www.hastech.company
                    </p>
                </div>
                <div className="pt-7">
                    <h3 className="uppercase font-bold text-2xl mb-7">
                        links
                    </h3>
                    <ul className="grid gap-4 text-gray-500">
                        <li className="cursor-pointer transition-colors hover:text-yellow-400 uppercase">home</li>
                        <li className="cursor-pointer transition-colors hover:text-yellow-400 uppercase">shop</li>
                        <li className="cursor-pointer transition-colors hover:text-yellow-400 uppercase">about us</li>
                        <li className="cursor-pointer transition-colors hover:text-yellow-400 uppercase">blog</li>
                        <li className="cursor-pointer transition-colors hover:text-yellow-400 uppercase">contact</li>
                    </ul>
                </div>
                <div className="pt-7">
                    <h3 className="uppercase font-bold text-2xl mb-7">
                        latest from blog
                    </h3>
                    <div className="pt-5 after:block after:w-10 after:h-1 after:bg-slate-700 after:mt-3">
                        <h4 className="font-bold cursor-pointer transition-colors hover:text-yellow-400">
                            Work Passionately
                        </h4>
                        <p className="mt-5 text-gray-500">
                            March 9, 2022
                        </p>
                    </div>
                    <div className="pt-5">
                        <h4 className="font-bold cursor-pointer transition-colors hover:text-yellow-400">
                            Creating electronic beats in the
                        </h4>
                        <p className="mt-5 text-gray-500">
                            March 8, 2022
                        </p>
                    </div>
                </div>
                <div className="pt-7">
                    <h3 className="uppercase font-bold text-2xl mb-7">
                        get in touch
                    </h3>
                    <div className="">
                        <p className="text-gray-500 sm:max-w-xs">
                            Enter your email and receive the latest news from us.
                        </p>
                        <input
                            type="text"
                            className="mt-4 py-3 pl-4 bg-[#444] text-[#ccc] "
                            placeholder="Enter Email Address"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer