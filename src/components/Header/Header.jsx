
import CallModal from '../callModal/CallModal';
import CallItem from '../callModal/callItem/CallItem';
import { Link } from 'react-router-dom';
import MauseEnterBar from '../mouseEnterBar/MauseEnterBar';
import { useContext } from 'react';
import { HeaderBuregrBtn } from '../layout/Layout';

export default function Header() {
    const headerBurgerId = useContext(HeaderBuregrBtn)
    return (
        <div className="bg-[#2e2e30] border-b-[1px] border-b-solid border-b-[#ffffff1c] flex items-center justify-between px-[22px] py-[7px] pr-[10px] w-[100%]">
            <div className="flex items-center justify-start gap-[10px] w-[100%]">
                <MauseEnterBar
                    pos="bottom"
                    event={
                        <button className="w-[28px] h-[28px] p-[5px] rounded-[6px] cursor-pointer duration-[0.2s] hover:bg-[#ffffff0f]" id={headerBurgerId}>
                            <svg viewBox="0 0 32 32" className='w-[100%] h-[100%]'>
                                <path d="M1,16h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,16.4,0.4,16,1,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z" className='fill-[#f5f4f3]' />
                            </svg>
                        </button>
                    }>
                    <div>Скрыть</div>
                </MauseEnterBar>
                <CallModal
                    width={183}
                    pos="right"
                    event={
                        <button
                            className="flex items-center gap-[5px] border-[1px] border-solid border-[#6a696a] select-none p-[6px] pr-[8px] rounded-[30px] cursor-pointer relative duration-[0.2s] overflow-hidden before:content-[''] before:absolute before:top-[0] before:left-[0] before:w-[100%] before:h-[100%] before:bg-[transparent] before:duration-[0.2s] hover:before:bg-[#ffffff3b]">
                            <svg viewBox="0 0 24 24" className='w-[20px] h-[20px] bg-[#fe2046] rounded-[50%] p-[3px]'>
                                <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z" className='fill-[#f5f4f3]' />
                            </svg>
                            <p className='font-roboto text-[14px] text-[#f5f4f3] font-[400] leading-[22px]'>Создать</p>
                        </button>
                    }>
                    <CallItem imgSrc={
                        <svg viewBox="0 0 40 40" width="20" hanging="20">
                            <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z" fill="#a2a0a2" />
                        </svg>
                    } text="Задача" />
                    <CallItem imgSrc={
                        <svg viewBox="0 0 32 32" width="20" hanging="20">
                            <path d="M10,13.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,15.8,8.5,15S9.2,13.5,10,13.5z M23,14h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,14,23,14z M23,20h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,20,23,20z M10,19.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,21.8,8.5,21S9.2,19.5,10,19.5z M24,2h-2.2c-0.4-1.2-1.5-2-2.8-2h-6c-1.3,0-2.4,0.8-2.8,2H8C4.7,2,2,4.7,2,8v18c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M13,2h6c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1V3C12,2.4,12.4,2,13,2z M28,26c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V8c0-2.2,1.8-4,4-4h2v1c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V4h2c2.2,0,4,1.8,4,4V26z" fill="#a2a0a2" />
                        </svg>
                    } text="Проект" />
                    <CallItem imgSrc={
                        <svg viewBox="0 0 32 32" width="20" hanging="20">
                            <path d="M5,31c-0.1,0-0.3,0-0.4-0.1C4.2,30.7,4,30.4,4,30v-7.1c-2.5-2.3-4-5.5-4-8.9C0,7.4,5.4,2,12,2h8c6.6,0,12,5.4,12,12 s-5.4,12-12,12h-8c-0.1,0-0.3,0-0.4,0l-5.9,4.8C5.4,30.9,5.2,31,5,31z M12,4C6.5,4,2,8.5,2,14c0,3,1.3,5.8,3.6,7.7C5.9,21.9,6,22.2,6,22.5v5.4l4.6-3.7C10.8,24,11,24,11.3,24h0.1c0.2,0,0.4,0,0.6,0h8c5.5,0,10-4.5,10-10S25.5,4,20,4 C20,4,12,4,12,4z" fill="#a2a0a2" />
                        </svg>
                    } text="Сообщение" />
                    <hr className='my-[4px] border-[#424244]' />
                    <CallItem imgSrc={
                        <svg viewBox="0 0 32 32" width="20" height="20">
                            <path d="M31,26h-3v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S31.6,26,31,26z M16,18c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S11.6,18,16,18z M16,4c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S12.7,4,16,4z M21.2,20H8.8C5,20,2,23,2,26.8V31c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.2C4,24.2,6.2,22,8.8,22h12.4c0.6,0,1-0.4,1-1S21.8,20,21.2,20z" fill="#a2a0a2" />
                        </svg>
                    } text="Пригласить" />
                </CallModal>
            </div>
            <div className="flex items-center justify-center gap-[5px] bg-[#3d3e40] rounded-[16px] border-[1px] border-solid border-[#6a696a] px-[16px] h-[32px] caret-white w-[100%] outline outline-[3px] outline-[transparent] focus-within:outline-[#FFF] duration-[0.2s]" id="git">
                <label htmlFor="search" className='cursor-pointer'>
                    <svg viewBox="0 0 50 50" className='w-[16px] h-[16px]'>
                        <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z" stroke='#a2a0a2' fill='#a2a0a2' />
                    </svg>
                </label>
                <input type="input" placeholder='Поиск...' id="search" className='bg-[transparent] w-[100%] h-[100%] border-[1px] border-solid border-[transparent] outline-none font-roboto text-[14px] leading-[22px] select-none text-[#a2a0a2] group' />
            </div>
            <div className="flex items-center justify-end gap-[8px] w-[100%]">
                <div className="flex items-center gap-[12px]">
                    <p className='font-roboto text-[12px] leading-[18px] text-[#f5f4f3]'>27 days left in trial</p>
                    <button className='font-roboto bg-[#f1bd6c] px-[8px] rounded-[6px] text-[12px] cursor-pointer text-[#1e1f21] leading-[26px]'>Добавить платежные данные</button>
                </div>
                <MauseEnterBar
                    pos="bottom"
                    event={
                        <CallModal
                            width={240}
                            pos="bottom-left"
                            event={
                                <button className="flex items-center justify-center cursor-pointer gap-[3px]">
                                    <img className='w-[28px] h-[28px] bg-[#cd95ea] rounded-[50%] object-cover' src="/assets/img/user.png" />
                                    <svg viewBox="0 0 24 24" width="12" height="20">
                                        <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" fill="#a2a0a2" />
                                    </svg>
                                </button>
                            }>
                            <div className="flex bg-[#3d3120] mt-[4px] px-[16px] py-[4px] items-center justify-center gap-[3px]">
                                <p className='font-roboto text-[14px] leading-[30px] text-[#f1bd6c]'>26 days left in trial.</p>
                                <Link className='text-[#a2a0a2] font-roboto text-[14px] cursor-pointer'>Подробнее</Link>
                            </div>
                            <div className="flex flex-col items-center px-[12px] py-[16px]">
                                <img src="/assets/img/user.png" className='w-[48px] h-[48px] object-cover rounded-[50%] mb-[8px] bg-[#cd95ea]' />
                                <h1 className='font-roboto text-[16px] leading-[20px] font-500 text-center text-[#f5f4f3]'>My workspace</h1>
                                <h2 className='font-roboto text-[12px] leading-[18px] font-400 text-center text-[#a2a0a2]'>dior9054@gmail.com</h2>
                            </div>
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M25,4c-2.4,0-4.4,1.7-4.9,4H4C3.4,8,3,8.4,3,9s0.4,1,1,1h16.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5S27.8,4,25,4z M25,12c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S26.7,12,25,12z M27,20H11.9c-0.5-2.3-2.5-4-4.9-4c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.4,0,4.4-1.7,4.9-4H27c0.6,0,1-0.4,1-1S27.6,20,27,20z M7,24c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.7,24,7,24z" fill="#a2a0a2" />
                                </svg>
                            } text="Консоль администратора" />
                            <CallItem imgSrc={
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#a2a0a2" />
                                </svg>
                            } text="Новое рабочее пространство" />
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M31,26h-3v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S31.6,26,31,26z M16,18c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S11.6,18,16,18z M16,4c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S12.7,4,16,4z M21.2,20H8.8C5,20,2,23,2,26.8V31c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.2C4,24.2,6.2,22,8.8,22h12.4c0.6,0,1-0.4,1-1S21.8,20,21.2,20z" fill="#a2a0a2" />
                                </svg>
                            } text="Пригласить в Asana" />
                            <hr className='my-[4px] border-[#424244]' />
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M16 0C24.8363 0 32 7.16372 32 16C32 24.8363 24.8363 32 16 32C7.16372 32 0 24.8363 0 16C0 7.16372 7.16372 0 16 0ZM19.8647 22.5138H12.1353C10.084 22.5138 8.42785 23.9825 8.2934 25.8105L8.28458 26.0508L8.2844 27.7311C10.4985 29.1903 13.1501 30.0395 16 30.0395C18.8506 30.0395 21.5028 29.1899 23.7172 27.73L23.7154 26.0508C23.7154 24.113 22.0052 22.5138 19.8647 22.5138ZM16 1.96047C8.24645 1.96047 1.96047 8.24645 1.96047 16C1.96047 20.0034 3.63627 23.6155 6.32462 26.1731L6.32411 26.0508C6.32411 23.0982 8.77435 20.7118 11.828 20.5609L12.1353 20.5534H19.8647C22.9565 20.5534 25.5065 22.8445 25.6678 25.7575L25.6759 26.0508L25.677 26.1716C28.3644 23.614 30.0395 20.0026 30.0395 16C30.0395 8.24645 23.7535 1.96047 16 1.96047ZM16.1897 4.74308C20.2231 4.74308 23.4941 8.0141 23.4941 12.0474C23.4941 16.0808 20.2231 19.3518 16.1897 19.3518C12.1564 19.3518 8.88537 16.0808 8.88537 12.0474C8.88537 8.0141 12.1564 4.74308 16.1897 4.74308ZM16.1897 6.70356C13.2391 6.70356 10.8458 9.09684 10.8458 12.0474C10.8458 14.998 13.2391 17.3913 16.1897 17.3913C19.1403 17.3913 21.5336 14.998 21.5336 12.0474C21.5336 9.09684 19.1403 6.70356 16.1897 6.70356Z" fill="#a2a0a2" />
                                </svg>
                            } text="Профиль" />
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S18.8,21,16,21z M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z M16.1,32H16c-1.6,0-3-0.9-3.6-2.4l-1.2-2.8c-0.4-0.8-1.2-1.3-2-1.2L6,26c-1.6,0.2-3.1-0.6-3.9-2L2,23.9c-0.8-1.4-0.7-3.1,0.2-4.3 L4,17.2c0.5-0.7,0.5-1.6,0-2.3l-1.8-2.4c-0.9-1.3-1-3-0.2-4.3l0.1-0.1C3,6.6,4.5,5.8,6,6l3,0.3c0.9,0.1,1.7-0.4,2-1.2l1.2-2.7 C12.9,0.9,14.4,0,15.9,0H16c1.6,0,3,0.9,3.7,2.4l1.2,2.7c0.4,0.8,1.2,1.3,2,1.2L26,6c1.6-0.2,3.1,0.6,3.9,2l0,0 c0.8,1.4,0.7,3.1-0.2,4.3l-1.8,2.4c-0.5,0.7-0.5,1.6,0,2.3l1.8,2.5c0.9,1.3,1,3,0.2,4.3L29.8,24c-0.8,1.4-2.3,2.1-3.9,2l-3-0.3 c-0.9-0.1-1.7,0.4-2,1.2l-1.2,2.8C19.1,31.1,17.6,32,16.1,32z M9.2,23.7c1.6,0,3,0.9,3.6,2.4l1.2,2.8c0.3,0.7,1,1.2,1.8,1.2h0.1 c0.8,0,1.5-0.5,1.8-1.2l1.2-2.8c0.7-1.6,2.3-2.5,4.1-2.3l3,0.3c0.8,0.1,1.5-0.3,1.9-1L28,23c0.4-0.7,0.4-1.5-0.1-2.2l-1.8-2.5 c-1-1.4-1-3.3,0-4.7l1.8-2.4c0.5-0.6,0.5-1.5,0.1-2.2l-0.1-0.1c-0.4-0.7-1.1-1.1-1.9-1l-3,0.3c-1.7,0.2-3.3-0.8-4-2.3l-1.2-2.7 C17.5,2.5,16.8,2,16,2h-0.1c-0.8,0-1.5,0.5-1.8,1.2l-1.2,2.7c-0.7,1.6-2.3,2.5-4,2.3L5.8,8C5,7.9,4.3,8.3,3.9,9L3.8,9.1 C3.5,9.7,3.5,10.6,4,11.2l1.8,2.4c1,1.4,1,3.3,0,4.7L4,20.8c-0.5,0.6-0.5,1.5-0.1,2.2L4,23.1c0.4,0.7,1.1,1.1,1.9,1l3-0.3 C9,23.7,9.1,23.7,9.2,23.7z" fill="#a2a0a2" />
                                </svg>
                            } text="Настройки" />
                            <CallItem imgSrc={
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#a2a0a2" />
                                </svg>
                            } text="Add another account" />
                            <hr className='my-[4px] border-[#424244]' />
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M3.95,14.5 L24.35,14.5 L16.95,7.1 C16.35,6.5 16.35,5.6 16.95,5 C17.55,4.4 18.45,4.4 19.05,5 L29.05,15 C29.65,15.6 29.65,16.5 29.05,17.1 L19.05,27.1 C18.75,27.4 18.35,27.5 17.95,27.5 C17.55,27.5 17.15,27.4 16.85,27.1 C16.25,26.5 16.25,25.6 16.85,25 L24.25,17.6 L3.95,17.6 C3.15,17.6 2.45,16.9 2.45,16.1 C2.45,15.3 3.15,14.5 3.95,14.5 Z" fill="#a2a0a2" />
                                </svg>
                            } text="Выход" />
                        </CallModal>
                    }>
                    <div>dior9054</div>
                </MauseEnterBar>
            </div >
        </div >
    )
}

