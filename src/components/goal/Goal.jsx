import GoalMain from '../goal_main/GaolMain';
import style from './goal.module.css';

function Goal() {

    return (
        <div className={style.goal_wrap}>
            <div className={style.goal_header}>
                <div className={style.goalIconWrap}>
                    <svg className={style.goalIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z"></path></svg>
                </div>
                <div className={style.title_nav}>
                    <div className={style.title}>
                        <h2>My workspace</h2>
                        <svg className={style.arrowImg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path></svg>
                    </div>
                    <div className={style.nav}>
                        <p>Цели группы</p>
                        <p>Мои цели</p>
                    </div>
                </div>
            </div>

            <GoalMain />
        </div>
    )
}

export default Goal;