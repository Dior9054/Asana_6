
import { NavLink } from "react-router-dom";

function CallItem({ click, imgSrc, link, path, text }) {
    if (!!link) {
        return (
            <NavLink to={path} className="flex items-center gap-[8px] w-[100%] px-[10px] py-[6px] cursor-pointer duration-[0.2s] hover:bg-[#ffffff1c]">
                {imgSrc}
                <p className="font-roboto text-[13px] leading-[22px] text-[#f5f4f3]">{text}</p>
            </NavLink>
        )
    } else {
        return (
            <button
                className="flex items-center gap-[8px] w-[100%] px-[10px] py-[6px] cursor-pointer duration-[0.2s] hover:bg-[#ffffff1c]"
                onClick={click}>
                {imgSrc}
                <p className="font-roboto text-[13px] leading-[22px] text-[#f5f4f3]">{text}</p>
            </button>
        )
    }
}

export default CallItem;

