// import style from "./creatAccount.module.css";

function CreatAccount() {

    //     const handle__Submit = (e) => {
    //         e.preventDefault()
    //         let userDate = new FormData(e.target)
    //         userDate = Object.fromEntries(userDate.entries())

    //         console.log(JSON.stringify(userDate));

    //         fetch("https://asanaclone.pythonanywhere.com/api/v1/auth/users/", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(userDate)
    //         })
    //             .then(res => res.json())
    //             .then(res => console.log(res))

    //         e.target.reset()
    //     }

    //     return (
    //         <div className={style.wrap}>
    //             <header className={style.title}>
    //                 <img className={style.logo} src="/assets/svg/miniilustration.svg" alt="" />
    //                 <h2>asana</h2>
    //             </header>
    //             <main className={style.registration}>
    //                 <h1>Регистрация</h1>
    //                 <form className={style.registration_inputs} onSubmit={handle__Submit}>
    //                     <input className={style.input} type="text" name="email" placeholder="name@gmail.com" />
    //                     <input className={style.input} type="text" name="username" placeholder="Имя пользователя" />
    //                     <input className={style.input} type="text" name="password" placeholder="Введите пароль" />
    //                     <button className={style.registration_button} type="submit">Зарегестрироваться</button>
    //                 </form>
    //                 <p className={style.politik}>Регистрируясь,я принимаю условие Политики конфиденциальности и Пользовательского соглашения Asana.</p>
    //             </main>
    //             <footer>
    //                 <div className={style.language}>
    //                     <img className={style.language_photo} src="/assets/img/internet.png" alt="" />
    //                     <p className={style.politik}>Русский</p>
    //                 </div>
    //                 <p className={style.politik}>Условия использования и конфиденциальность</p>
    //             </footer>
    //         </div>
    //     )
}
export default CreatAccount;

