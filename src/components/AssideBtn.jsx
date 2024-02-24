
import { useState } from "react";
import CallModal from "./callModal/CallModal";
import MauseEnterBar from "./MauseEnterBar";

export default function AssideBtn({ title, children, section, width, clickElem, text }) {
    const [state, setState] = useState(true)

    return (
        <div>
            <div className="flex items-center justify-between gap-[5px] group">
                <button className="w-[20px] h-[20px] rounded-[6px] cursor-pointer opacity-0 duration-[0.2s] group-hover:opacity-[1] hover:bg-[#ffffff0f] group/item" onClick={() => setState(prev => !prev)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" className={state ? "" : "rotate-[-90deg] duration-[0.2s]"} >
                        <path d="M12 16L6 10H18L12 16Z" className="fill-[#a2a0a2] duration-[0.2s] group-hover/item:fill-[#FFF]"></path>
                    </svg>
                </button>
                {
                    section
                        ?
                        <button className="text-[14px] leading-normal font-roboto overflow-hidden text-ellipsis whitespace-nowrap font-500 text-[#f5f4f3] mr-auto cursor-grab ml-[-4px] gap-[2px] flex items-center rounded-[6px] p-[4px] hover:bg-[#ffffff0f] duration-[0.2s] group" >
                            {title}
                            <svg width="12" hanging="12" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-[1] duration-[0.2s]">
                                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" fill="#a2a0a2" />
                            </svg>
                        </button>
                        :
                        <h1 className="text-[14px] leading-normal font-roboto overflow-hidden text-ellipsis whitespace-nowrap font-500 text-[#f5f4f3] mr-auto cursor-grab">{title}</h1>
                }
                <MauseEnterBar
                    pos="top"
                    event={
                        <CallModal
                            width={width}
                            pos="bottom"
                            event={
                                <button className="w-[20px] h-[20px] rounded-[6px] cursor-pointer flex items-center justify-center relative duration-[0.2s] z-[3] hover:bg-[#ffffff0f] group">
                                    <svg width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" className="fill-[#a2a0a2] group-hover:bg-[#FFF] duration-[0.2s]"></path>
                                    </svg>
                                </button>
                            }>
                            {clickElem}
                        </CallModal>
                    }>
                    <div>{text}</div>
                </MauseEnterBar>
            </div >
            <div className="pl-[20px] my-[8px] relative">
                {state && children}
            </div>
        </div >
    );
}
