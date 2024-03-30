import {Link, useParams} from "react-router-dom";
import NewsCardFull from "./newsCardFull.tsx";
import news from "../../../../content/news.ts";

function CurrentEvents() {
    const {id} = useParams()

    const item = news.find((element) =>  element.id === id)

    return (
        item ?

        <div id='currentEvents' className={'pt-16 pb-[45px] md:pt-40 md:px-10 md:pb-20 m-auto gap-y-5 gap-x-5 flex flex-row justify-between max-w-[1728px]'}>
            <div className={'hidden lg:flex flex-col gap-y-7'}>
                <Link to={'/news'}>
                    <div className={'flex flex-row gap-x-3 px-2 items-center hover:cursor-pointer'}>
                        <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.25 24.375L3.5 15M3.5 15L12.25 5.625M3.5 15H24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h4 className={'text-white text-2xl font-normal leading-9 tracking-wide'}>Все статьи</h4>
                    </div>
                </Link>
                <div className={'max-w-[506px] bg-white px-5 pt-12 pb-10 space-y-8'}>
                    <h4 className={'text-[#2F2E33] text-3xl leading-9 tracking-wide'}>Последние статьи</h4>
                    <figure className={'h-1 w-full bg-base-zinc'}/>
                    <div className={'flex flex-col'}>
                        {news.map(news => <Link key={news.id} to={`/news/${news.id}`} className={'px-5 py-3 font-regular text-2xl text-[#707368] border-b border-[#D9D9D9] leading-10 last:border-none'}>{news.title}</Link>)}
                    </div>
                    </div>
            </div>

            <NewsCardFull id={item.id} title={item.title} text={item.text} source={item.source} date={item.date} cover={item.images} smallDescription={item.smallDescription} underTitlePhoto={item.underTitlePhoto}></NewsCardFull>
        </div>
             :
            <div className={' min-h-screen flex flex-row justify-center items-center'}>
                <a className={'text-white text-2xl'}>Статья не найдена:(</a>
            </div>

    );
}

export default CurrentEvents;