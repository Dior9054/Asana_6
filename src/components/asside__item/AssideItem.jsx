
import { NavLink } from "react-router-dom"
import style from "./asside.module.css"

function AssideItem({ link, text, img_src, inbox }) {
    return (
        <NavLink to={link} className={({ isActive }) => !isActive ? style.asside__item : style.asside__item__active}>
            <img src={img_src} />
            <p>{text}</p>
            {inbox ? <span className={style.asside__warning}></span> : ""}
        </NavLink>
    );
}

export default AssideItem;

