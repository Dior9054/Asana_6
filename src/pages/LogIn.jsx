
import { useState } from "react"
import { axiosJs } from "../components/axiosJs"

export default function LogIn() {
    const [hid__password, setHid__password] = useState(false)
    const [bad, setBad] = useState({
        isFalse: false,
        loading: false,
        error: false,
        date: "",
    })

    const handle__Change = (e) => {
        setBad(prev => {
            prev.isFalse = false
            prev.date = ""
            return { ...prev }
        })
    }

    const handle__Submit = (e) => {
        e.preventDefault()

        let userDate = new FormData(e.target)
        userDate = Object.fromEntries(userDate.entries())

        setBad(prev => {
            return { ...prev, loading: true, error: false, isFalse: false }
        })

        try {
            axiosJs.post("auth/token/login/", userDate)
                .then(res => {
                    if (res?.data) {
                        localStorage.setItem("auth_token", JSON.stringify(res.data.auth_token))
                        localStorage.setItem("user-color", JSON.stringify(`${Math.floor(Math.random() * 16777215).toString(16)}`))
                        window.location.href = "/"
                    }
                })
                .catch(err => {
                    setBad(prev => {
                        return { ...prev, loading: false, error: false, isFalse: true, date: err.response.data.non_field_errors[0] }
                    })
                })
        } catch {
            setBad(prev => {
                return { ...prev, loading: false, error: true, isFalse: false }
            })
        }
    }

    return (
        <>
            {
                bad.loading
                &&
                <div className="w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000b3] z-[9] flex items-center justify-center select-none">
                    <img src="/assets/img/loading.gif" className="w-[100px] h-[100px] cursor-pointer" />
                </div>
            }
            {
                bad.error
                &&
                <div className="w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000cc] z-[9] flex items-center justify-center select-none">
                    <div className="flex gap-[5px] items-center cursor-pointer">
                        <svg viewBox="0 0 64 64" width="20" height="20">
                            <circle cx="32" cy="32" r="28" stroke="red" stroke-miterlimit="10" stroke-width="4" fill="none" />
                            <line x1="32" x2="32" y1="18" y2="38" stroke="red" stroke-miterlimit="10" stroke-width="4" fill="none" />
                            <line x1="32" x2="32" y1="42" y2="46" stroke="red" stroke-miterlimit="10" stroke-width="4" fill="none" />
                        </svg>
                        <span className="text-[red] text-[16px] font-roboto font-[500]">Произашло ошибка</span>
                    </div>
                </div>
            }
            <div className="w-[100%] h-[100%] flex flex-col items-center justify-between px-[40px] py-[25px] bg-[#FFF]">
                <header className="w-[100%] self-start">
                    <svg viewBox="0 0 112 24" width="112" className="cursor-pointer">
                        <path d="M108.202 16.703c.067.765.679 1.739 1.74 1.739h.62a.44.44 0 0 0 .438-.438V4.359h-.003a.437.437 0 0 0-.435-.414h-1.922a.437.437 0 0 0-.435.414h-.003v1.109c-1.178-1.452-3.035-2.055-4.897-2.055a7.667 7.667 0 0 0-7.665 7.67 7.668 7.668 0 0 0 7.665 7.672c1.862 0 3.892-.723 4.897-2.054v.002Zm-4.89-.633c-2.692 0-4.874-2.232-4.874-4.986 0-2.754 2.182-4.986 4.874-4.986 2.693 0 4.875 2.232 4.875 4.986 0 2.754-2.182 4.986-4.875 4.986ZM93.21 17.172v-7.06c0-3.981-2.51-6.666-6.51-6.666-1.91 0-3.476 1.105-4.029 2.055-.12-.743-.513-1.523-1.735-1.523h-.622a.439.439 0 0 0-.438.438v13.646h.003c.012.23.203.414.435.414h1.923c.029 0 .058-.004.086-.009.013-.002.024-.008.037-.011l.043-.013c.017-.008.032-.017.048-.026l.024-.013a.44.44 0 0 0 .053-.043l.01-.007a.434.434 0 0 0 .134-.292h.002v-8.06a3.87 3.87 0 0 1 3.868-3.871 3.87 3.87 0 0 1 3.868 3.87l.001 6.738v-.002l.002.018v1.307h.002c.013.23.203.414.435.414h1.923a.45.45 0 0 0 .086-.009c.011-.002.022-.007.033-.01.016-.004.032-.008.047-.014.016-.007.03-.016.045-.024l.027-.015a.49.49 0 0 0 .05-.04l.013-.01a.452.452 0 0 0 .049-.057l.003-.004a.434.434 0 0 0 .082-.23h.003v-.891ZM73.188 16.703c.067.765.68 1.739 1.74 1.739h.62c.24 0 .437-.197.437-.438V4.359h-.002a.438.438 0 0 0-.435-.414h-1.923a.438.438 0 0 0-.435.414h-.002v1.109c-1.178-1.452-3.035-2.055-4.898-2.055a7.667 7.667 0 0 0-7.664 7.67c0 4.237 3.431 7.672 7.664 7.672 1.863 0 3.892-.723 4.898-2.054v.002Zm-4.89-.633c-2.692 0-4.875-2.232-4.875-4.986 0-2.754 2.183-4.986 4.875-4.986s4.874 2.232 4.874 4.986c0 2.754-2.182 4.986-4.874 4.986ZM49.257 14.748c1.283.89 2.684 1.322 4.03 1.322 1.283 0 2.609-.665 2.609-1.823 0-1.546-2.89-1.787-4.705-2.405-1.815-.617-3.379-1.893-3.379-3.96 0-3.163 2.816-4.47 5.444-4.47 1.665 0 3.383.55 4.497 1.338.384.29.15.625.15.625l-1.063 1.52c-.12.17-.328.318-.628.133s-1.352-.93-2.956-.93c-1.603 0-2.57.74-2.57 1.66 0 1.1 1.256 1.447 2.727 1.823 2.562.691 5.357 1.522 5.357 4.666 0 2.786-2.604 4.508-5.483 4.508-2.181 0-4.038-.622-5.596-1.766-.324-.325-.098-.627-.098-.627l1.058-1.512c.216-.282.487-.184.606-.102ZM41.866 16.703c.068.765.68 1.739 1.74 1.739h.62a.44.44 0 0 0 .438-.438V4.359h-.003a.437.437 0 0 0-.435-.414h-1.922a.438.438 0 0 0-.435.414h-.003v1.109c-1.178-1.452-3.035-2.055-4.897-2.055a7.668 7.668 0 0 0-7.665 7.67c0 4.237 3.432 7.672 7.665 7.672 1.862 0 3.892-.723 4.897-2.054v.002Zm-4.89-.633c-2.692 0-4.874-2.232-4.874-4.986 0-2.754 2.182-4.986 4.875-4.986 2.692 0 4.874 2.232 4.874 4.986 0 2.754-2.182 4.986-4.874 4.986Z" fill="#0D0E10" />
                        <path d="M18.559 11.605a5.158 5.158 0 1 0 0 10.317 5.158 5.158 0 0 0 0-10.317Zm-13.401.001a5.158 5.158 0 1 0 0 10.315 5.158 5.158 0 0 0 0-10.315Zm11.858-6.448a5.158 5.158 0 1 1-10.316 0 5.158 5.158 0 0 1 10.316 0Z" fill="#F06A6A" />
                    </svg>
                </header>
                <section className="flex flex-col items-center">
                    <h2 className="text-[#151B26] font-roboto font-normal text-[33px] mb-[32px]">Регистрация</h2>
                    <div className="w-[425px] flex flex-col">
                        <form onSubmit={handle__Submit} className="w-[100%] flex flex-col">
                            <div className="flex flex-col gap-[5px] mb-[10px]">
                                <p className="font-[500] font-roboto text-[13px] leading-[18px] cursor-pointer text-[#6d6e6f]">Name</p>
                                <label htmlFor="name" className={`flex items-center gap-[10px] border-[1px] border-solid border-[#474d4f] rounded-[3px] px-[10px] cursor-pointer ${bad.isFalse ? "border-b-[3px] border-b-[red]" : ""}`}>
                                    <svg viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" fill="#474d4f" />
                                    </svg>
                                    <input className="w-[100%] py-[10px] outline-none font-roboto text-[#222b37] placeholder:font-roboto placeholder:text-[#37414e]" type="text" id="name" name="username" placeholder="Enter yor name...." required onChange={handle__Change} />
                                </label>
                            </div>
                            <div className="flex flex-col gap-[5px] mb-[10px]">
                                <p className="font-[500] font-roboto text-[13px] leading-[18px] cursor-pointer text-[#6d6e6f]">Password</p>
                                <label htmlFor="password" className={`flex items-center gap-[10px] border-[1px] border-solid border-[#474d4f] rounded-[3px] px-[10px] cursor-pointer ${bad.isFalse ? "border-b-[3px] border-b-[red]" : ""}`}>
                                    <svg viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z" fill="#474d4f" />
                                    </svg>
                                    <input className="w-[100%] py-[10px] outline-none font-roboto text-[#222b37] placeholder:font-roboto placeholder:text-[#37414e]" type={hid__password ? "text" : "password"} id="password" name="password" placeholder="Enter yor password...." required onChange={handle__Change} />
                                    <button type="button" onClick={() => setHid__password(prev => !prev)}>
                                        {
                                            hid__password
                                                ?
                                                <svg viewBox="0 0 64 64" width="20" height="20">
                                                    <path d="M568.687,32C571.83,39.211 581.07,58 592,58C596.706,58 601.092,54.436 604.807,49.893C605.768,48.717 606.989,49.454 607.532,51.537C608.074,53.62 607.734,56.265 606.773,57.44C602.492,62.675 597.422,66.667 592,66.667C576.826,66.667 564.463,34.772 564.463,34.772C563.846,33.166 563.846,30.834 564.463,29.228C564.463,29.228 576.826,-2.667 592,-2.667C607.174,-2.667 619.537,29.228 619.537,29.228C620.154,30.834 620.154,33.166 619.537,34.772C619.537,34.772 617.999,38.792 615.336,43.971C614.996,44.632 614.637,45.312 614.261,46.006C613.421,47.556 612.158,47.336 611.442,45.515C610.727,43.694 610.828,40.957 611.669,39.407C612.017,38.764 612.349,38.134 612.664,37.521C613.771,35.368 614.664,33.438 615.306,31.983C612.156,24.761 602.922,6 592,6C581.07,6 571.83,24.789 568.687,32Z" transform="matrix(1 0 0 .46154 -560 17.23)" fill="#474d4f" />
                                                    <path d="M592,22C586.481,22 582,26.481 582,32C582,37.519 586.481,42 592,42C597.519,42 602,37.519 602,32C602,26.481 597.519,22 592,22ZM592,26C595.311,26 598,28.689 598,32C598,35.311 595.311,38 592,38C588.689,38 586,35.311 586,32C586,28.689 588.689,26 592,26Z" transform="translate(-560)" fill="#474d4f" />
                                                </svg>
                                                :
                                                <svg viewBox="0 0 64 64" width="20" height="20">
                                                    <rect width="64" height="64" fill="none" />
                                                    <path d="M568.687,32C571.83,39.211 581.07,58 592,58C596.706,58 601.092,54.436 604.807,49.893C605.768,48.717 606.989,49.454 607.532,51.537C608.074,53.62 607.734,56.265 606.773,57.44C602.492,62.675 597.422,66.667 592,66.667C576.826,66.667 564.463,34.772 564.463,34.772C563.846,33.166 563.846,30.834 564.463,29.228C564.463,29.228 576.826,-2.667 592,-2.667C607.174,-2.667 619.537,29.228 619.537,29.228C620.154,30.834 620.154,33.166 619.537,34.772C619.537,34.772 617.999,38.792 615.336,43.971C614.996,44.632 614.637,45.312 614.261,46.006C613.421,47.556 612.158,47.336 611.442,45.515C610.727,43.694 610.828,40.957 611.669,39.407C612.017,38.764 612.349,38.134 612.664,37.521C613.771,35.368 614.664,33.438 615.306,31.983C612.156,24.761 602.922,6 592,6C581.07,6 571.83,24.789 568.687,32Z" transform="matrix(1 0 0 .46154 -560 17.23)" fill="#474d4f" />
                                                    <path d="M592,22C586.481,22 582,26.481 582,32C582,37.519 586.481,42 592,42C597.519,42 602,37.519 602,32C602,26.481 597.519,22 592,22ZM592,26C595.311,26 598,28.689 598,32C598,35.311 595.311,38 592,38C588.689,38 586,35.311 586,32C586,28.689 588.689,26 592,26Z" transform="translate(-560)" fill="#474d4f" />
                                                    <path d="M648.824,15.82L692.824,51.82C693.716,52.55 694.968,52.328 695.617,51.323C696.267,50.319 696.069,48.911 695.176,48.18L651.176,12.18C650.284,11.45 649.032,11.672 648.383,12.677C647.733,13.681 647.931,15.089 648.824,15.82Z" transform="matrix(1 0 0 .88889 -640 3.556)" fill="#474d4f" />
                                                </svg>
                                        }
                                    </button>
                                </label>
                                {
                                    bad.isFalse
                                    &&
                                    <p className="text-[red] font-roboto text-[14px] font-[400]">{bad.date}</p>
                                }
                            </div>
                            <button className="font-roboto text-[20px] select-none font-[500] text-[#FFF] rounded-[3px] bg-[#0D0E10] p-[7px] cursor-pointer mt-[10px] active:bg-[#0d0e10d5]">Зарегистрироваться</button>
                        </form>
                        <p className="text-center text-[#0d0e10e9] font-roboto text-[14px] leading-[20px] font-normal mb-[60px] mt-[16px]">Регистрируясь, я принимаю условия Политики конфиденциальности и Пользовательского соглашения Asana.</p>
                    </div>
                    <div className="flex items-center justify-center gap-[35px]">
                        <div className="flex items-center gap-[14px]">
                            <svg viewBox="0 0 40 40" width="30" height="30" >
                                <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z" fill="#a2a0a2" />
                            </svg>
                            <span className="font-roboto text-[12px] font-[400] leading-[20px] max-w-[200px] text-[#151B26]">Get access to unlimited tasks, projects, and storage.</span>
                        </div>
                        <div className="flex items-center gap-[14px]">
                            <svg viewBox="0 0 40 40" width="30" height="30" >
                                <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z" fill="#a2a0a2" />
                            </svg>
                            <span className="font-roboto text-[12px] font-[400] leading-[20px] max-w-[200px] text-[#151B26]">See different views like list, board, and calendar.</span>
                        </div>
                        <div className="flex items-center gap-[14px]">
                            <svg viewBox="0 0 40 40" width="30" height="30" >
                                <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z" fill="#a2a0a2" />
                            </svg>
                            <span className="font-roboto text-[12px] font-[400] leading-[20px] max-w-[200px] text-[#151B26]">Invite your teammates to explore Asana.</span>
                        </div>
                    </div>
                </section>
                <footer className="flex items-center justify-center gap-[40px]">
                    <div className="flex items-center justify-center gap-[8px] cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0d0e1080">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM14.3 5H11.25C11 3.45 10.55 2.15 9.95 1.3C11.9 1.85 13.45 3.2 14.3 5ZM10.5 8C10.5 8.7 10.45 9.35 10.4 10H5.6C5.55 9.35 5.5 8.7 5.5 8C5.5 7.3 5.55 6.65 5.6 6H10.4C10.45 6.65 10.5 7.3 10.5 8ZM8 15C7.15 15 6.2 13.45 5.75 11H10.25C9.8 13.45 8.85 15 8 15ZM5.75 5C6.2 2.55 7.15 1 8 1C8.85 1 9.8 2.55 10.25 5H5.75ZM6.05 1.3C5.45 2.15 5 3.45 4.75 5H1.7C2.55 3.2 4.1 1.85 6.05 1.3ZM1.3 6H4.6C4.55 6.65 4.5 7.3 4.5 8C4.5 8.7 4.55 9.35 4.6 10H1.3C1.1 9.35 1 8.7 1 8C1 7.3 1.1 6.65 1.3 6ZM1.7 11H4.75C5 12.55 5.45 13.85 6.05 14.7C4.1 14.15 2.55 12.8 1.7 11ZM9.95 14.7C10.55 13.8 11 12.55 11.25 11H14.3C13.45 12.8 11.9 14.15 9.95 14.7ZM14.7 10H11.4C11.45 9.35 11.5 8.7 11.5 8C11.5 7.3 11.45 6.65 11.4 6H14.7C14.9 6.65 15 7.3 15 8C15 8.7 14.9 9.35 14.7 10Z" />
                        </svg>
                        <span className="font-roboto text-[12px] font-400 leading-[20px] text-[#0d0e10e9]">Русский</span>
                    </div>
                    <div className="flex items-center justify-center gap-[8px] cursor-pointer">
                        <span className="font-roboto text-[12px] font-400 leading-[20px] text-[#0d0e10e9]">Условия использования и конфиденциальность</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

