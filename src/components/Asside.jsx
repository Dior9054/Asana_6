
import { useContext } from "react";
import CallItem from "./callModal/callItem/CallItem";
import AssideBtn from "./AssideBtn";
import AssideItem from "./AssideItem";
import { AssideWidthBtn } from "./Layout";

export default function Asside() {
    const assideWidthId = useContext(AssideWidthBtn)

    return (
        <div className="bg-[#2e2e30] w-[240px] h-[100%] flex flex-col duration-[0.2s]" id={assideWidthId}>
            <div className="p-[12px] border-b-[1px] border-b-solid border-b-[#ffffff1c]">
                <AssideItem
                    link="/"
                    text="Главная"
                    img_src={
                        <svg viewBox="0 0 40 40" width="20" height="20" >
                            <path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z" fill="#a2a0a2" />
                        </svg>
                    }
                    inbox={false}
                />
                <AssideItem
                    link="/mytask"
                    text="My tasks"
                    img_src={
                        <svg viewBox="0 0 40 40" width="20" height="20" >
                            <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z" fill="#a2a0a2" />
                        </svg>
                    }
                    inbox={false}
                />
                <AssideItem
                    link="/inbox"
                    text="Входящие"
                    img_src={
                        <svg viewBox="0 0 40 40" width="20" height="20">
                            <path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z" fill="#a2a0a2" />
                        </svg>
                    }
                    inbox={true}
                />
            </div>
            <div className="px-[3px] py-[12px] pr-[12px] w-[100%] max-h-[100%] min-h-[1px] overflow-y-auto asside__scrollBar flex flex-col gap-[10px]">
                <AssideBtn
                    title="Аналитика"
                    text="New insights"
                    section={false}
                    width={183}
                    clickElem={
                        <>
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
                        </>
                    }>
                    <AssideItem
                        link="/analitic"
                        text="Отчёты"
                        img_src={
                            <svg viewBox="0 0 40 40" width="20" height="20">
                                <path d="M34.5,6c-2.48,0-4.5,2.02-4.5,4.5,0,1.13.43,2.14,1.11,2.93l-4.28,7.55s-.03.06-.04.09c-.26-.05-.52-.08-.79-.08-.85,0-1.64.25-2.32.66l-4.46-3.65c.17-.48.28-.98.28-1.51,0-2.48-2.02-4.5-4.5-4.5s-4.5,2.02-4.5,4.5c0,.94.29,1.81.79,2.54l-4.51,6.17c-.41-.12-.83-.21-1.28-.21-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5c0-.94-.29-1.81-.79-2.54l4.51-6.17c.41.12.83.21,1.28.21.85,0,1.64-.25,2.32-.66l4.46,3.65c-.17.48-.28.98-.28,1.51,0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5c0-1.13-.43-2.15-1.12-2.94.02-.03.05-.06.07-.09l4.27-7.54c.26.05.51.08.78.08,2.48,0,4.5-2.02,4.5-4.5s-2.02-4.5-4.5-4.5ZM5.5,31c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm9.5-13c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm11,9c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm8.5-15c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Z" fill="#a2a0a2" />
                            </svg>
                        }
                        inbox={false}
                    />
                    <AssideItem
                        link="/portfel"
                        text="Портфели"
                        img_src={
                            <svg viewBox="0 0 29 29" width="20" height="20">
                                <path d="M24 25H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h4.559c1.293 0 2.437.824 2.846 2.051l.089.266a.997.997 0 0 0 .947.683H24c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM5 6c-.552 0-1 .449-1 1v15c0 .551.448 1 1 1h19c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.441a2.996 2.996 0 0 1-2.846-2.051l-.089-.266A.997.997 0 0 0 9.559 6H5z" fill="#a2a0a2" />
                                <path d="M24 25H5c-1.654 0-3-1.346-3-3V12a1 1 0 0 1 1-1h23a1 1 0 0 1 1 1v10c0 1.654-1.346 3-3 3zM4 13v9c0 .551.448 1 1 1h19c.552 0 1-.449 1-1v-9H4z" fill="#a2a0a2" />
                            </svg>
                        }
                        inbox={false}
                    />
                    <AssideItem
                        link="/d"
                        text="Цели"
                        img_src={
                            <svg viewBox="0 0 40 40" width="20" height="20">
                                <path d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z" fill="#a2a0a2" />
                            </svg>
                        }
                        inbox={false}
                    />
                </AssideBtn>
                <AssideBtn
                    title="Starred"
                    text="Add items to starred"
                    section={false}
                    width="300px"
                    clickElem={<h1 className="font-roboto text-[12px] leading-[18px] font-500 text-[#a2a0a2] mx-[12px] mt-[8px] mb-[4px]">Недавно посещённые</h1>}>
                    <div className="flex items-center justify-center gap-[10px]">
                        <svg viewBox="0 0 32 32" width="18px" height="18px">
                            <path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z" fill="#a2a0a2" />
                        </svg>
                        <p className="font-roboto text-[14px] leading-normal text-[#a2a0a2]">Starred items appear here</p>
                    </div>
                </AssideBtn>
                <AssideBtn
                    title="Проекты"
                    text="New project or portfolio"
                    section={true}
                    width="183px"
                    clickElem={
                        <>
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M10,13.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,15.8,8.5,15S9.2,13.5,10,13.5z M23,14h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,14,23,14z M23,20h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,20,23,20z M10,19.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,21.8,8.5,21S9.2,19.5,10,19.5z M24,2h-2.2c-0.4-1.2-1.5-2-2.8-2h-6c-1.3,0-2.4,0.8-2.8,2H8C4.7,2,2,4.7,2,8v18c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M13,2h6c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1V3C12,2.4,12.4,2,13,2z M28,26c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V8c0-2.2,1.8-4,4-4h2v1c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V4h2c2.2,0,4,1.8,4,4V26z" fill="#a2a0a2" />
                                </svg>
                            } text="Новый проект" link={true} path="/new" />
                            <CallItem imgSrc={
                                <svg viewBox="0 0 32 32" width="20" height="20">
                                    <path d="M16 0C24.8363 0 32 7.16372 32 16C32 24.8363 24.8363 32 16 32C7.16372 32 0 24.8363 0 16C0 7.16372 7.16372 0 16 0ZM19.8647 22.5138H12.1353C10.084 22.5138 8.42785 23.9825 8.2934 25.8105L8.28458 26.0508L8.2844 27.7311C10.4985 29.1903 13.1501 30.0395 16 30.0395C18.8506 30.0395 21.5028 29.1899 23.7172 27.73L23.7154 26.0508C23.7154 24.113 22.0052 22.5138 19.8647 22.5138ZM16 1.96047C8.24645 1.96047 1.96047 8.24645 1.96047 16C1.96047 20.0034 3.63627 23.6155 6.32462 26.1731L6.32411 26.0508C6.32411 23.0982 8.77435 20.7118 11.828 20.5609L12.1353 20.5534H19.8647C22.9565 20.5534 25.5065 22.8445 25.6678 25.7575L25.6759 26.0508L25.677 26.1716C28.3644 23.614 30.0395 20.0026 30.0395 16C30.0395 8.24645 23.7535 1.96047 16 1.96047ZM16.1897 4.74308C20.2231 4.74308 23.4941 8.0141 23.4941 12.0474C23.4941 16.0808 20.2231 19.3518 16.1897 19.3518C12.1564 19.3518 8.88537 16.0808 8.88537 12.0474C8.88537 8.0141 12.1564 4.74308 16.1897 4.74308ZM16.1897 6.70356C13.2391 6.70356 10.8458 9.09684 10.8458 12.0474C10.8458 14.998 13.2391 17.3913 16.1897 17.3913C19.1403 17.3913 21.5336 14.998 21.5336 12.0474C21.5336 9.09684 19.1403 6.70356 16.1897 6.70356Z" fill="#a2a0a2" />
                                </svg>
                            } text="New portfolio" />
                        </>
                    }>
                </AssideBtn>
                <AssideBtn
                    title="Группа"
                    section={true}>
                </AssideBtn>
            </div>
            <div className="border-t-[1px] border-t-solid border-t-[#ffffff1c] py-[8px] flex items-center justify-evenly mt-auto">
                <button className="flex items-center gap-[4px] rounded-[6px] px-[12px] cursor-pointer duration-[0.2s] hover:bg-[#ffffff0f] mx-[3px]">
                    <svg width="20" height="20" viewBox="0 0 40 40">
                        <path d="M27.8284 11.1891C27.8284 15.5115 24.3237 19.0189 20.0014 19.0189C15.6762 19.0189 12.1716 15.5142 12.1716 11.1891C12.1716 6.86402 15.6762 3.35938 20.0014 3.35938C24.3237 3.35938 27.8284 6.86402 27.8284 11.1891ZM9.82975 20.975C5.50736 20.975 2 24.4796 2 28.802C2 33.1244 5.50464 36.6318 9.82975 36.6318C14.1549 36.6318 17.6595 33.1271 17.6595 28.802C17.6595 24.4796 14.1549 20.975 9.82975 20.975ZM30.1703 20.975C25.8451 20.975 22.3405 24.4796 22.3405 28.8047C22.3405 33.1298 25.8451 36.6345 30.1703 36.6345C34.4926 36.6345 38 33.1298 38 28.8047C38 24.4796 34.4954 20.975 30.1703 20.975Z" fill="#F06A6A" />
                    </svg>
                    <p className="font-robot text-[14px] font-500 leading-[32px] text-[#f5f4f3]">Пригласить</p>
                </button>
                <span className="h-[24px] w-[1px] bg-[#6a696a]"></span>
                <button className="flex items-center gap-[4px] rounded-[6px] px-[12px] cursor-pointer duration-[0.2s] hover:bg-[#ffffff0f] mx-[3px]">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 10.9895H2.11478C2.20673 9.74373 3.11599 8.9554 4.52584 8.9554C5.92548 8.9554 6.83474 9.734 6.83474 10.8046C6.83474 11.7875 6.39543 12.3423 5.15926 13.0528C3.75962 13.8508 3.13642 14.7268 3.1875 16.1282L3.19772 16.8679H5.3125V16.284C5.3125 15.301 5.69051 14.7852 7.00841 14.0455C8.35697 13.2766 9.15385 12.2158 9.15385 10.717C9.15385 8.60503 7.33534 7.07703 4.63822 7.07703C1.67548 7.07703 0.0919471 8.75101 0 10.9895ZM4.38281 21.4616C5.32272 21.4616 5.95613 20.868 5.95613 19.9823C5.95613 19.0772 5.32272 18.4835 4.38281 18.4835C3.44291 18.4835 2.79928 19.0772 2.79928 19.9823C2.79928 20.868 3.44291 21.4616 4.38281 21.4616Z M11.0542 5.05424C10.5177 5.5907 10.2163 6.3183 10.2163 7.07697H9.39903C9.39903 6.3183 9.09765 5.5907 8.56119 5.05424C8.02472 4.51778 7.29712 4.2164 6.53845 4.2164V3.39909C7.29712 3.39909 8.02472 3.09771 8.56119 2.56125C9.09765 2.02478 9.39903 1.29719 9.39903 0.538513H10.2163C10.2163 1.29719 10.5177 2.02478 11.0542 2.56125C11.5906 3.09771 12.3182 3.39909 13.0769 3.39909V4.2164C12.3182 4.2164 11.5906 4.51778 11.0542 5.05424Z M15.3821 10.6896C14.9529 11.1188 14.7118 11.7009 14.7118 12.3078H14.058C14.058 11.7009 13.8169 11.1188 13.3877 10.6896C12.9585 10.2604 12.3765 10.0193 11.7695 10.0193V9.36549C12.3765 9.36549 12.9585 9.12438 13.3877 8.69521C13.8169 8.26604 14.058 7.68396 14.058 7.07703H14.7118C14.7118 7.68396 14.9529 8.26604 15.3821 8.69521C15.8113 9.12438 16.3934 9.36549 17.0003 9.36549V10.0193C16.3934 10.0193 15.8113 10.2604 15.3821 10.6896Z" fill="#a499ed" />
                    </svg>
                    <p className="font-robot text-[14px] font-500 leading-[32px] text-[#f5f4f3]">Справка</p>
                </button>
            </div>
        </div>
    );
}
