
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CallItem from '../callModal/callItem/CallItem';
import CallModal from '../callModal/CallModal';
import Create_Project from '../createProject/Create_Project';
import MauseEnterBar from '../mouseEnterBar/MauseEnterBar';
import style from './home.module.css';

function Home() {
    const [offten, setOfften] = useState({ isOpen: false, date: "" })
    const [latest, setLatest] = useState({ isOpen: false, date: "" })
    const [mouseModal, setMouseModal] = useState({ isOpen: false, date: "" })
    const [open, setOpen] = useState({ isOpen: false, date: "" })
    const [doteFirst, setDoteFirst] = useState({ isOpen: false, date: "" })
    const [doteSecans, setDoteSecand] = useState({ isOpen: false, date: "" })
    const [doteThird, setDoteThird] = useState({ isOpen: false, date: "" })

    const handle__Enter = (e) => {
        setTimeout(() => {
            setMouseModal(prev => {
                return { ...prev, isOpen: true, date: e.target.closest("#openMiniModalHelper") }
            })
        }, 200)
    }

    const handle__Leave = (e) => {
        setTimeout(() => {
            setMouseModal(prev => {
                return { ...prev, isOpen: false }
            })
        }, 200)
    }

    useEffect(() => {
        const handle__Target = (e) => {
            if (!e.target.closest(".modale") && !e.target.closest("#modal")) {
                setOpen(prev => {
                    return { ...prev, isOpen: false }
                })
            }
            if (!e.target.closest("#modales") && !e.target.closest("#modal")) {
                setOfften(prev => {
                    return { ...prev, isOpen: false }
                })
            }
            if (!e.target.closest("#modale") && !e.target.closest("#modal")) {
                setLatest(prev => {
                    return { ...prev, isOpen: false }
                })
            }
            if (!e.target.closest("#openMiniModalHelper") && !e.target.closest("#modal")) {
                setDoteFirst(prev => {
                    return { ...prev, isOpen: false }
                })

                setDoteSecand(prev => {
                    return { ...prev, isOpen: false }
                })

                setDoteThird(prev => {
                    return { ...prev, isOpen: false }
                })
            }
            setMouseModal(prev => {
                return { ...prev, isOpen: false }
            })
        }

        document.addEventListener("click", handle__Target)

        return () => document.removeEventListener("click", handle__Target)
    }, [])

    return (
        <div className={style.home}>
            <div className={style.home__title}>
                <h1 className={style.title__name}>Главная</h1>
                <div className={style.home__title__welcom}>
                    <h5>Среда, 7 Февраль</h5>
                    <h1>Добрый день, dior</h1>
                </div>
                <button>
                    <img src="/assets/svg/costomize.svg" />
                    Настроить
                </button>
            </div>
            <div className={style.home__info}>
                <div className={style.home__info__block}>
                    {
                        open.isOpen && <CallModal
                            event={open.date}
                            width="140px"
                            pos="bottom">
                            <CallItem imgSrc="/assets/svg/correct.svg" text="Моя неделя" />
                            <CallItem imgSrc="/assets/svg/correct.svg" text="Мой месяц" />
                        </CallModal>
                    }
                    <button className={style.home__week + " modale " + style.week} onClick={(e) => {
                        setOpen(prev => {
                            return { ...prev, isOpen: !prev.isOpen, date: e.target.closest(".modale") }
                        })
                    }}>
                        <p>Моя неделя</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill='#A2A0A2' />
                        </svg>
                    </button>
                    <span></span>
                    {
                        mouseModal.isOpen && <MauseEnterBar
                            id="openMiniModalHelper"
                            pos="top"
                            event={mouseModal.date}>
                            <div className={style.mouse__modal}>{mouseModal.date.getAttribute("body")}</div>
                        </MauseEnterBar>
                    }
                    <div
                        className={style.home__week}
                        onMouseEnter={handle__Enter}
                        onMouseLeave={handle__Leave}
                        body="На этой неделе вы не выполнили ни одно задание"
                        id="openMiniModalHelper">
                        <img src="/assets/svg/correct.svg" />
                        <p><span>0</span> Задач выполнено</p>
                    </div>
                    <div
                        className={style.home__week}
                        onMouseEnter={handle__Enter}
                        onMouseLeave={handle__Leave}
                        body="На этой неделе вы не скем не взоимодействовали"
                        id="openMiniModalHelper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z" fill='#A2A0A2' />
                        </svg>
                        <p><span>1</span> Сотрудник</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={style.tasks}>
                    <div className={style.tasks__block}>
                        <div className={style.tasks__top}>
                            <img
                                src="/assets/svg/avatar.svg"
                                onMouseEnter={handle__Enter}
                                onMouseLeave={handle__Leave}
                                body="Добавить фотогрвйию для профиля"
                                id="openMiniModalHelper" />
                            <div className={style.tasks__top__title}>
                                <div className={style.tasks__top__name}>
                                    <h2>My tasks</h2>
                                    <svg width="12" height="12" viewBox="0 0 24 24">
                                        <path d="M20,10h-2V6c0-3.3-2.7-6-6-6S6,2.7,6,6v4H4c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-8  C22,10.9,21.1,10,20,10z M9,6c0-1.7,1.3-3,3-3s3,1.3,3,3v4H9V6z" fill='#A2A0A2' />
                                    </svg>
                                </div>
                                <div className={style.tasks__top__sections}>
                                    <h3 className={style.active}>Предстоит</h3>
                                    <h3>Просрочено (2)</h3>
                                    <h3>Выполнено</h3>
                                </div>
                            </div>
                            {
                                doteFirst.isOpen && <CallModal
                                    event={doteFirst.date}
                                    width="140px"
                                    pos="bottom">
                                    <CallItem imgSrc="/assets/svg/project.svg" text="Моя неделя" />
                                    <CallItem imgSrc="/assets/svg/portfolio.svg" text="Мой месяц" />
                                </CallModal>
                            }
                            <button
                                className={style.tasks__top__btn}
                                onMouseEnter={handle__Enter}
                                onMouseLeave={handle__Leave}
                                onClick={(e) => {
                                    setDoteFirst(prev => {
                                        return { ...prev, isOpen: !prev.isOpen, date: e.target.closest("#openMiniModalHelper") }
                                    })
                                }}
                                body="Действия"
                                id="openMiniModalHelper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                    <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" fill='#a2a0a2' />
                                </svg>
                            </button>
                        </div>
                        <div className={style.tasks__bottom}>
                            <button className={style.tasks__create}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#a2a0a2" />
                                </svg>
                                Создать задачу
                            </button>
                        </div>
                    </div>
                    <div className={style.tasks__block}>
                        <div className={style.tasks__bottom}>
                            <div>
                                <div className={style.tasks__top__title}>
                                    <div className={style.tasks__top__name + " " + style.tasks__top__notHover}>
                                        <h2>Проекты</h2>
                                        {
                                            offten.isOpen && <CallModal
                                                event={offten.date}
                                                width="140px"
                                                pos="bottom">
                                                <CallItem imgSrc="/assets/svg/project.svg" text="Моя неделя" />
                                                <CallItem imgSrc="/assets/svg/portfolio.svg" text="Мой месяц" />
                                            </CallModal>
                                        }
                                        <button
                                            className={style.tasks__create}
                                            id="modales"
                                            onClick={(e) => {
                                                setOfften(prev => {
                                                    return { ...prev, isOpen: !prev.isOpen, date: e.target.closest("#modales") }
                                                })
                                            }}>
                                            Недавние
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="#A2A0A2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {
                                    doteThird.isOpen && <CallModal
                                        event={doteThird.date}
                                        width="140px"
                                        pos="bottom|left">
                                        <CallItem imgSrc="/assets/svg/project.svg" text="Моя неделя" />
                                        <CallItem imgSrc="/assets/svg/portfolio.svg" text="Мой месяц" />
                                    </CallModal>
                                }
                                <button
                                    className={style.tasks__top__btn}
                                    onMouseEnter={handle__Enter}
                                    onMouseLeave={handle__Leave}
                                    onClick={(e) => {
                                        setDoteThird(prev => {
                                            return { ...prev, isOpen: !prev.isOpen, date: e.target.closest("#openMiniModalHelper") }
                                        })
                                    }}
                                    body="Действия"
                                    id="openMiniModalHelper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                        <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" fill='#a2a0a2' />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <NavLink className={style.button} to="/new">
                                    <div className={style.button__border}>
                                        <svg viewBox="0 0 32 32" width="16" height="16">
                                            <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z" fill="#a2a0a2" />
                                        </svg>
                                    </div>
                                    <p>Создать проект</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div >
                <div className={style.peaple}>
                    <div className={style.tasks__block}>
                        <div className={style.tasks__bottom}>
                            <div>
                                <div className={style.tasks__top__title}>
                                    <div className={style.tasks__top__name + " " + style.tasks__top__notHover}>
                                        <h2>Люди</h2>
                                        {
                                            latest.isOpen && <CallModal
                                                event={latest.date}
                                                width="140px"
                                                pos="bottom">
                                                <CallItem imgSrc="/assets/svg/project.svg" text="Моя неделя" />
                                                <CallItem imgSrc="/assets/svg/portfolio.svg" text="Мой месяц" />
                                            </CallModal>
                                        }
                                        <button
                                            className={style.tasks__create}
                                            id="modale"
                                            onClick={(e) => {
                                                setLatest(prev => {
                                                    return { ...prev, isOpen: !prev.isOpen, date: e.target.closest("#modale") }
                                                })
                                            }}>
                                            Частые участники
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="#A2A0A2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {
                                    doteSecans.isOpen && <CallModal
                                        event={doteSecans.date}
                                        width="140px"
                                        pos="bottom|left">
                                        <CallItem imgSrc="/assets/svg/project.svg" text="Моя неделя" />
                                        <CallItem imgSrc="/assets/svg/portfolio.svg" text="Мой месяц" />
                                    </CallModal>
                                }
                                <button
                                    className={style.tasks__top__btn}
                                    onMouseEnter={handle__Enter}
                                    onMouseLeave={handle__Leave}
                                    onClick={(e) => {
                                        setDoteSecand(prev => {
                                            return { ...prev, isOpen: !prev.isOpen, date: e.target.closest("#openMiniModalHelper") }
                                        })
                                    }}
                                    body="Действия"
                                    id="openMiniModalHelper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                        <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" fill='#a2a0a2' />
                                    </svg>
                                </button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home;

