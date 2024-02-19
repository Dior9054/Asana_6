
import style from "./logIn.module.css"

function LogIn() {
    return (
        <div className={style.registrate}>
            <header className={style.header}>
                <img src="/assets/svg/registrate__logo.svg" />
            </header>
            <section className={style.resgistrate__body}>
                <h2>Вход</h2>
                <div className={style.registrate__body__main}>
                    <form className={style.registrate__form}>
                        {/* <div className={style.registrate__form__item}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter yor email...." />
                        </div> */}
                        <div className={style.registrate__form__item}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="username" placeholder="Enter yor name...." />
                        </div>
                        <div className={style.registrate__form__item}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter yor password...." />
                        </div>



                        {/* <div className={style.registrate__form__item}>
                            <label htmlFor="phone">phone</label>
                            <input type="phone" id="phone" name="phone" placeholder="Enter yor phone...." />
                        </div> */}



                        <button>Войти</button>
                    </form>
                    {/* <p>Регистрируясь, я принимаю условия Политики конфиденциальности и Пользовательского соглашения Asana.</p> */}
                </div>
                {/* <div className={style.registrate__infoes}>
                    <div className={style.registrate__infoes__item}>
                        <img src="/assets/svg/task.svg" />
                        <span>Get access to unlimited tasks, projects, and storage.</span>
                    </div>
                    <div className={style.registrate__infoes__item}>
                        <img src="/assets/svg/task.svg" />
                        <span>See different views like list, board, and calendar.</span>
                    </div>
                    <div className={style.registrate__infoes__item}>
                        <img src="/assets/svg/task.svg" />
                        <span>Invite your teammates to explore Asana.</span>
                    </div>
                </div> */}
            </section>
            <footer className={style.footer}>
                {/* <div className={style.footer__elem}>
                    <img src="/assets/svg/language.svg" />
                    <span>Русский</span>
                </div> */}
                <div className={style.footer__elem}>
                    <span>Asana.com Поддержка Интеграции Форум Разработчики и API Ресурсы Руководство Шаблоны Цены Сроки Конфиденциальность Этот сайт требует подтвердить, что вы не робот, и на него распространяются Политика конфиденциальности и Пользовательское соглашение Google.</span>
                </div>
            </footer>
        </div>
    );
}

export default LogIn;

