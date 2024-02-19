
import CallItem from '../callModal/callItem/CallItem';
import CallModal from '../callModal/CallModal';
import My_Peaple from '../widgets/myPeapleWidget/My_Peaple';
import My_Projects from '../widgets/myProjectsWidget/My_Projects';
import My_Tasks from '../widgets/myTasksWidget/My_Tasks';

export default function Home() {
    return (
        <div className="w-[100%] h-[100%] px-[32px] py-[42px] overflow-y-auto bg-[#1e1f21]">
            <div className="flex items-start justify-center">
                <h1 className="font-roboto text-[#f5f4f3] text-[20px] leading-[28px] font-500 mt-auto">Главная</h1>
                <div className="flex flex-col ml-auto">
                    <h5 className='font-roboto text-[16px] leading-[20px] mb-[4px] font-500 text-center text-[#f5f4f3]'>Среда, 7 Февраль</h5>
                    <h1 className='font-roboto text-[32px] leading-[40px] text-center text-[#f5f4f3] font-400'>Добрый день, dior</h1>
                </div>
                <button className='ml-auto self-end flex items-center font-roboto text-[14px] leading-[33px] text-[#f5f4f3] rounded-[6px] cursor-pointer bg-[#2a2b2d] border-[1px] border-solid border-[#424244] px-[12px] gap-[4px] duration-[0.2s] hover:border-[#6a696a]'>
                    <svg width="16" height="16" viewBox="0 0 32 32">
                        <path d="M9.5,2C10.878,2,12,3.122,12,4.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,12,2,10.878,2,9.5v-5C2,3.122,3.122,2,4.5,2H9.5M9.5,0h-5C2.015,0,0,2.015,0,4.5v5C0,11.985,2.015,14,4.5,14h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,2.015,11.985,0,9.5,0L9.5,0zM27.5,2C28.879,2,30,3.122,30,4.5v5c0,1.378-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.122-2.5-2.5v-5C20,3.122,21.121,2,22.5,2H27.5M27.5,0h-5C20.015,0,18,2.015,18,4.5v5c0,2.485,2.015,4.5,4.5,4.5h5c2.485,0,4.5-2.015,4.5-4.5v-5C32,2.015,29.985,0,27.5,0L27.5,0z M9.5,20c1.378,0,2.5,1.122,2.5,2.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,30,2,28.878,2,27.5v-5C2,21.122,3.122,20,4.5,20H9.5M9.5,18h-5C2.015,18,0,20.015,0,22.5v5C0,29.985,2.015,32,4.5,32h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,20.015,11.985,18,9.5,18L9.5,18z M24,24v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h5c0.55,0,1,0.45,1,1s-0.45,1-1,1h-5v5c0,0.55-0.45,1-1,1s-1-0.45-1-1v-5h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1H24z" fill="#a2a0a2" />
                    </svg>
                    Настроить
                </button>
            </div>
            <div>
                <div className="rounded-[24px] bg-[#252628] px-[20px] h-[44px] flex items-center justify-between w-[450px] mx-auto mt-[19px]">
                    <CallModal
                        width={190}
                        pos="bottom-right"
                        event={
                            <button className="font-roboto text-[#a2a0a2] text-[12px] font-600 leading-[16px] flex items-center gap-[3px] rounded-[6px] px-[8px] py-[5px] duration-[0.2s] cursor-pointer hover:bg-[#ffffff0f] hover:text-[#f5f4f3] group">
                                <p>Моя неделя</p>
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" className='fill-[#A2A0A2] group-hover:fill-[#FFFF]' />
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
                    <span className='w-[1px] h-[24px] bg-[#424244] block'></span>
                    <div className="font-roboto text-[#a2a0a2] text-[12px] font-600 leading-[16px] flex items-center gap-[3px] rounded-[6px] px-[8px] py-[5px] duration-[0.2s] cursor-pointer">
                        <img src="/assets/svg/correct.svg" />
                        <p className='flex items-center gap-[4px]'>
                            <span className='text-[#a2a0a2] font-roboto text-[20px] font-600 leading-[28px]'>0</span>
                            Задач выполнено
                        </p>
                    </div>
                    <div className="font-roboto text-[#a2a0a2] text-[12px] font-600 leading-[16px] flex items-center gap-[3px] rounded-[6px] px-[8px] py-[5px] duration-[0.2s] cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z" fill='#A2A0A2' />
                        </svg>
                        <p className='flex items-center gap-[4px]'>
                            <span className='text-[#a2a0a2] font-roboto text-[20px] font-600 leading-[28px]'>1</span>
                            Сотрудник
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[28px] flex gap-[16px] flex-wrap">
                <My_Tasks />
                <My_Projects />
                <My_Peaple />
            </div>
        </div>
    )
}