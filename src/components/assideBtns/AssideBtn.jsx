
import { useState } from "react";
import CallModal from "../callModal/CallModal";
import MauseEnterBar from "../mouseEnterBar/MauseEnterBar";
import style from "./assideBtns.module.css"

function AssideBtn({ title, children, section, clickElem }) {
    const [modalElem, setModalElem] = useState(false)
    const [state, setState] = useState(true)
    const [mouseModal, setMouseModal] = useState({
        isOpen: false,
        date: ""
    })

    const handle__Enter = (e) => {
        setTimeout(() => {
            setMouseModal(prev => {
                return { isOpen: true, date: e }
            })
        }, 200)
    }

    const handle__Leave = () => {
        setTimeout(() => {
            setMouseModal(prev => {
                return { ...prev, isOpen: false }
            })
        }, 200)
    }

    const handle__Click = (e) => {
        if (e.target.closest("#openMiniModalHelper")) {
            setModalElem(prev => !prev)
        }
    }

    return (
        <div className={style.asside__blocks}>
            <div className={style.asside__top}>
                <button className={style.asside__button} onClick={() => setState(prev => !prev)}>
                    <svg className={state ? "" : style.rotate}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24">
                        <path d="M12 16L6 10H18L12 16Z" fill="#a2a0a2"></path>
                    </svg>
                </button>
                {
                    section
                        ?
                        <button className={`${style.asside__title} ${style.asside__btn}`} >
                            {title}
                            <img src="/assets/svg/down.svg" />
                        </button>
                        :
                        <h1 className={style.asside__title}>{title}</h1>
                }
                {
                    mouseModal.isOpen
                    &&
                    <MauseEnterBar
                        id="openMiniModalHelper"
                        pos="top"
                        event={mouseModal.date}>
                        <div>New insights</div>
                    </MauseEnterBar>
                }
                <button
                    className={style.asside__plus}
                    id="openMiniModalHelper"
                    onMouseEnter={handle__Enter}
                    onMouseLeave={handle__Leave}
                    onClick={handle__Click}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#a2a0a2"></path>
                    </svg>

                </button>
            </div>
            <div className={style.asside__bottom}>
                <CallModal>
                    {modalElem && clickElem}
                </CallModal>
                {state && children}
            </div>
        </div>
    );
}

export default AssideBtn;




