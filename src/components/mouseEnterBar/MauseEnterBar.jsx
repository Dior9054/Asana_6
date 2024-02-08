
import style from "./mouseEnterBar.module.css"

function MauseEnterBar({ id, event, pos, children }) {

    let run = () => {
        let a = event?.target?.closest(`#${id}`).getBoundingClientRect() || event.closest(`#${id}`).getBoundingClientRect()
        let obj = {
            top: a.top,
            left: a.left,
            height: a.height,
            width: a.width
        }
        if (pos == "top") {
            obj.top = a.top - (a.height / 100 * 50) - 3
            obj.left = a.left + (a.width / 100 * 50)
        } else if (pos == "bottom") {
            obj.top = a.bottom + a.height
            obj.left = a.left + (a.width / 100 * 50)
        }
        return obj
    }

    return (
        <div className={style.modal}
            style={{ "left": run().left + "px", "top": run().top, "flexDirection": pos == "bottom" ? "column-reverse" : "column" }} >
            {children}
            <svg xmlns="http://www.w3.org/2000/svg"
                style={pos == "bottom" ? { "transform": "rotate(180deg) translateY(-2px)" } : {}}
                width="20"
                height="5"
                viewBox="0 0 25 5">
                <path d="M5 0L14 6H12L20 0Z" fill="#4b4b4b"></path>
            </svg>
        </div >
    );
}

export default MauseEnterBar;



