import style from "./archive.module.css";

function Archive() {

    return (
        <div className={style.archive_wrap}>
            <div className={style.archive_structure}>
                <button className={style.archive__item}>
                    Управление уведомлениями
                </button>
            </div>

            <div className={style.archive__pane}>
                <div className={style.archive__elem}>
                    <h3>Вы пока что не архивировали уведомления.</h3>
                    <p>Нажмите значок архива в правом верхнем углу уведомления, чтобы отправить его в архив.</p>
                    <button className={style.archive_btn}>Вернуться в рездел «Текущие»</button>
                </div>
            </div>
        </div>
    )
}
export default Archive


