
export default function AnaliticoMain() {
    return (
        <div className="py-[20px] flex flex-col items-center overflow-y-auto w-[100%] h-[100%] main__right__scrollbar gap-[20px]">
            <div className="max-w-[600px] text-center flex flex-col items-center gap-[20px]">
                <h2 className="text-[24px] text-center leading-[32px] font-[500] font-roboto text-[#f5f4f3]">Всесторонний контроль работы коллектива</h2>
                <h4 className="text-[16px] leading-[24px] font-roboto text-[#f5f4f3]">Получайте аналитическую информацию с помощью диаграмм на основе данных в реальном времени по группам, проектам и даже подразделениям. Asana поможет настроить вашу первую панель мониторинга.</h4>
                <button className="font-roboto cursor-pointer bg-[#4573d2] text-[#FFF] leading-[36px] rounded-[6px] px-[12px]">Начать работу</button>
            </div>
            <video className="w-[850px] h-[360px]" src="/assets/video/Analitivo.mp4" autoPlay muted loop />
        </div>
    )
}
