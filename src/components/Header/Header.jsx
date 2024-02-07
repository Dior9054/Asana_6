
import style from './header.module.css';

import { useState } from 'react';
import { useEffect } from 'react';
import MauseEnterBar from '../mouseEnterBar/MauseEnterBar';
import CallModal from '../callModal/CallModal';
import CallItem from '../callModal/callItem/CallItem';
import { Link } from 'react-router-dom';

function Header() {
    const [modal, setModal] = useState({
        isopen: false,
        date: ""
    });
    const [create__Modal, setCreate__Modal] = useState({
        isopen: false,
        date: ""
    });
    const [hover, setHover] = useState({
        isOpen: false,
        date: ""
    })

    const handle__Enter = (e) => {
        setTimeout(() => {
            setHover(prev => {
                return { ...prev, isOpen: true, date: e }
            })
        }, 100)
    }

    const handle__Leave = () => {
        setTimeout(() => {
            setHover(prev => {
                return { ...prev, isOpen: false }
            })
        }, 100)
    }

    const handle__Click = (e) => {
        if (e.target.closest(".modal__create")) setCreate__Modal(prev => {
            return { ...prev, isopen: !prev.isopen, date: e }
        })
    }

    const handle__Profile = (e) => {
        setHover(prev => {
            return { ...prev, isOpen: false }
        })
        if (e.target.closest(".modal__profile")) setModal(prev => {
            return { ...prev, isopen: !prev.isopen, date: e }
        })
    }

    useEffect(() => {
        const handle__Target = (e) => {
            if (!e.target.closest(".modal__profile") && !e.target.closest("#modal")) setModal(prev => {
                return { ...prev, isopen: false }
            })
            if (!e.target.closest(".modal__create") && !e.target.closest("#modal")) setCreate__Modal(prev => {
                return { ...prev, isopen: false }
            })
        }

        document.addEventListener("click", handle__Target)

        return () => document.removeEventListener("click", handle__Target)
    }, [])

    return (
        <div className={style.header}>
            {
                create__Modal.isopen && <CallModal
                    event={create__Modal.date}
                    width="183px"
                    pos="right">
                    <CallItem imgSrc="/assets/svg/task.svg" text="Задача" />
                    <CallItem imgSrc="/assets/svg/project.svg" text="Проект" />
                    <CallItem imgSrc="/assets/svg/message.svg" text="Сообщение" />
                    <hr color='#424244' style={{ "margin": "4px 0" }} />
                    <CallItem imgSrc="/assets/svg/invite.svg" text="Пригласить" />
                </CallModal>
            }
            {
                modal.isopen && <CallModal
                    event={modal.date}
                    width="240px"
                    pos="bottom|left">
                    <div className={style.title}>
                        <p>26 days left in trial.</p>
                        <Link>Подробнее</Link>
                    </div>
                    <div className={style.body}>
                        <img src="/assets/img/user.png" />
                        <h1>My workspace</h1>
                        <h2>dior9054@gmail.com</h2>
                    </div>
                    <CallItem imgSrc="/assets/svg/consule.svg" text="Консоль администратора" />
                    <CallItem imgSrc="/assets/svg/plus.svg" text="Новое рабочее пространство" />
                    <CallItem imgSrc="/assets/svg/invite.svg" text="Пригласить в Asana" />
                    <hr color='#424244' style={{ "margin": "4px 0" }} />
                    <CallItem imgSrc="/assets/svg/profile.svg" text="Профиль" />
                    <CallItem imgSrc="/assets/svg/settings.svg" text="Настройки" />
                    <CallItem imgSrc="/assets/svg/plus.svg" text="Add another account" />
                    <hr color='#424244' style={{ "margin": "4px 0" }} />
                    <CallItem imgSrc="/assets/svg/exit.svg" text="Выход" />
                </CallModal>
            }
            {
                hover.isOpen
                &&
                <MauseEnterBar
                    event={hover.date}
                    pos="bottom"
                    id="openMiniModalHelper">
                    <div>dior 498</div>
                </MauseEnterBar>
            }
            <div className={style.header__left}>
                <button className={style.burger}>
                    <img src="./assets/svg/burger.svg" />
                </button>
                <button
                    onClick={handle__Click}
                    className={style.header__create + " modal__create"}>
                    <img src="/assets/img/plusForcreate.png" />
                    <p>Создать</p>
                </button>
            </div>

            <div className={style.header__search}>
                <img src="./assets/svg/icons8-search.svg" />
                <input type="input" placeholder='Поиск...' />
            </div>

            <div className={style.header__right}>
                <div className={style.header__det}>
                    <p>27 days left in trial</p>
                    <button>Добавить платежные данные</button>
                </div>

                <button
                    className={style.header__profile + " modal__profile"}
                    id="openMiniModalHelper"
                    onMouseEnter={handle__Enter}
                    onMouseLeave={handle__Leave}
                    onClick={handle__Profile}>
                    <img src="/assets/img/user.png" />
                    <img src="./assets/svg/down.svg" />
                </button>
            </div>
        </div >
    )
}
export default Header

