import style from './taskboard.module.css'

function TaskBoard() {

    return (
        <>
            <div className={style.table_structure}>
                <p>lorem</p>

                <div className={style.wrap_items}>
                    <div className={style.table_items}>
                        <img src="/assets/svg/filterMiniIcon.svg" alt="" />
                        <p>Filter:</p>
                    </div>
                    <div className={style.table_items}>
                        <img src="/assets/svg/sortMiniIcon.svg" alt="" />
                        <p>Сортировка:</p>
                    </div>
                    <div className={style.table_items}>
                        <img src="/assets/svg/groupBy.svg" alt="" />
                        <p>Group by</p>
                    </div>
                </div>
            </div>

            <div className={style.board_wrap}>
                <div className={style.board}>
                    <div className={style.addChapter}>
                        <img src="/assets/svg/plus.svg" alt="" />
                        <p>Добавить раздел</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_items}>
                            это пустой элемент
                        </div>
                    </div>
                </div>
                <div className={style.board}>
                    <div className={style.addChapter}>
                        <img src="/assets/svg/plus.svg" alt="" />
                        <p>Добавить раздел</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_items}>
                            это пустой элемент
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskBoard;