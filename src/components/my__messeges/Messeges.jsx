import { Link } from "react-router-dom";
import style from "./messeges.module.css";
import MessegePane from "../messege_pane/MessegePane";

function Messeges() {

    return (
        <div className={style.messege_wrap}>
            <div className={style.messege_header}>
                <div className={style.description}>
                    <h3>Отправленные мной сообщения</h3>
                    <img src="/assets/svg/arrowWhite.svg" alt="" />
                    <svg className={style.star_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path className={style.star} d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z" fill="#a2a0a2">
                        </path>
                    </svg>
                </div>
                <p className={style.messege_quantity}>0 сообщений</p>
            </div>

            <div className={style.messege_structure}>
                <button className={style.filter_btn}>
                    <img src="/assets/svg/filterMiniIcon.svg" alt="" />
                    <p >Фильтр: 1</p>
                </button>
                <div className={style.sort_wrap}>
                    <img src="/assets/svg/sortMiniIcon.svg" alt="" />
                    <p>Сортировка: Последнее изменение</p>
                </div>
                <Link className={style.messege_link} to="ddasda">Отправить отзыв</Link>
            </div>

            <MessegePane/>
        </div>
    )
}
export default Messeges;