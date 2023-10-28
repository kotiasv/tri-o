import { blogContext } from "../constants"

const Blog = () => {
    return (
        <div className="grid gap-7 mt-7 mx-auto justify-center md:grid-cols-2 md:items-center lg:items-start lg:grid-cols-3 max-w-[1250px] mx-auto">
            {blogContext.map((context, i) => (
                <div
                    className="px-5 sm:max-w-[512px] md:max-w-[336px] lg:max-w-[400px] mx-auto"
                    key={`blog-${i}`}
                >
                    <div className="w-full h-[387px] bg-black" />
                    <h3 className="mt-3 text-xl">
                        {context.title}
                    </h3>
                    <div className="grid grid-flow-col max-w-[190px] mt-2">
                        <p>
                            {context.author}
                        </p>
                        <p>
                            {context.date}
                        </p>
                    </div>
                    <div className="mt-2 pr-3 text-gray-600 leading-6 sm:">
                        {context.description}
                    </div>
                    <button className="mt-5 uppercase font-bold transition-colors hover:text-yellow-500">
                        keep reading
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Blog