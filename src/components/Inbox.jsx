
import { NavLink, Outlet, useLocation, } from 'react-router-dom';

export default function Inbox() {
    let location = useLocation()

    return (
        <>
            <div className="w-[100%] h-[100%] flex flex-col bg-[#1e1f21]">
                <div className="pt-[10px] px-[24px] pb-[0] flex flex-col gap-[5px] border-b-[1px] border-b-solid border-b-[#424244]">
                    <h4 className="font-roboto text-[20px] leading-[28px] font-[500] text-[#f5f4f3]">Входящие</h4>
                    <div className="mt-[3px] flex items-center gap-[24px]">
                        <NavLink className={`text-[#a2a0a2] font-roboto text-[14px] font-[500] leading-normal decoration-none pb-[10px] duration-[0.2s] cursor-pointer hover:text-[#f5f4f3] hover:shadow-inbox ${location.pathname == "/inbox" ? "text-[#f5f4f3] shadow-inbox" : ""}`} to="/inbox">Текущие</NavLink>
                        <NavLink className={`text-[#a2a0a2] font-roboto text-[14px] font-[500] leading-normal decoration-none pb-[10px] duration-[0.2s] cursor-pointer hover:text-[#f5f4f3] hover:shadow-inbox ${location.pathname == "/inbox/archive" ? "text-[#f5f4f3] shadow-inbox" : ""}`} to="/inbox/archive">Архив</NavLink>
                        <span className="w-[1px] h-[16px] mb-auto bg-[#424244]"></span>
                        <NavLink className={`text-[#a2a0a2] font-roboto text-[14px] font-[500] leading-normal decoration-none pb-[10px] duration-[0.2s] cursor-pointer hover:text-[#f5f4f3] hover:shadow-inbox`} to="/git">Отправленные мной сообщения</NavLink>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
