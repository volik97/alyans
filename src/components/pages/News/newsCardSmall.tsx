import {Link} from "react-router-dom";
import {scroller} from "react-scroll";

function NewsCardSmall(item: {title: string, text: string, source: string[], date: Date, cover: string, id: string, smallDescription: string}) {

    return (
        <Link to={item.id} onClick={() => setTimeout(() => {
        scroller.scrollTo('currentEvents', { smooth: false });
    })}>
        <div className={'bg-white grid lg:grid-rows-none lg:grid-cols-2 max-h-[397px] max-w-[1639px] overflow-clip transition duration-200 hover:cursor-pointer hover:shadow-card-news hover:scale-[1.003]'}>
            <div className={'flex flex-col gap-y-4 py-[40px] px-5 md:py-[60px] md:px-10 justify-between'}>

                <h3 className={'text-lg sm:text-2xl md:text-4xl font-bold leading-10'}>{item.title}</h3>

                    <div>

                    <div className={'flex w-full h-full flex-col gap-y-4'}>
                        <p className={'items-text text-base md:text-xl font-light leading-9 tracking-tight'}>{item.smallDescription}</p>
                        <figure className={'h-px bg-[#D9D9D9] w-full'}/>
                        <div onClick={event => event.stopPropagation()} className={'flex flex-row justify-between items-center'}>
                            <a target='_blank' href={item.source[1]} className={'hover:text-base-zinc transition duration-200 cursor-pointer text-base sm:text-2xl text-[#9C9F91] font-normal'}>{item.source[0]}</a>
                            <a className={'text-base sm:text-2xl text-[#9C9F91] font-light tracking-wide'}>{item.date.toLocaleString("ru-RU", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                            })}</a>
                        </div>
                    </div>
                </div>
            </div>
            <img alt={item.title} src={item.cover} className={'hidden lg:block object-cover w-full h-[397px]'}/>
        </div>
        </Link>
    );
}

export default NewsCardSmall;