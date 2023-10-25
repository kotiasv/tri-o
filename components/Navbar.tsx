import { useState, useEffect } from "react"

import NavbarItem from "./NavbarItem"
import Menu from "./Menu"

import { FaCartShopping } from "react-icons/fa6"
import { TfiMenu } from "react-icons/tfi"

import { navbarContext } from "../constants"

import "../src/index.css"

const Navbar = () => {
    const [mobile, setMobile] = useState<number | null>(null)
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    useEffect(() => {
        const updateMobile = () =>
            setMobile(window.innerWidth)
        updateMobile()

        window.addEventListener("resize", updateMobile)
        return () =>
            window.removeEventListener("resize", updateMobile)
    }, [])

    return (
        <header className="h-20 grid grid-cols-2 justify-between items-center px-3 bg-white fixed shadow-lg w-full z-20">
            <h1 className="text-3xl font-bold tracking-widest">TRI-O</h1>
            {mobile && mobile < 990 ? (
                <nav className="">
                    <div className="grid justify-end grid-flow-col gap-5 items-center">
                        <div className="cursor-pointer hover:text-yellow-400 transition-colors">
                            <FaCartShopping style={{
                                width: "20px",
                                height: "20px"
                            }} />
                        </div>
                        <div
                            className="cursor-pointer hover:text-yellow-400 transition-colors"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <TfiMenu style={{
                                width: "20px",
                                height: "20px"
                            }} />
                        </div>
                    </div>
                    <Menu
                        state={{
                            openMenu,
                            setOpenMenu,
                            context: "mobile"
                        }}
                    />
                </nav>
            ) : (
                <nav className="grid grid-flow-col justify-end gap-11">
                    <ul className="grid grid-flow-col gap-8 justify-center">
                        {navbarContext.map(item =>
                            <NavbarItem
                                key={item.title}
                                value={item}
                            />
                        )}
                    </ul>
                    <div className="grid grid-flow-col gap-3 items-center">
                        <div className="cursor-pointer hover:text-yellow-400 transition-colors">
                            <FaCartShopping />
                        </div>
                        <div
                            className="cursor-pointer hover:text-yellow-400 transition-colors"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <TfiMenu />
                        </div>
                    </div>
                    <Menu
                        state={{
                            openMenu,
                            setOpenMenu,
                            context: "desktop"
                        }}
                    />
                </nav>
            )}
        </header>
    )
}

export default Navbar