
import style from "./resgistrate.module.css"

function Registrate() {
    fetch("https://asanaclone.pythonanywhere.com/api/v1/auth/users")
        .then(res => console.log(res.json()))

    // const handle__Submit = (e) => {
    //     e.preventDefault()
    //     let userDate = new FormData(e.target)
    //     userDate = Object.fromEntries(userDate.entries())

    //     // fetch("https://asanaclone.pythonanywhere.com/api/v1/auth/users", {
    //     //     method: "GET",
    //     //     // headers: {
    //     //     //     'Content-Type': 'application/json'
    //     //     // },
    //     //     // body: JSON.stringify(userDate)
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(res => console.log(res))
    //     //     .catch(err => console.log(err))

    //     fetch("https://asanaclone.pythonanywhere.com/api/v1/auth/users")
    //         .then(res => console.log(res.json()))
    // }

    return (
        <div className={style.body}>
            {/* <form className={style.form} onSubmit={handle__Submit}> */}
            <input type="email" name="email" placeholder="email" />
            <input type="text" name="name" placeholder="userName" />
            <input type="password" name="password" placeholder="userPassword" />
            <button type="submit">submit</button>
            {/* </form> */}
        </div>
    );
}

export default Registrate;
