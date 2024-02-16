import style from './reportingMain.module.css';

function ReportingMain (){

    return (
        <div className={style.report_main}>
            <h2 className={style.report_main_description}>See teamwork from every angle</h2>
            <p className={style.report_main_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus eius inventore vel ducimus facere?</p>
            <button className={style.btn}>Get started</button>

            <video autoPlay muted className={style.reprot_video} src="/assets/video/reporting video.mp4"></video>
        </div>
    )
}

export default ReportingMain;