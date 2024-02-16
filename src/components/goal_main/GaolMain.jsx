import style from './goalMain.module.css';

function GoalMain() {

    return (
        <div className={style.goal_main}>
            <h2 className={style.goal_main_description}>Постановка и достижение стратегических целей</h2>
            <p className={style.goal_main_p}>Add top-level goals to help teams prioritize and connect work to your organization’s objectives.</p>
            <button className={style.btn}>Добавить цель</button>

            <video className={style.goal_video} src="/assets/video/EMIM.mp4" autoPlay muted />
        </div>
    )
}

export default GoalMain;