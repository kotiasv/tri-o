import { SetStateAction } from "react"

import { AiFillTwitterCircle, AiOutlineClose } from "react-icons/ai"
import { BsFacebook, BsPinterest } from "react-icons/bs"

const Menu = ({ state: { openMenu, setOpenMenu, context } }: {
    state: {
        openMenu: boolean
        setOpenMenu: (value: SetStateAction<boolean>) => void
        context: "desktop" | "mobile"
    },
}) => {

    return (
        <div className={openMenu ? "block fixed" : "hidden"}>
            <div className="fixed right-0 top-0 z-10 w-72 h-full bg-white pl-10">
                {context == "desktop" ? (
                    <>
                        <div
                            className="mt-4 cursor-pointer grid justify-end pr-9"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <AiOutlineClose style={{
                                width: "20px",
                                height: "20px"
                            }} />
                        </div>
                        <h3 className="font-bold tracking-tight mb-6 mt-14">
                            {
                                "Who we are".toUpperCase()
                            }
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Organic seitan post-ironic, four loko bicycle rights art party tousled. Mlkshk tote bag stumptown.
                        </p>
                        <h3 className="font-bold tracking-tight mb-6 mt-14">
                            {
                                "Useful Links".toUpperCase()
                            }
                        </h3>
                        <ul className="grid gap-4">
                            {[
                                "Home",
                                "About Us",
                                "Contact",
                                "Shop",
                                "Blog"
                            ].map(content => (
                                <li
                                    className="text-gray-500 font-bold"
                                    key={`menu-${content}`}
                                >
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-yellow-400"
                                    >
                                        {content}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-bold tracking-tight mb-6 mt-14">
                            {
                                "Connect".toUpperCase()
                            }
                        </h3>
                        <ul className="grid grid-flow-col items-center justify-start gap-4">
                            <li>
                                <a href="#" className="transition-colors hover:text-yellow-400">
                                    <BsFacebook style={{
                                        width: "25px",
                                        height: "25px"
                                    }} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-yellow-400">
                                    <AiFillTwitterCircle style={{
                                        width: "30px",
                                        height: "30px"
                                    }} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-yellow-400">
                                    <BsPinterest style={{
                                        width: "25px",
                                        height: "25px"
                                    }} />
                                </a>
                            </li>
                        </ul>
                    </>
                ) : (<>
                    <div
                        className="mt-4 cursor-pointer grid justify-end pr-9"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <AiOutlineClose style={{
                            width: "20px",
                            height: "20px"
                        }} />
                    </div>
                </>)}

            </div>
            <div
                className="fixed cursor-pointer left-0 top-0 w-full h-full bg-[#00000091]"
                onClick={() => setOpenMenu(!openMenu)}
            />
        </div>
    )
}

export default Menu