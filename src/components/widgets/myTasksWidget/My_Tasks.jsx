import CallItem from "../../callModal/callItem/CallItem";
import CallModal from "../../callModal/CallModal";
import MauseEnterBar from "../../mouseEnterBar/MauseEnterBar";

export default function My_Tasks() {
    return (
        <div className="w-[49.3%] h-[410px] shadow-custom border-[1px] border-solid border-[#2a2b2d] bg-[#2a2b2d] rounded-[8px] cursor-pointer relative duration-[0.2s] hover:shadow-custom_hover group/item">
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
        </div>
    );
}