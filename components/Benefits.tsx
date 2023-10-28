import { benefitsContext } from "../constants"

const Benefits = () => {
    return (
        <section className="bg-[#e3e3e3] mt-32 py-32 md:mx-auto px-1 sm:px-2">
            <ul className="grid md:grid-cols-2 mx-auto gap-9 items-center justify-center lg:max-w-5xl">
                {benefitsContext.map((context, i) => (
                    <li
                        key={`benefits-${i}`}
                        className="grid grid-flow-col mx-auto gap-5"
                    >
                        <div className="justify-self-end w-14 h-14 border-[3px] border-black rounded-full grid items-center justify-center font-bold text-2xl">
                            {i + 1}
                        </div>
                        <div className="">
                            <h3 className="font-bold text-lg uppercase">
                                {context.title}
                            </h3>
                            <p className="max-w-xs sm:max-w-sm md:max-w-[260px] lg:max-w-sm mt-7 leading-6 text-gray-600">
                                {context.description}
                            </p>
                            <button className="mt-5 uppercase font-bold transition-colors hover:text-yellow-500">
                                view demo
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Benefits