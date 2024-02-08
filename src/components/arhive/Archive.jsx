import style from "./archive.module.css";

function Archive() {

    return (
        <div className={style.archive_wrap}>
            <div className={style.archive_structure}>
                <div className={style.item}>
                    <p>Управление уведомлениями</p>
                </div>
            </div>

            <div className={style.archive_pane}>
                <h3>Вы пока что не архивировали уведомления.</h3>
                <p>Нажмите значок архива в правом верхнем углу уведомления, чтобы отправить его в архив.</p>
                <button className={style.archive_btn}>Вернуться в рездел «Текущие»</button>
            </div>

        </div>
    )
}
export default Archive