
import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function CallModal({ event, width, pos, children }) {
    const targetId = useId().slice(1, -1)
    const modalId = useId().slice(1, -1)

    const [state, setState] = useState({
        isopen: false,
        date: ""
    })

    const handle__Click = (e) => {
        setState(prev => {
            return { isopen: !prev.isopen, date: e?.target?.closest(`#${targetId}`) }
        })
    }

    const Cordinations = () => {
        let own = state.date.getBoundingClientRect()

        let main = {
            top: own.top,
            left: own.left
        }

        if (pos == "bottom") {
            main.top = own.bottom
        } else if (pos == "bottom-left") {
            main.top = own.bottom + 5
            main.left = own.right
        } else if (pos == "bottom-right") {
            main.top = own.bottom + 5
            main.left = own.left
        } else if (pos == "right") {
            main.left = own.right
        } else if (pos == "botom") {
            main.top = own.bottom + 5
            main.left = own.right
        }

        return main
    }

    useEffect(() => {
        const handle__Target = (e) => {
            if (!e.target.closest(`#${targetId}`) && !e.target.closest(`#${modalId}`)) {
                setState(prev => {
                    return { ...prev, isopen: false }
                })
            }
        }

        document.addEventListener("click", handle__Target)

        return () => document.removeEventListener("click", handle__Target)
    }, [])

    return (
        <>
            <button onClick={handle__Click} className={`${event?.props?.className}`} id={targetId}>
                {event.props.children}
            </button>
            {
                state.isopen
                &&
                <div
                    id={modalId}
                    className={`fixed left-[10px] bg-[#1e1f21] py-[4px] rounded-[4px] border-[1px] border-solid border-[#424244] shadow-modal z-[5]`}
                    style={{
                        "width": width + "px",
                        "left": Cordinations()?.left + "px",
                        "top": Cordinations()?.top + "px",
                        "transform":
                            pos == "left" || pos == "bottom-left"
                                ?
                                "translateX(-100%)"
                                :
                                pos == "top"
                                    ?
                                    "translateY(-100%)"
                                    :
                                    ""
                    }}>
                    {children}
                </div>
            }
        </>
    )
}
