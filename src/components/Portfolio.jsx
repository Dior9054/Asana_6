
import { Outlet } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className='w-[100%] flex flex-col'>
            <div className="p-[24px] border-b-[1px] border-b-solid border-b-[#424244]">
                <h2 className="text-[20px] font-roboto leading-[28px] text-[#f5f4f3] font-[500]">Портфели</h2>
            </div>
            <Outlet />
        </div>
    )
}