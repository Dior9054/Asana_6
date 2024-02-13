import style from './tasklist.module.css'

function TaskList() {

    return (
        <div>
            <div className={style.table_structure}>
                <div className={style.addTask}>
                    <button className={style.addTaskBtn}>
                        <svg className={style.plusImg} xmlns="http://www.w3.org/2000/svg" class="MiniIcon ThemeableRectangularButtonPresentation-leftIcon PlusMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path></svg>
                        <p className={style.addTaskP}>Добавить задачу</p>
                    </button>
                    <svg className={style.arrowImg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path></svg>
                </div>

                <div className={style.wrap_items}>
                    <div className={style.table_items}>
                        <img src="/assets/svg/filterMiniIcon.svg" alt="" />
                        <p>Filter:</p>
                    </div>
                    <div className={style.table_items}>
                        <img src="/assets/svg/groupBy.svg" alt="" />
                        <p>Group by</p>
                    </div>
                    <div className={style.table_items}>
                        <img src="/assets/svg/sortMiniIcon.svg" alt="" />
                        <p>Сортировка:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskList;