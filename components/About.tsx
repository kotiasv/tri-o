const About = () => {
    return (
        <div className="grid grid-rows-2 about:grid-cols-about about:max-w-[1100px] px-9 about:items-center about:justify-around about:mx-auto">
            <div className="w-full mt-8 about:mt-0">
                <h2 className="text-4xl font-bold">
                    Who We Are?
                </h2>
                <p className="mt-5 about:max-w-sm text-gray-600 leading-6">
                    Tri-O has become well known for signature prints and we are constantly looking to find new, innovative and  easy to wear prints from all over the world. We pride ourselves on delivering high quality clothing at an    affordable price.
                </p>
                <button className="mt-9 uppercase block text-white bg-gray-950 transition-colors hover:bg-yellow-500 px-7 py-4 about:py-6">
                    discover more
                </button>
            </div>
            <div className="grid about:w-[500px] about:h-[500px] sm:grid-cols-2 justify-center sm:grid-rows-2 order-first about:order-last">
                <div className="bg-black w-[250px] sm:w-[230px] h-[300px] justify-self-end mr-3" />
                <div className="bg-black w-[250px] mt-3 sm:w-[248px] h-[230px] self-end" />
                <div className="bg-black w-[250px] sm:w-[230px] h-[180px] mt-3 about:mt-0 mr-3 about:self-end justify-self-end" />
                <div className="bg-black w-[250px] sm:w-[248px] h-[250px] mt-3" />
                
            </div>
        </div>
    )
}

export default About