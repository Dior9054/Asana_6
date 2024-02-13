import style from "./inboxMain.module.css";

function InboxMain() {

    return (
        <div className={style.current_wrap}>
            <div className={style.current_body}>
                <div className={style.current_items}>
                    <img src="/assets/svg/filterMiniIcon.svg" />
                    <p>Фильтр</p>
                </div>
                <div className={style.current_items}>
                    <img src="/assets/svg/sortMiniIcon.svg" />
                    <p>Sort: Newest</p>
                </div>
                <div className={style.current_items + " " + style.current__active}>
                    <p>Управление уведомлениями</p>
                </div>
                <div className={style.current_items}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                        <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" fill="#a2a0a2" />
                    </svg>
                </div>
            </div>
            <div className={style.current_parent}>
                <div className={style.current__elem}>
                    <img src="/assets/svg/people_celebrating.svg" />
                    <h3>Ура! Вы в полностью в курсе работы своей группы.</h3>
                    <p>Заходите позже, чтобы получить новые сведения о работе в которой учавствуюте.</p>
                </div>
            </div>

        </div>
    )
}

export default InboxMain;

