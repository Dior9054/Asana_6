
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import style from "./create__blank.module.css"

function Create__Blank() {
    const location = useLocation()
    const [state, setState] = useState()

    return (
        <div className={style.project}>
            <div className={style.project__left}>
                <h1>Новый проект</h1>
                <div className={style.project__left__choose}>
                    <div className={style.project__left__choose__item}>
                        <label htmlFor="">Название проекта</label>
                        <input className={!state ? style.active : ""} type="text" onChange={(e) => setState(e.target.value)} />
                        {
                            !state && <p>Project name is required. *</p>
                        }
                    </div>
                    <div className={style.project__left__choose__item}>
                        <label htmlFor="">Конфиденциаль...</label>
                        <select>
                            <option value="My workspace">My workspace</option>
                            <option value="Только для участников">Только для участников</option>
                        </select>
                    </div>
                </div>
                <div className={style.project__left__change}>
                    <NavLink className={location.pathname == "/new/blank" ? style.project__left__change__item__active : style.project__left__change__item} to="/new/blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 133 133">
                            <g clipPath="url(#clip0_3_1745)">
                                <rect x="-3.05176e-05" y="7.40921" width="133" height="52.5" rx="26.25" fill="#EEEBEA" />
                                <circle cx="26.0673" cy="33.6591" r="14.5925" stroke="black" strokeWidth="4" />
                                <path d="M19.209 34.3422L23.3557 38.5048L33.0311 28.792" stroke="#0D0E10" strokeWidth="4" />
                                <path d="M51.5107 33.659L120.712 33.6591" stroke="#0D0E10" strokeWidth="4" strokeMiterlimit="10" strokeLinejoin="bevel" />
                                <rect x="-3.05176e-05" y="71.5893" width="133" height="52.5" rx="26.25" fill="#8D84E8" />
                                <ellipse cx="26.0669" cy="97.8386" rx="16.5925" ry="16.5925" fill="#EEEBEA" />
                                <path d="M19.2086 98.5217L23.3553 102.684L33.0307 92.9715" stroke="#0D0E10" strokeWidth="4" />
                                <path d="M50.302 98.7673L119.504 98.7673" stroke="#0D0E10" strokeWidth="4" strokeMiterlimit="10" strokeLinejoin="bevel" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_1745">
                                    <rect width="133" height="133" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Список</span>
                    </NavLink>
                    <NavLink className={location.pathname == "/new/blank/1" ? style.project__left__change__item__active : style.project__left__change__item} to="/new/blank/1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none">
                            <rect x="0.48" y="0.48" width="23.04" height="31.04" rx="2.18667" fill="#371717" fillOpacity="0.05" />
                            <rect width="24" height="16" fill="#5DA283" />
                            <circle cx="5.99935" cy="26.0013" r="3.33333" fill="#58A182" />
                            <path d="M4.62158 26.1384L5.45462 26.9747L7.39836 25.0234" stroke="white" strokeWidth="0.857146" />
                            <path d="M2.66797 18.668L21.3346 18.668" stroke="#0D0E10" strokeWidth="0.962406" strokeMiterlimit="10" strokeLinejoin="bevel" />
                            <rect x="0.48" y="0.48" width="23.04" height="31.04" rx="2.18667" stroke="black" strokeWidth="0.96" />
                        </svg>
                        <span>Доска</span>
                    </NavLink>
                    <NavLink className={location.pathname == "/new/blank/2" ? style.project__left__change__item__active : style.project__left__change__item} to="/new/blank/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M0 6.89081C0 5.06019 1.48865 3.57617 3.325 3.57617H19.075C20.9113 3.57617 22.4 5.06019 22.4 6.89081C22.4 8.72144 20.9113 10.2055 19.075 10.2055H3.325C1.48865 10.2055 0 8.72144 0 6.89081Z" fill="#EEEBEA" />
                            <path d="M5.59961 14.9162C5.59961 13.0856 7.08826 11.6016 8.92461 11.6016H24.6746C26.511 11.6016 27.9996 13.0856 27.9996 14.9162C27.9996 16.7468 26.511 18.2308 24.6746 18.2308H8.92461C7.08826 18.2308 5.59961 16.7468 5.59961 14.9162Z" fill="#F06A6A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.075 20.4848H3.325C1.96447 20.4848 0.861539 21.5843 0.861539 22.9406C0.861539 24.2969 1.96447 25.3964 3.325 25.3964H19.075C20.4355 25.3964 21.5385 24.2969 21.5385 22.9406C21.5385 21.5843 20.4355 20.4848 19.075 20.4848ZM3.325 19.626C1.48865 19.626 0 21.11 0 22.9406C0 24.7712 1.48865 26.2553 3.325 26.2553H19.075C20.9113 26.2553 22.4 24.7712 22.4 22.9406C22.4 21.11 20.9113 19.626 19.075 19.626H3.325Z" fill="#474748" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6191 27.9997L14.6191 0.0869141L15.4807 0.086914L15.4807 27.9997L14.6191 27.9997Z" fill="#0D0E10" />
                            <path d="M15.0505 1.83203L13.2318 0.000255625L16.8691 0.000255942L15.0505 1.83203Z" fill="#0D0E10" />
                        </svg>
                        <span>Хронология</span>
                    </NavLink>
                    <NavLink className={location.pathname == "/new/blank/3" ? style.project__left__change__item__active : style.project__left__change__item} to="/new/blank/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M0 3.37891H27.8233V10.4794H0V3.37891Z" fill="#4573D2" />
                            <path d="M0 10.1377H27.8233V28.0001H0V10.1377Z" fill="#EEEBEA" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.7685 0.740754C16.7572 0.740754 15.9378 1.55504 15.9378 2.55999H15.1924C15.1924 1.14594 16.3455 0 17.7685 0C19.1915 0 20.3446 1.14594 20.3446 2.55999C20.3446 3.09036 20.1828 3.58346 19.9031 3.99338C19.4419 4.67549 18.6566 5.12415 17.7643 5.12415C17.329 5.12415 16.9162 5.01713 16.5562 4.82604L16.5562 4.82601C16.2742 4.67624 16.0177 4.47624 15.8085 4.22877L16.3793 3.75232C16.5226 3.9219 16.7026 4.06388 16.9075 4.17268C17.1603 4.30691 17.4526 4.3834 17.7643 4.3834C18.3994 4.3834 18.9569 4.06499 19.2848 3.57972L19.2858 3.57821L19.2858 3.57821C19.4842 3.28761 19.5992 2.9385 19.5992 2.55999C19.5992 1.55504 18.7798 0.740754 17.7685 0.740754Z" fill="#0D0E10" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.1289 0.740754C10.1176 0.740754 9.29816 1.55504 9.29816 2.55999H8.55273C8.55273 1.14594 9.70589 0 11.1289 0C12.5518 0 13.705 1.14594 13.705 2.55999C13.705 3.09036 13.5432 3.58346 13.2635 3.99338C12.8022 4.67549 12.0169 5.12415 11.1247 5.12415C10.6893 5.12415 10.2765 5.01713 9.91657 4.82604L9.91651 4.82601C9.63452 4.67624 9.37805 4.47623 9.16887 4.22877L9.73964 3.75232C9.88299 3.92191 10.063 4.06388 10.2678 4.17268C10.5206 4.30691 10.8129 4.3834 11.1247 4.3834C11.7597 4.3834 12.3172 4.06499 12.6451 3.57972L12.6461 3.57821L12.6461 3.57821C12.8446 3.28761 12.9596 2.9385 12.9596 2.55999C12.9596 1.55504 12.1401 0.740754 11.1289 0.740754Z" fill="#0D0E10" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.49018 0.740754C3.4789 0.740754 2.65948 1.55504 2.65948 2.55999H1.91406C1.91406 1.14594 3.06722 0 4.49018 0C5.91315 0 7.0663 1.14594 7.0663 2.55999C7.0663 3.09036 6.90449 3.58346 6.62479 3.99338C6.16357 4.67548 5.37827 5.12415 4.48599 5.12415C4.05065 5.12415 3.63784 5.01713 3.27791 4.82604L3.27785 4.82601C2.99586 4.67624 2.73939 4.47623 2.53021 4.22877L3.10098 3.75232C3.24433 3.92191 3.42432 4.06388 3.62916 4.17268C3.88198 4.30691 4.17427 4.3834 4.48599 4.3834C5.12108 4.3834 5.67855 4.06499 6.00643 3.57972L6.00745 3.57821L6.00745 3.57821C6.20589 3.28761 6.32088 2.9385 6.32088 2.55999C6.32088 1.55504 5.50146 0.740754 4.49018 0.740754Z" fill="#0D0E10" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.0211 23.5453C16.5088 23.5453 18.5255 21.5412 18.5255 19.0691C18.5255 16.597 16.5088 14.5929 14.0211 14.5929C11.5334 14.5929 9.51674 16.597 9.51674 19.0691C9.51674 21.5412 11.5334 23.5453 14.0211 23.5453ZM14.0211 24.4712C17.0234 24.4712 19.4573 22.0526 19.4573 19.0691C19.4573 16.0856 17.0234 13.667 14.0211 13.667C11.0188 13.667 8.58496 16.0856 8.58496 19.0691C8.58496 22.0526 11.0188 24.4712 14.0211 24.4712Z" fill="#0D0E10" />
                        </svg>
                        <span>Календарь</span>
                    </NavLink>
                </div>

                {
                    state
                        ?
                        <button>Создать проект</button>
                        :
                        <button disabled>Создать проект</button>
                }
            </div>
            <div className={style.project__res}>
                <Outlet />
            </div>
        </div>
    );
}

export default Create__Blank;

