import style from './portfelMain.module.css';

function PortfelMain (){

    return (
        <div className={style.portfel_main}>
            <h2 className={style.portfel_main_description}>Получайте общее представление о ситуации с помощью портфелей</h2>
            <p className={style.portfel_main_p}>Отслеживайте статус и загрузку участников группы в нескольких проектах. Asana поможет вам настроить свой первый портфель.</p>
            <button className={style.btn}>Иследовать портфели</button>

            <video autoPlay muted className={style.portfel_video} src="/assets/video/Portfolio video.mp4"></video>
        </div>
    )
}

export default PortfelMain;