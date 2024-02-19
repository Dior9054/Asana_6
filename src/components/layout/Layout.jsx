import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
import Asside from "../asside/Asside";
import { useId } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const HeaderBuregrBtn = createContext("")
export const AssideWidthBtn = createContext("")

export default function Layout() {

    const headerBurger = useId().slice(1, -1)
    const assideBurger = useId().slice(1, -1)

    useEffect(() => {
        let clickBtn = document.querySelector(`#${headerBurger}`)
        let chageBtn = document.querySelector(`#${assideBurger}`)

        clickBtn.onclick = (e) => {
            if (chageBtn.className.includes("w-[0]")) {
                chageBtn.classList.remove("w-[0]")
                chageBtn.classList.remove("translate-x-[-200px]")
            } else {
                chageBtn.classList.add("w-[0]")
                chageBtn.classList.add("translate-x-[-200px]")
            }
        }
    }, [])

    return (
        <HeaderBuregrBtn.Provider value={headerBurger}>
            <AssideWidthBtn.Provider value={assideBurger}>
                <Header />
                <main className="w-[100%] h-[100%] flex overflow-hidden bg-[#1e1f21]">
                    <Asside />
                    <Outlet />
                </main>
            </AssideWidthBtn.Provider>
        </HeaderBuregrBtn.Provider>
    );
}

