import { useLayoutEffect, useRef, useState } from "react"
import { navbarContextItem } from "../constants"

const NavbarItem = ({value: { title, content, place }} : {
    value: navbarContextItem
}) => {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)
    const [show, setShow] = useState(false)
    
    useLayoutEffect(() => {
        if (!show) return

        setWidth(ref.current.offsetWidth)
    }, [show])

    return (
        <div className="relative cursor-pointer">
            <a onMouseEnter={() => setShow(true)}>{title.toUpperCase()}</a>
            <div className={`absolute transition-opacity grid ${show ? "opacity-100" : "hidden opacity-0"} top-0 bg-white gap-3 py-4 z-10 shadow-lg shadow-gray-400`} ref={ref} style={{
                gridTemplateColumns: `repeat(${content.length}, 1fr)`,
                left: `-${place ? width / 1.65 : width - 20}px`
            }}
            onMouseLeave={() => setShow(false)}
            >
                {content.map((list, i) => 
                    <div 
                        key={`title-list-${i}`}
                        className={"last:border-none border-r border-gray-300"}
                    >
                        {list.title && (
                            <h3 className="pl-3 mt-2 font-bold leading-tight">
                                {list.title.toUpperCase()}
                            </h3>
                        )}
                        <ul className="grid px-3 pt-4 first:w-[160px]" style={{
                            gridTemplateRows: `repeat(${list.content.length}, 1fr)`
                        }}>
                            {list.content.map((item, i) => 
                                <li 
                                    key={`title-item-${i}`} 
                                    className="text-sm mt-4 w-[180px] text-gray-500"
                                >
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavbarItem