
import AssideItem from "../asside__item/AssideItem";

function AssideTop() {
    return (
        <>
            <AssideItem
                link="#"
                text="Главная"
                img_src="/assets/svg/home.svg"
                inbox={false}
            />
            <AssideItem
                link="#"
                text="My tasks"
                img_src="/assets/svg/task.svg"
                inbox={false}
            />
            <AssideItem
                link="#"
                text="Входящие"
                img_src="/assets/svg/bell.svg"
                inbox={true}
            />
        </>
    );
}

export default AssideTop;
