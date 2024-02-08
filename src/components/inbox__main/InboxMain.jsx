import style from "./inboxMain.module.css";

function InboxMain() {

    return (
        <div className={style.current_wrap}>
            <div className={style.current_structure}>
                <div className={style.current_items}>
                    <img src="/assets/svg/filterMiniIcon.svg" alt="" />
                    <p>Фильтр</p>
                </div>
                <div className={style.current_items}>
                    <img src="/assets/svg/sortMiniIcon.svg" alt="" />
                    <p>Sort: Newest</p>
                </div>
                <div className={style.current_items}>
                    <p>Управление уведомлениями</p>
                </div>
                <div className={style.current_items}>
                    <img src="/assets/img/trepoints.png" alt="" />
                </div>
            </div>

            <div className={style.current_pane}>
                <img src="/assets/svg/people_celebrating.svg" alt="" />
                <h3>Ура! Вы в полностью в курсе работы своей группы.</h3>
                <p>Заходите позже, чтобы получить новые сведения о работе в которой учавствуюте.</p>
            </div>

        </div>
    )
}

export default InboxMain;