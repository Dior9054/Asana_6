
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import style from "./elemLay.module.css"

function ElemLay() {
    const [state, setState] = useState("")
    let location = useLocation().pathname

    useEffect(() => {

        let path = location.split("/")
        path = path.slice(0, path.length - 1)
        setState(path.join("/") || "/")

    }, [useLocation().pathname])

    return (
        <div className={style.modal}>
            <div className={style.modal__header}>
                <NavLink to={state}>
                    <svg viewBox="0 0 32 32" width="16" height="16">
                        <path d="M28,14.5H7.6L15,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0l-10,10c-0.6,0.6-0.6,1.5,0,2.1l10,10c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-7.4-7.4H28c0.8,0,1.5-0.7,1.5-1.5S28.8,14.5,28,14.5z" />
                    </svg>
                </NavLink>
                <NavLink to="/">
                    <svg viewBox="0 0 32 32" width="16" height="16">
                        <path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z" />
                    </svg>
                </NavLink>
            </div>
            <div className={style.modal__body}>
                <Outlet />
            </div>
        </div>
    );
}

export default ElemLay;

