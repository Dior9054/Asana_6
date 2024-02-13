import style from './mytask.module.css';
import TaskBoard from '../task_board/TaskBoard';
import TaskList from '../task_list/TaskList';

function MyTask() {

    return (
        <div className={style.task_wrap}>
            <div className={style.task_header}>
                <img className={style.profile_img} src="/assets/img/user.png" alt="" />
                <div className={style.title__links}>
                    <div className={style.title}>
                        <h2>My tasks</h2>
                        <img src="/assets/svg/arrowWhite.svg" alt="" />
                    </div>
                    <div className={style.links}>
                        <div className={style.links_items}>Список</div>
                        <div className={style.links_items}>Доска</div>
                        <div className={style.links_items}>lorem</div>
                        <div className={style.links_items}>lorem</div>
                    </div>
                </div>
                <div className={style.share_setting}>
                    <button className={style.share_items}>
                        <img src="/assets/svg/lock.svg" alt="" />
                        <p>Поделиться</p>
                    </button>
                    <button className={style.share_items}>
                        <img src="/assets/svg/customize_12.svg" alt="" />
                        <p>Настроить</p>
                    </button>
                </div>
            </div>
            {/* <TaskBoard/> */}
            <TaskList/>
        </div>
    )
}
export default MyTask