
import { useEffect } from "react";
import { useId } from "react";
import { useState } from "react";

export default function MauseEnterBar({ event, pos, children }) {
    const targetId = useId().slice(1, -1)

    const [state, setState] = useState({
        isopen: false,
        date: ""
    })

    const handle__Enter = (e) => {
        setTimeout(() => {
            setState(prev => {
                return { isopen: true, date: e }
            })
        }, 100)
    }

    const handle__Leave = (e) => {
        setTimeout(() => {
            setState(prev => {
                return { ...prev, isopen: false }
            })
        }, 100)
    }

    const Cordinations = () => {
        let own = state.date.target.getBoundingClientRect()

        let main = {
            top: own.top,
            left: own.left,
            height: own.height,
            width: own.width
        }

        if (pos == "top") {
            main.top = own.top - (own.height / 100 * 50) - 3
            main.left = own.left + (own.width / 100 * 50)
        } else if (pos == "bottom") {
            main.top = own.bottom + own.height + 3
            main.left = own.left + (own.width / 100 * 50)
        }

        return main
    }

    useEffect(() => {
        const handle__Target = (e) => {
            setState(prev => {
                return { ...prev, isopen: false }
            })
        }

        document.addEventListener("click", handle__Target)

        return () => document.removeEventListener("click", handle__Target)
    }, [])

    return (
        <>
            <div onMouseEnter={handle__Enter} onMouseLeave={handle__Leave} id={targetId}>
                {event}
            </div>
            {
                state.isopen
                &&
                <div className="fixed top-[0] left-[0] z-[4] w-[max-content] translate-x-[-50%] translate-y-[-70%] flex items-center justify-start"
                    style={{
                        "left": Cordinations().left + "px",
                        "top": Cordinations().top,
                        "flexDirection": pos == "bottom" ? "column-reverse" : "column"
                    }}
                >
                    <div className="px-[8px] py-[5px] bg-[#4b4b4b] rounded-[5px] text-[#FFF] font-roboto text-[12px] select-none">
                        {children}
                    </div>
                    <svg className="translate-x-[-1px]"
                        style={pos == "bottom" ? { "transform": "rotate(180deg) translateY(-2px)" } : { "transform": "translateY(-2px)" }}
                        width="20"
                        height="10"
                        viewBox="0 0 25 5">
                        <path d="M5 -2L12 6H13L21 -2Z" fill="#4b4b4b"></path>
                    </svg>
                </div >
            }
        </>
    );
}
