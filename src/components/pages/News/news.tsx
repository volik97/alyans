import news from "../../../content/news.ts";
import NewsCardSmall from "./newsCardSmall.tsx";
import {sortByDateNews} from "../../../utils/sortByDate.ts";


function  News() {
    return (
        <div id='news' className="relative pt-20 lg:pt-32 xl:pt-20 ultraXl:pt-32">
            <div className="flex flex-col items-center first:items-start xl:first:items-center">
                <h1 className="text-[32px] lg:text-6xl xl:text-8xl pb-7 lg:pb-20 xl:pt-5 font-thin text-white px-2">Новости</h1>
                <div className={'flex flex-col gap-y-8 px-2'}>
                {news && sortByDateNews().map((item, index) => <NewsCardSmall key={index} smallDescription={item.smallDescription} id={item.id} title={item.title} text={item.text} source={item.source} date={item.date} cover={item.images[0]}/>)}
                </div>
                </div>
        </div>
    );
}

export default News;