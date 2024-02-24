
import { createContext } from "react";
import { useContext } from "react";
import { Controll__Widgets } from "./Home";

export const Widgates = createContext("")

function Complate__Widget() {
    const [widget, setWidget] = useContext(Controll__Widgets)

    return (
        <Widgates.Provider value={[widget, setWidget]}>
            {
                widget.map((item, index) => {
                    if (item.isOpened) {

                        const handle__Delate = () => {
                            setWidget(prev => prev.map(itemEl => {
                                if (itemEl.name == item.name) {
                                    return { ...itemEl, isOpened: false }
                                } else {
                                    return itemEl
                                }
                            }))
                        }

                        const handle__Half = () => {
                            setWidget(prev => prev.map(itemEl => {
                                if (itemEl.name == item.name) {
                                    return { ...itemEl, size: "half" }
                                } else {
                                    return itemEl
                                }
                            }))
                        }

                        const handle__Full = () => {
                            setWidget(prev => prev.map(itemEl => {
                                if (itemEl.name == item.name) {
                                    return { ...itemEl, size: "full" }
                                } else {
                                    return itemEl
                                }
                            }))
                        }

                        const check__full = () => {
                            if (item.size == "full") {
                                return (
                                    <svg viewBox="0 0 32 32" width="16" height="16">
                                        <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z" fill="#a2a0a2" />
                                    </svg>
                                )
                            } else {
                                return <div className="w-[20px] h-[20px]"></div>
                            }
                        }

                        const check__hulf = () => {
                            if (item.size == "half") {
                                return (
                                    <svg viewBox="0 0 32 32" width="16" height="16">
                                        <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z" fill="#a2a0a2" />
                                    </svg>
                                )
                            } else {
                                return <div className="w-[20px] h-[20px]"></div>
                            }
                        }

                        if (item.elem) {
                            return (
                                <div key={index} className={`${item.size == "half" ? "w-[49.3%]" : "w-[100%]"} h-[410px] shadow-custom border-[1px] border-solid border-[#2a2b2d] bg-[#2a2b2d] rounded-[8px] cursor-pointer relative duration-[0.2s] hover:shadow-custom_hover group/item`}>{item.elem(handle__Delate, handle__Half, handle__Full, check__full, check__hulf)}</div>
                            )
                        }
                    }
                })
            }
        </Widgates.Provider>
    );
}

export default Complate__Widget;

