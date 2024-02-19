
import { useState } from "react"
import style from "./resgistrate.module.css"

function Registrate() {
    const [bad, setBad] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handle__Submit = (e) => {
        e.preventDefault()
        let userDate = new FormData(e.target)
        userDate = Object.fromEntries(userDate.entries())
        fetch("https://asanaclone.pythonanywhere.com/api/v1/auth/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDate)
        })
            .then(res => res.json())
            .then(res => {
                if (res.id) {
                    window.location.href = "/login"
                } else {
                    for (let key in bad) {
                        for (let item in res) {
                            if (item == key) {
                                setBad(prev => {
                                    for (let key_item in prev) {
                                        prev[key_item] = ""
                                    }
                                    return { ...prev, [key]: res[key] }
                                })
                            }
                        }
                    }
                }
            })
    }

    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-between px-[40px] py-[25px] bg-[#FFF]">
            <header className="w-[100%] self-start">
                <img src="/assets/svg/registrate__logo.svg" />
            </header>
            <section className={style.resgistrate__body}>
                <h2>Регистрация</h2>
                <div className={style.registrate__body__main}>
                    <form onSubmit={handle__Submit} className={style.registrate__form}>
                        <div className={style.registrate__form__item}>
                            <label htmlFor="email">Email</label>
                            <input style={bad.email ? { "border-bottom": "3px solid red" } : {}} type="email" id="email" name="email" placeholder="Enter yor email...." />
                            {bad.email && <p>{bad.email}</p>}
                        </div>
                        <div className={style.registrate__form__item}>
                            <label htmlFor="name">Name</label>
                            <input style={bad.username ? { "border-bottom": "3px solid red" } : {}} type="text" id="name" name="username" placeholder="Enter yor name...." />
                            {bad.username && <p>{bad.username}</p>}
                        </div>
                        <div className={style.registrate__form__item}>
                            <label htmlFor="password">Password</label>
                            <input style={bad.password ? { "border-bottom": "3px solid red" } : {}} type="password" id="password" name="password" placeholder="Enter yor password...." />
                            {bad.password && <p>{bad.password}</p>}
                        </div>
                        <button>Зарегистрироваться</button>
                    </form>
                    <p>Регистрируясь, я принимаю условия Политики конфиденциальности и Пользовательского соглашения Asana.</p>
                </div>
                <div className={style.registrate__infoes}>
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
                </div>
            </section>
            <footer className={style.footer}>
                <div className={style.footer__elem}>
                    <img src="/assets/svg/language.svg" />
                    <span>Русский</span>
                </div>
                <div className={style.footer__elem}>
                    <span>Условия использования и конфиденциальность</span>
                </div>
            </footer>
        </div>
    );
}

export default Registrate;

