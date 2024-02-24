
import { Outlet } from "react-router-dom"
import { useId, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Header from "./Header";
import Asside from "./Asside";

export const HeaderBuregrBtn = createContext("")
export const AssideWidthBtn = createContext("")

export const OwnDate = createContext("")

function run() {
    const [mySelf, setMySelf] = useState("")

    let myId = localStorage.getItem("my_self")

    useEffect(() => {
        fetch(`https://asanaclone.pythonanywhere.com/api/v1/users/${myId}/`, {
            method: "GET",
            headers: {
                'Authorization': `Token ${JSON.parse(localStorage.getItem("auth_token"))}`
            }
        })
            .then(res => res.json())
            .then(res => setMySelf(res))
    }, [])

    return mySelf
}

export default function Layout() {
    const headerBurger = useId().slice(1, -1)
    const assideBurger = useId().slice(1, -1)

    useEffect(() => {
        let clickBtn = document.querySelector(`#${headerBurger}`)
        let chageBtn = document.querySelector(`#${assideBurger}`)

        clickBtn.onclick = (e) => {
            if (chageBtn.className.includes("!w-[0]")) {
                chageBtn.classList.remove("!w-[0]")
                chageBtn.classList.remove("translate-x-[-200px]")
            } else {
                chageBtn.classList.add("!w-[0]")
                chageBtn.classList.add("translate-x-[-200px]")
            }
        }
    }, [])

    return (
        <HeaderBuregrBtn.Provider value={headerBurger}>
            <AssideWidthBtn.Provider value={assideBurger}>
                <OwnDate.Provider value={run()}>
                    <Header />
                    <main className="w-[100%] h-[100%] flex overflow-hidden bg-[#1e1f21]">
                        <Asside />
                        <Outlet />
                    </main>
                </OwnDate.Provider>
            </AssideWidthBtn.Provider>
        </HeaderBuregrBtn.Provider>
    );
}

