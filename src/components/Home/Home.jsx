import { useState } from "react";
import style from './home.module.css';

function Home() {


    return (
        <div className={style.wrap_home}>
            <h1 className={style.home_description}>Главное</h1>
            <div className={style.home_cards}>
                <span className={style.data}>Понедельник, 5 Февраль</span>
                <span className={style.greetings}>Добрый день,Bekzhan</span>

                <div className={style.homePage}>
                    <div className={style.page}>
                        <div className={style.pageItem}>
                            <span>Моя неделя</span>
                            <img src="/assets/svg/arrowWhite.svg" alt="" />
                        </div>

                        <span className={style.slesh}></span>

                        <div className={style.pageItem}>
                            <img src="/assets/svg/bird.svg" alt="" />
                            0
                            <span>задач выполнено</span>
                        </div>
                        <div className={style.pageItem}>
                            <img src="/assets/svg/userParticipant.svg" alt="" />
                            0
                            <span>участиков</span>
                        </div>
                    </div>
                    <button className={style.test}>
                        <img src="/assets/svg/castomize.svg" alt="" />
                        <span>Настроить</span>
                    </button>
                </div>

                <div className={style.homeColumns}>
                    <div className={style.column}>
                        <div className={style.user_mytask}>
                            <img src="/assets/img/notUser.webp" alt="" />
                            <div className={`${style.flexDirect} ${style.columnRow}`}>
                                <div className={style.displayF}>
                                    <h4 className={`${style.mytask_h} ${style.first_h}`}>My tasks</h4>
                                    <img src="/assets/svg/keyIcon.svg" alt="" />
                                </div>
                                <div className={style.navigation}>
                                    {/* component */}
                                    <span>Предстоит</span>
                                    <span>Просрочено</span>
                                    <span>Выполнено</span>
                                </div>

                            </div>

                            <div className={style.hidden_menu}>
                                <img className={style.hidden_item} src="/assets/img/trepoints.png" alt="" />
                            </div>
                        </div>

                        <div >
                            <div className={style.home_links} style={{width:'130px'}}>
                                <img className={style.plusImg} src="/assets/img/plus.png" alt="" />
                                <span>Создать задачу</span>
                            </div>
                            {/* component */}
                        </div>
                    </div>

                    <div className={style.column}>
                        <div className={`${style.displayF} ${style.padding}`}>
                            <h4 className={style.mytask_h}>Проекты</h4>
                            <div className={style.home_links}>
                                <span>Недавние</span>
                                <img src="/assets/svg/arrowWhite.svg" alt="" />
                            </div>
                            {/* component */}

                            <div className={style.hidden_menu}>
                                <img className={style.hidden_item} src="/assets/img/trepoints.png" alt="" />
                            </div>
                        </div>

                        <div className={style.column_item}>
                            <div className={style.displayF} >
                                <div className={style.create_button}>
                                    <img src="/assets/img/plus.png" alt="" />
                                </div>
                                <span>Создать проект</span>
                            </div>
                            <div className={style.displayF} >
                                <div className={style.create_button}>
                                    <img src="/assets/img/plus.png" alt="" />
                                </div>
                                <span>Создать проект</span>
                            </div>
                            <div className={style.displayF} >
                                <div className={style.create_button}>
                                    <img src="/assets/img/plus.png" alt="" />
                                </div>
                                <span>Создать проект</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.homeUsers}>
                        <div className={`${style.displayF} ${style.padding}`}>
                            <h4 className={style.mytask_h}>Люди</h4>
                            <div className={style.home_links}>
                                <span>
                                    Частые участники
                                </span>
                                <img src="/assets/svg/arrowWhite.svg" alt="" />
                            </div>

                            <div className={style.hidden_menu}>
                                <img className={style.hidden_item} src="/assets/img/trepoints.png" alt="" />
                            </div>
                        </div>
                        <div className={`${style.flex_direct} ${style.padding}`}>
                            <div className={style.users_Grid}>

                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>
                                <div className={style.users_item}>
                                    <img src="/assets/svg/girl.svg" alt="" />
                                    <span className={style.grid_span}></span>
                                </div>

                            </div>

                            <div className={style.user_invitation}>
                                <span className={style.users_span}>Invite your teammates to collaborate in Asana</span>
                                <button className={style.user_btn}>Пригласить коллег по группе</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home;