import style from './reporting.module.css';
import ReportingMain from '../reporting_main/ReportingMain';

function Reporting (){

    return (
        <div className={style.report_wrap}>
            <div className={style.report_header}>
                <h2>Отчёты</h2>
            </div>

            <ReportingMain/>
        </div>
    )
}

export default Reporting;