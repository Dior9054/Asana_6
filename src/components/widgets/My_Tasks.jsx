import CallItem from "../callModal/callItem/CallItem";
import CallModal from "../callModal/CallModal";
import MauseEnterBar from "../MauseEnterBar";

export default function My_Tasks({ del, half, full, check__Half, check__Full }) {
    return (
        <>
            <div className="flex items-start gap-[16px] border-b-[1px] border-b-solid border-b-[#424244] px-[24px] py-[16px] pb-[0]">
                <MauseEnterBar
                    pos="top"
                    event={
                        <img src="/assets/svg/avatar.svg" className='w-[48px] h-[48px] border-[1px] border-solid border-[#a2a0a2] rounded-[50%]' />
                    }>
                    <div>Открыть профиль</div>
                </MauseEnterBar>
                <div className="flex flex-col gap-[6px]">
                    <div className="w-[max-content] flex items-center pb-[4px] gap-[8px] group">
                        <h2 className='group-hover:shadow-bottom_shadow duration-[0.2s] font-roboto text-[20px] leading-[28px] font-500 text-[#f5f4f3]'>My tasks</h2>
                        <svg width="12" height="12" viewBox="0 0 24 24">
                            <path d="M20,10h-2V6c0-3.3-2.7-6-6-6S6,2.7,6,6v4H4c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-8  C22,10.9,21.1,10,20,10z M9,6c0-1.7,1.3-3,3-3s3,1.3,3,3v4H9V6z" fill='#A2A0A2' />
                        </svg>
                    </div>
                    <div className="flex items-center gap-[24px] mt-[4px]">
                        <h3 className='font-roboto cursor-pointer text-[#a2a0a2] text-[14px] font-500 leading-normal duration-[0.2s] pb-[10px] <!--text-[#f5f4f3]--> shadow-bottom_shadow'>Предстоит</h3>
                        <h3 className='font-roboto cursor-pointer text-[#a2a0a2] text-[14px] font-500 leading-normal duration-[0.2s] pb-[10px] hover:text-[#f5f4f3] hover:shadow-bottom_shadow'>Просрочено (2)</h3>
                        <h3 className='font-roboto cursor-pointer text-[#a2a0a2] text-[14px] font-500 leading-normal duration-[0.2s] pb-[10px] hover:text-[#f5f4f3] hover:shadow-bottom_shadow'>Выполнено</h3>
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
            <div className="px-[24px] py-[10px]">
                <button className="flex items-center justify-center rounded-[6px] font-roboto text-[#f5f4f3] px-[6px] py-[2px] font-500 text-[12px] leading-[28px] cursor-pointer gap-[4px] duration-[0.2s] hover:bg-[#ffffff0f]">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#a2a0a2" />
                    </svg>
                    Создать задачу
                </button>
            </div>
        </>
    );
}

