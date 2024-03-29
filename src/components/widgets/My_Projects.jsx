import { NavLink } from 'react-router-dom';
import CallItem from '../callModal/callItem/CallItem';
import CallModal from '../callModal/CallModal';
import MauseEnterBar from '../MauseEnterBar';

export default function My_Projects({ del, half, full, check__Half, check__Full }) {
    return (
        <>
            <div className="px-[24px] py-[16px]">
                <div>
                    <div className="flex flex-col gap-[6px]">
                        <div className="w-[max-content] flex items-center pb-[4px] gap-[8px]">
                            <h2 className="font-roboto font-[500] text-[20px] leading-[28px] duration-[0.2s] text-[#f5f4f3]">Проекты</h2>
                            <CallModal
                                width={190}
                                pos="bottom-left"
                                event={
                                    <button className="flex items-center justify-center rounded-[6px] font-roboto text-[#f5f4f3] px-[6px] py-[2px] font-500 text-[12px] leading-[28px] cursor-pointer gap-[4px] duration-[0.2s] hover:bg-[#ffffff0f]">
                                        Недавние
                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="#A2A0A2" />
                                        </svg>
                                    </button>
                                }>
                                <CallItem imgSrc={
                                    <svg viewBox="0 0 40 40" width="20" height="20">
                                        <path d="M34.5,6c-2.48,0-4.5,2.02-4.5,4.5,0,1.13.43,2.14,1.11,2.93l-4.28,7.55s-.03.06-.04.09c-.26-.05-.52-.08-.79-.08-.85,0-1.64.25-2.32.66l-4.46-3.65c.17-.48.28-.98.28-1.51,0-2.48-2.02-4.5-4.5-4.5s-4.5,2.02-4.5,4.5c0,.94.29,1.81.79,2.54l-4.51,6.17c-.41-.12-.83-.21-1.28-.21-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5c0-.94-.29-1.81-.79-2.54l4.51-6.17c.41.12.83.21,1.28.21.85,0,1.64-.25,2.32-.66l4.46,3.65c-.17.48-.28.98-.28,1.51,0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5c0-1.13-.43-2.15-1.12-2.94.02-.03.05-.06.07-.09l4.27-7.54c.26.05.51.08.78.08,2.48,0,4.5-2.02,4.5-4.5s-2.02-4.5-4.5-4.5ZM5.5,31c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm9.5-13c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm11,9c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm8.5-15c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Z" fill="#a2a0a2" />
                                    </svg>
                                } text="New dashboard" />
                                <CallItem imgSrc={
                                    <svg viewBox="0 0 29 29" width="20" height="20">
                                        <path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z" fill="#a2a0a2" />
                                        <path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z" fill="#a2a0a2" />
                                    </svg>
                                } text="New portfolio" />
                                <CallItem imgSrc={
                                    <svg viewBox="0 0 40 40" width="20" hanging="20">
                                        <path d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z" fill="#a2a0a2"></path>
                                    </svg>
                                } text="New goal" />
                            </CallModal>
                        </div>
                    </div>
                    <MauseEnterBar
                        pos="top"
                        event={
                            <CallModal
                                width={190}
                                pos="bottom-left"
                                event={
                                    <button className="absolute top-[8px] right-[8px] bg-[#2a2b2d] rounded-[8px] border-[1px] border-solid border-[#424244] flex items-center justify-center cursor-pointer w-[32px] h-[32px] opacity-0 duration-[0.2s] group group-hover/item:opacity-[1]">
                                        <svg width="16" height="16" viewBox="0 0 32 32" className='m-[4px] w-[100%] h-[max-content] p-[4px] rounded-[5px] duration-[0.2s] group-hover:bg-[#ffffff0f]'>
                                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" fill='#a2a0a2' />
                                        </svg>
                                    </button>
                                }>
                                <CallItem imgSrc={check__Half()} text="Половина" click={half} />
                                <CallItem imgSrc={check__Full()} text="Полный размер" click={full} />
                                <hr className="my-[4px] border-[#424244]" />
                                <CallItem imgSrc={
                                    <svg viewBox="0 0 32 32" width="16" height="16">
                                        <path d="M30,6h-8V4c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4v2H2C1.4,6,1,6.4,1,7s0.4,1,1,1h2v18c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V8h2c0.6,0,1-0.4,1-1S30.6,6,30,6z M12,4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2h-8V4z M26,26c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V8h20V26z M12,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S12,23.6,12,23z M18,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S18,23.6,18,23z" fill="#d1395a" />
                                    </svg>
                                } text="Удалить виджет" nameClass="text-[#d1395a]" click={del} />
                            </CallModal>
                        }>
                        <div>Действие</div>
                    </MauseEnterBar>
                </div>
                <div>
                    <NavLink className="flex items-center gap-[16px] duration-[0.2s] w-[max-content] px-[10px] py-[8px] rounded-[10px] decoration-none hover:bg-[#ffffff0f]" to="/new">
                        <div className="flex items-center justify-center border-[1px] border-dashed border-[#a2a0a2] rounded-[16px] w-[48px] h-[48px]">
                            <svg viewBox="0 0 32 32" width="16" height="16">
                                <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z" fill="#a2a0a2" />
                            </svg>
                        </div>
                        <p className='font-roboto text-[14px] font-500 leading-[20px] text-[#a2a0a2]'>Создать проект</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
