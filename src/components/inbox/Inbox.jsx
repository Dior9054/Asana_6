import Archive from '../arhive/Archive';
import InboxMain from '../inbox__main/inboxMain';
import style from './inbox.module.css';

function Inbox(){

    return(
        
        <div className={style.inbox_wrap}>
            <div className={style.inbox_header}>
                <h4 >Входящие</h4>
                <div className={style.inbox_links}>
                    <span className={style.links}>Текущие</span>
                    <span className={style.links}>Архив</span>
                    <span className={`${style.links} ${style.slesh}`}></span>
                    <span className={style.links}>Отправленные мной сообщения</span>
                </div>
            </div>

            <InboxMain/>
            {/* <Archive/> */}
        </div>

        
        
        )
}

export default Inbox