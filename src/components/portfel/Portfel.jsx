import style from './portfel.module.css';
import PortfelMain from '../portfel_main/PortfelMain';

function Portfel (){

    return (
        <div className={style.portfel_wrap}>
            <div className={style.portfel_header}>
                <h2>Портфели</h2>
            </div>

            <PortfelMain/>
        </div>
    )
}

export default Portfel;