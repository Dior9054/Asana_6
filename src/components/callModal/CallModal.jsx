
import style from "./callModal.module.css"

function CallModal({ event, width, pos, children }) {

    let run = () => {
        let a = event?.target?.getBoundingClientRect() || event.getBoundingClientRect()
        let obj = { top: a.top, left: a.left, }
        if (pos == "right") obj.left = a.right
        else if (pos == "bottom") obj.top = a.bottom
        else if (pos == "bottom|left") obj.top = a.bottom + 5, obj.left = a.right
        return obj
    }

    return (
        <div className={style.modal} id="modal"
            style={{
                "width": width,
                "left": run()?.left + "px",
                "top": run()?.top + "px",
                "transform": pos == "left" || pos == "bottom|left" ? "translateX(-100%)" : pos == "top" ? "translateY(-100%)" : "",
            }}>
            {children}
        </div>
    );
}

export default CallModal;


