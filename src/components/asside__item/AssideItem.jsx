
import { NavLink, useLocation } from "react-router-dom"

export default function AssideItem({ link, text, img_src, inbox }) {
    const location = useLocation()
    return (
        <NavLink to={link} className={(location.pathname == link ? "bg-[#ffffff0f] " : "") + `flex items-center justify-start gap-[10px] px-[10px] py-[5px] w-[100%] decoration-none select-none rounded-[8px] duration-[0.2s] hover:bg-[#ffffff0a]`}>
            {img_src}
            <p className="font-robot text-[14px] leading-[22px] text-ellipsis whitespace-nowrap text-[#f5f4f3]">{text}</p>
            {inbox ? <span className="w-[7px] h-[7px] bg-[#e8b668] rounded-[50%]"></span> : ""}
        </NavLink>
    );
}
