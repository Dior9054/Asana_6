import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import CallItem from "../components/callModal/callItem/CallItem";
import CallModal from "../components/callModal/CallModal";
import MauseEnterBar from "../components/MauseEnterBar";

export default function Project() {
    let { projectId } = useParams()
    const [date, setDate] = useState("")

    useEffect(() => {
        fetch(`https://asanaclone.pythonanywhere.com/api/v1/projects/${projectId}/`, {
            method: "GET",
            headers: {
                'Authorization': `Token ${JSON.parse(localStorage.getItem("auth_token"))}`,
            }
        })
            .then(res => res.json())
            .then(res => setDate(res))
    }, [])

    return (
        <div className="w-[100%] h-[100%]">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                        <div className="w-[48px] h-[48px] rounded-[12px] bg-[red]"></div>
                        <div className="flex items-center">
                            <h3 className="text-[20px] font-[500] font-roboto text-[#f5f4f3]">{date.name}</h3>
                            <MauseEnterBar
                                pos="bottom"
                                event={
                                    <CallModal
                                        width={240}
                                        pos="bottom"
                                        event={
                                            <button className="w-[28px] h-[28px] flex items-center duration-[0.2s] justify-center group/item hover:bg-[#ffffff0f] rounded-[6px] ml-[8px]">
                                                <svg viewBox="0 0 32 32" width="16" height="16">
                                                    <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z" className="duration-[0.2s] fill-[#a2a0a2] group-hover/item:fill-[#f5f4f3]" />
                                                </svg>
                                            </button>
                                        }>
                                        <CallItem imgSrc={
                                            <svg viewBox="0 0 32 32" width="20" height="20">
                                                <path d="M25,4c-2.4,0-4.4,1.7-4.9,4H4C3.4,8,3,8.4,3,9s0.4,1,1,1h16.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5S27.8,4,25,4z M25,12c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S26.7,12,25,12z M27,20H11.9c-0.5-2.3-2.5-4-4.9-4c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.4,0,4.4-1.7,4.9-4H27c0.6,0,1-0.4,1-1S27.6,20,27,20z M7,24c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.7,24,7,24z" fill="#a2a0a2" />
                                            </svg>
                                        } text="dasddasd" />
                                    </CallModal>
                                }>
                                <div>Действие по проекту</div>
                            </MauseEnterBar>
                            <MauseEnterBar
                                pos="bottom"
                                top={33}
                                event={
                                    <button className="w-[28px] h-[28px] flex items-center duration-[0.2s] justify-center group/item hover:bg-[#ffffff0f] rounded-[6px]">
                                        <svg viewBox="0 0 32 32" width="16" height="16">
                                            <path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z" className="fill-[#a2a0a2] duration-[0.2s] group-hover/item:fill-[#4ecbc4]" />
                                        </svg>
                                    </button>
                                }>
                                <div className="max-w-[150px]">
                                    <p>Add to starred</p>
                                    <span className="w-[100%] h-[1px] bg-[#f5f4f3] block my-[5px]"></span>
                                    <p>Find your starred items in the sidebar</p>
                                </div>
                            </MauseEnterBar>
                        </div>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div>
                            <MauseEnterBar
                                pos="top"
                                event={
                                    <button className="w-[24px] h-[24px] rounded-[50%] flex items-center justify-center border-[1px] border-dashed duration-[0.2s] border-[#a2a0a2] hover:bg-[#ffffff0f] hover:border-[#f5f4f3]">
                                        <svg viewBox="0 0 24 24" width="12" height="12">
                                            <path d="M12,14c-3.859,0-7-3.14-7-7S8.141,0,12,0s7,3.14,7,7-3.141,7-7,7Zm0-12c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm10,21v-2c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v2c0,.552,.447,1,1,1s1-.448,1-1v-2c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v2c0,.552,.447,1,1,1s1-.448,1-1Z" className="duration-[0.2s] fill-[#a2a0a2] hover:fill-[#f5f4f3]" />
                                        </svg>
                                    </button>
                                }>
                                <div>Добавить участников</div>
                            </MauseEnterBar>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <MauseEnterBar
                                pos="bottom"
                                top={43}
                                event={
                                    <button className="flex items-center gap-[4px] text-[12px] leading-[28px] px-[8px] text-[#FFF] bg-[#4573d2] rounded-[6px]">
                                        <svg viewBox="0 0 24 24" width="12" height="12">
                                            <path d="M16,13.5c-3.59,0-6.5-2.91-6.5-6.5S12.41,.5,16,.5s6.5,2.91,6.5,6.5-2.91,6.5-6.5,6.5Zm-10,7.5c0-1.287,.348-2.492,.955-3.527,.383-.653-.122-1.473-.878-1.473h-1.076C2.239,16,0,18.239,0,21v2C0,23.552,.448,24,1,24H5c.552,0,1-.448,1-1v-2Zm18,2v-2c0-2.761-2.239-5-5-5h-6c-2.761,0-5,2.239-5,5v2c0,.552,.448,1,1,1h14c.552,0,1-.448,1-1ZM7.5,7c0-1.834,.584-3.53,1.573-4.917,.461-.646,.016-1.539-.777-1.576-.662-.031-1.351,.041-2.057,.239C3.67,1.466,1.753,3.767,1.525,6.424c-.331,3.849,2.695,7.076,6.475,7.076,.102,0,.204-.002,.305-.007,.789-.038,1.227-.933,.768-1.575-.989-1.387-1.573-3.083-1.573-4.917Z" fill="#FFF" />
                                        </svg>
                                        Поделиться
                                    </button>
                                }>
                                <div className="max-w-[150px]">
                                    <p>My workspace</p>
                                    <span className="w-[100%] h-[1px] bg-[#f5f4f3] block my-[5px]"></span>
                                    <p>Members of the My workspace team can find this project</p>
                                </div>
                            </MauseEnterBar>
                            <button className="flex text-[#f5f4f3] text-[12px] leading-[28px] group/item cursor-pointer items-center gap-[4px] border-[1px] border-solid border-[#565557] px-[8px] rounded-[6px] duration-[0.2s] hover:bg-[#ffffff0f]">
                                <svg viewBox="0 0 24 24" width="12" height="12">
                                    <path d="M17.625 0h-1.25A4.375 4.375 0 0 1 12 4.375v1.25A4.375 4.375 0 0 1 16.375 10h1.25A4.375 4.375 0 0 1 22 5.625v-1.25A4.375 4.375 0 0 1 17.625 0ZM13 10.25c-3.333 0-5.25-1.917-5.25-5.25h-1.5c0 3.333-1.917 5.25-5.25 5.25v1.5c3.333 0 5.25 1.917 5.25 5.25h1.5c0-3.333 1.917-5.25 5.25-5.25v-1.5ZM15.625 14h-1.25A4.375 4.375 0 0 1 10 18.375v1.25A4.375 4.375 0 0 1 14.375 24h1.25A4.375 4.375 0 0 1 20 19.625v-1.25A4.375 4.375 0 0 1 15.625 14Z" className="duration-[0.2s] fill-[#a2a0a2] group-hover/item:fill-[#f5f4f3]" />
                                </svg>
                                Ask AI
                            </button>
                            <button className="flex text-[#f5f4f3] text-[12px] leading-[28px] cursor-pointer items-center gap-[4px] border-[1px] border-solid border-[#565557] px-[8px] rounded-[6px] duration-[0.2s] hover:bg-[#ffffff0f]">
                                <svg viewBox="0 0 12 12" width="12" height="12">
                                    <path d="M5,1v3c0,0.6-0.4,1-1,1H1C0.4,5,0,4.6,0,4V1c0-0.6,0.4-1,1-1h3C4.6,0,5,0.4,5,1z" fill="#F06A6A" />
                                    <path d="M12,1v3c0,0.6-0.4,1-1,1H8C7.4,5,7,4.6,7,4V1c0-0.6,0.4-1,1-1h3C11.6,0,12,0.4,12,1z" fill="#F1BD6C" />
                                    <path d="M5,8v3c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h3C4.6,7,5,7.4,5,8z" fill="#5DA283" />
                                    <path d="M11,12H8c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v3C12,11.6,11.6,12,11,12z M8,8v3h3V8H8z M8,7.5  L8,8h0V7.5z" fill="#4573D2" />
                                </svg>
                                Настроить
                            </button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

