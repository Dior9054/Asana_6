
export default function PortfolioMain() {
    return (
        <div className="py-[20px] flex flex-col items-center overflow-y-auto w-[100%] h-[100%] main__right__scrollbar gap-[20px]">
            <div className="max-w-[600px] text-center flex flex-col items-center gap-[20px]">
                <h2 className="text-[24px] text-center leading-[32px] font-[500] font-roboto text-[#f5f4f3]">Получайте общее представление о ситуации с помощью портфелей</h2>
                <h4 className="text-[16px] leading-[24px] font-roboto text-[#f5f4f3]">Отслеживайте статус и загрузку участников группы в нескольких проектах. Asana поможет вам настроить свой первый портфель.</h4>
                <button className="font-roboto cursor-pointer bg-[#4573d2] text-[#FFF] leading-[36px] rounded-[6px] px-[12px]">Исследовать портфели</button>
            </div>
            <video className="w-[720px] h-[480px]" src="/assets/video/Portfolio.mp4" autoPlay muted loop />
        </div>
    )
}
