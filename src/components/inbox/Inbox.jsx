import { NavLink, Outlet, useLocation, } from 'react-router-dom';
import style from './inbox.module.css';


function Inbox() {
    let location = useLocation()

    return (
        <>
            <div className={style.inbox_wrap}>
                <div className={style.inbox_header}>
                    <h4 className={style.inbox__title}>Входящие</h4>
                    <div className={style.inbox_links}>
                        <NavLink className={location.pathname == "/inbox" ? style.links__active : style.links} to="/inbox">Текущие</NavLink>
                        <NavLink className={location.pathname == "/inbox/main" ? style.links__active : style.links} to="/inbox/main">Архив</NavLink>
                        <span className={style.line}></span>
                        <NavLink className={style.links} to="/git">Отправленные мной сообщения</NavLink>
                    </div>
                </div>
                <div className={style.inbox__outlet}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Inbox

