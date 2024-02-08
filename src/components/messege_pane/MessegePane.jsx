import style from "./messegePain.module.css";


function MessegePane(){

    return(
        
            <div className={style.messege_pane}>
                <img src="/assets/svg/two_people.svg" alt="" />
                <h2>Свяжите свои слова с работой</h2>
                <p>Отправьте сообщение, чтобы запустить проекты, обсудить задачи или сформировать идеи.</p>
                <button className={style.messege_btn}>Отправить сообщение</button>
            </div>
        
    )
}

export default MessegePane;