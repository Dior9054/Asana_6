
import style from "./callItem.module.css"
import { NavLink } from "react-router-dom";

function CallItem({ click, imgSrc, link, text }) {
    if (!!link) {
        return (
            <NavLink className={style.modal}>
                <img src={imgSrc} />
                <p>{text}</p>
            </NavLink>
        )
    } else {
        return (
            <button className={style.modal} onClick={click}>
                <img src={imgSrc} />
                <p>{text}</p>
            </button>
        )
    }
}

export default CallItem;

