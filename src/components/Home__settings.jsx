import { useEffect } from "react";
import { useId } from "react";
import { memo } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Controll__Widgets, HomeBgId } from "./Home";

function Home__settings() {
    const [open, setOpen] = useState(false)
    const modalId = useId().slice(1, -1)
    const openModalBtn = useId().slice(1, -1)
    const closeModalBtn = useId().slice(1, -1)
    const home__bg__id = useContext(HomeBgId)
    const [bg, setBg] = useState([
        {
            isActive: false,
            color: "rgb(147, 140, 225)",
            src: "/assets/img/porple__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(69, 115, 210)",
            src: "/assets/img/blue__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(173, 124, 196)",
            src: "/assets/img/bold__porple__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(246, 160, 163)",
            src: "/assets/img/pink__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(224, 222, 220)",
            src: "/assets/img/milk__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(91, 7, 58)",
            src: "/assets/img/red__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(226, 160, 57)",
            src: "/assets/img/yellow__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(174, 207, 85)",
            src: "/assets/img/green__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(40, 91, 82)",
            src: "/assets/img/dark__green__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(54, 184, 177)",
            src: "/assets/img/aqua__bg.jpg"
        },
        {
            isActive: false,
            color: "rgb(169, 220, 217)",
            src: "/assets/img/dark__aqua__bg.jpg"
        },
        {
            isActive: false,
            color: "",
            src: ""
        }
    ])

    const [widget, setWidget] = useContext(Controll__Widgets)

    useEffect(() => {
        let a = document.querySelector(`#${home__bg__id}`)
        let index = JSON.parse(localStorage.getItem("home__bg__image")) || bg.length - 1

        a.style.backgroundImage = `url(${bg[index].src})`
    }, [bg])

    useEffect(() => {
        const handle__Target = (e) => {
            if (e.target.closest(`#${openModalBtn}`)) {
                setOpen(true)
            }


            let a = document.querySelector(`#${modalId}`)
            if ((!e.target.closest(`#${modalId}`) || e.target.closest(`#${closeModalBtn}`)) && a) {
                a.classList.add("animate-home__settings__close")
                a.classList.add("translate-x-[100%]")
                setTimeout(() => {
                    setOpen(false)
                }, 200)
            }
        }

        document.addEventListener("click", handle__Target)

        return () => document.removeEventListener("click", handle__Target)
    }, [])

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem("home__bg__image")) || bg.length - 1

        setBg(prev => prev.map((item, index) => {
            if (index == id) {
                return { ...item, isActive: true }
            } else {
                return { ...item, isActive: false }
            }
        }))
    }, [])

    const handle__Bg = (e) => {
        let id = e.target.getAttribute("index")

        setBg(prev => prev.map((item, index) => {
            if (index == id) {
                return { ...item, isActive: true }
            } else {
                return { ...item, isActive: false }
            }
        }))

        localStorage.setItem("home__bg__image", JSON.stringify(id))
    }

    return (
        <>
            {
                open
                &&
                <div className="w-[385px] h-[100%] fixed bottom-0 right-0 z-[2] bg-[#1e1f21] border-x-[2px] border-x-solid border-x-[#424244] translate-x-[0] duration-[0.2s] animate-home__settings__open flex flex-col" id={modalId}>
                    <div className="px-[32px] flex items-center border-b-[1px] border-b-solid border-b-[#424244] justify-between">
                        <h3 className="text-[24px] leading-[32px] font-[500] text-[#f5f4f3] font-roboto py-[5px] max-w-[218px]">Настройка главной страницы</h3>
                        <button id={closeModalBtn} className="group/item cursor-pointer w-[28px] h-[28px] flex items-center justify-center hover:bg-[#ffffff0f] rounded-[6px]">
                            <svg viewBox="0 0 32 32" width="16" height="16">
                                <path d="M2,14.5h18.4l-7.4-7.4c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l10,10c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l7.4-7.4H2c-0.8,0-1.5-0.7-1.5-1.5C0.5,15.3,1.2,14.5,2,14.5z M28,3.5C28,2.7,28.7,2,29.5,2S31,2.7,31,3.5v25c0,0.8-0.7,1.5-1.5,1.5S28,29.3,28,28.5V3.5z" className="fill-[#a2a0a2] duration-[0.2s] group-hover/item:fill-[#FFF]" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[100%] h-[100%] px-[32px] py-[10px] overflow-y-auto">
                        <div>
                            <h2 className="text-[16px] leading-[20px] font-[500] font-roboto text-[#f5f4f3]">Фон</h2>
                            <div className="flex flex-wrap gap-[8px] py-[12px]">
                                {
                                    bg.map((item, index) => (
                                        <div key={index} className="w-[43px] h-[43px] rounded-[50%] flex items-center justify-center cursor-pointer outline-[2px] duration-[0.2s] outline outline-offset-[2px] outline-[transparent] hover:outline-[#FFF]" style={{ "background": item.color, "outlineColor": item.isActive && "#FFF" }} index={index} onClick={handle__Bg}>
                                            {
                                                item.isActive
                                                &&
                                                <svg viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M9.5,18.2c-0.4,0.4-1,0.4-1.4,0l-3.8-3.8C4,14,4,13.4,4.3,13s1-0.4,1.4,0l3.1,3.1l8.6-8.6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4 L9.5,18.2z" fill="#f5f4f3" />
                                                </svg>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <dir className="mt-[32px]">
                            <h2 className="text-[16px] leading-[20px] font-[500] font-roboto text-[#f5f4f3]">Виджеты</h2>
                            <h3 className="text-[14px] leading-[22px] font-[400] font-roboto text-[#a2a0a2] mt-[3px]">Click add or drag widgets below to your Home screen. You can also reorder and remove them.</h3>
                            <div className="flex flex-col gap-[16px] my-[16px]">
                                {
                                    widget.map((item, index) => {
                                        if (!item.isOpened) {
                                            const handle__Add = (e) => {
                                                if (e.target.closest("button")) {
                                                    setWidget(prev => prev.map(itemEl => {
                                                        if (itemEl.name == item.name) {
                                                            return { ...itemEl, isOpened: true }
                                                        } else {
                                                            return itemEl
                                                        }
                                                    }))
                                                }
                                            }

                                            return (
                                                <div key={index} className="w-[100%] h-[145px] relative rounded-[8px] duration-[0.2s] cursor-pointer shadow-defolt_widget border-[1px] border-solid border-[#2a2b2d] hover:shadow-hover_widget">
                                                    <img src={item.src} className="absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-[8px] z-[-1]" />
                                                    <div className="flex justify-between items-center p-[3px]">
                                                        <h3 className="text-[14px] leading-[22px] font-roboto text-[#f5f4f3] font-[400] ml-[12px]">{item.subName}</h3>
                                                        <button className="flex items-center justify-center p-[5px] rounded-[6px] px-[12px] duration-[0.2s] hover:bg-[#ffffff0f] group/item" onClick={handle__Add}>
                                                            <svg viewBox="0 0 32 32" width="16" height="16">
                                                                <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z" className="fill-[#a2a0a2] group-hover/item:bg-[#f5f4f3]" />
                                                            </svg>
                                                            <span className="text-[14px] leading-[22px] font-roboto text-[#a2a0a2] font-[400] group-hover/item:text-[#f5f4f3]">Добавить</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </dir>
                    </div>
                </div>
            }
            <button className='ml-auto self-end flex items-center font-roboto text-[14px] leading-[33px] text-[#f5f4f3] rounded-[6px] cursor-pointer bg-[#2a2b2d] border-[1px] border-solid border-[#424244] px-[12px] gap-[4px] duration-[0.2s] hover:border-[#6a696a]' id={openModalBtn}>
                <svg width="16" height="16" viewBox="0 0 32 32">
                    <path d="M9.5,2C10.878,2,12,3.122,12,4.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,12,2,10.878,2,9.5v-5C2,3.122,3.122,2,4.5,2H9.5M9.5,0h-5C2.015,0,0,2.015,0,4.5v5C0,11.985,2.015,14,4.5,14h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,2.015,11.985,0,9.5,0L9.5,0zM27.5,2C28.879,2,30,3.122,30,4.5v5c0,1.378-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.122-2.5-2.5v-5C20,3.122,21.121,2,22.5,2H27.5M27.5,0h-5C20.015,0,18,2.015,18,4.5v5c0,2.485,2.015,4.5,4.5,4.5h5c2.485,0,4.5-2.015,4.5-4.5v-5C32,2.015,29.985,0,27.5,0L27.5,0z M9.5,20c1.378,0,2.5,1.122,2.5,2.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,30,2,28.878,2,27.5v-5C2,21.122,3.122,20,4.5,20H9.5M9.5,18h-5C2.015,18,0,20.015,0,22.5v5C0,29.985,2.015,32,4.5,32h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,20.015,11.985,18,9.5,18L9.5,18z M24,24v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h5c0.55,0,1,0.45,1,1s-0.45,1-1,1h-5v5c0,0.55-0.45,1-1,1s-1-0.45-1-1v-5h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1H24z" fill="#a2a0a2" />
                </svg>
                Настроить
            </button>
        </>
    );
}

export default Home__settings;