import style from "./creatAccount.module.css";

function CreatAccount (){

    return (
        <div className={style.wrap}>
            <header className={style.title}>
                <img className={style.logo} src="/assets/svg/miniilustration.svg" alt="" />
                <h2>asana</h2>
            </header>
            <main className={style.registration}>
                <h1>Регистрация</h1>
                <div className={style.registration_inputs}>
                    <input className={style.input} type="text" placeholder="Имя пользователя"/>
                    <input className={style.input} type="email" placeholder="name@gmail.com"/> 
                    <input className={style.input} type="password" placeholder="Введите пароль"/>
                    <button className={style.registration_button}>Зарегестрироваться</button>
                </div>
                <p className={style.politik}>Регистрируясь,я принимаю условие Политики конфиденциальности и Пользовательского соглашения Asana.</p>
            </main>
            <footer>
                <div className={style.language}>
                    <img className={style.language_photo} src="/assets/img/internet.png" alt="" />
                    <p className={style.politik}>Русский</p>
                </div>
                <p className={style.politik}>Условия использования и конфиденциальность</p>
            </footer>
        </div>
    )
}
export default CreatAccount;