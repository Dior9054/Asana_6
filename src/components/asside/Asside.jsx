
import AssideBtn from "../assideBtns/AssideBtn";
import AssideItem from "../asside__item/AssideItem";
import AssideTop from "../asside__top/AssideTop";
import CallItem from "../callModal/callItem/CallItem";
import CallModal from "../callModal/CallModal";
import style from "./asside.module.css"

function Asside() {
    return (
        <div className={style.asside}>
            <div className={style.asside__top}>
                <AssideTop />
            </div>
            <div className={style.asside__middle}>
                <AssideBtn title="Аналитика" section={false}>
                    <AssideItem
                        link="#"
                        text="Отчёты"
                        img_src="/assets/svg/analitico.svg"
                        inbox={false}
                    />
                    <AssideItem
                        link="#"
                        text="Портфели"
                        img_src="/assets/svg/portfolio.svg"
                        inbox={false}
                    />
                    <AssideItem
                        link="#"
                        text="Цели"
                        img_src="/assets/svg/target.svg"
                        inbox={false}
                    />
                </AssideBtn>
                <AssideBtn title="Starred" section={false}>
                    <div className={style.starred}>
                        <img src="/assets/svg/star.svg" />
                        <p>Starred items appear here</p>
                    </div>
                </AssideBtn>
                <AssideBtn title="Проекты" section={true}>

                </AssideBtn>
                <AssideBtn
                    title="Группа"
                    section={true}
                    clickElem={
                        <>
                            <CallItem imgSrc="/assets/svg/consule.svg" text="Консоль администратора" />
                        </>
                    }>

                </AssideBtn>
            </div>
            <div className={style.asside__bottom}>
                <button className={style.asside__det}>
                    <img src="/assets/svg/miniilustration.svg" />
                    <p>Пригласить</p>
                </button>
                <span></span>
                <button className={style.asside__det}>
                    <img src="/assets/svg/miniicon.svg" />
                    <p>Справка</p>
                </button>
            </div>
        </div>
    );
}

export default Asside;

