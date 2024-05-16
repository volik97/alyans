import {Carousel} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import news from "../../../../content/news.ts";
import {scroller} from "react-scroll";

function NewsCardFull({smallDescription, date, source, text, title, cover, id, underTitlePhoto}: {
    smallDescription?: string,
    title: string,
    text: string,
    source: string[],
    date: Date,
    cover: string[],
    id: string,
    underTitlePhoto: string,
}) {
    return (
        <div>
            <Link to={'/news'} className={'lg:hidden'}>
                <div className={'flex flex-row gap-x-3 px-2 pb-6 items-center hover:cursor-pointer'}>
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 24.375L3.5 15M3.5 15L12.25 5.625M3.5 15H24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h4 className={'text-white text-2xl font-normal leading-9 tracking-wide'}>Все статьи</h4>
                </div>
            </Link>
            <div className={'w-full bg-white px-2 pt-5 pb-10 md:px-16 xl:px-[120px] md:pt-[60px] lg:pb-20 max-w-[1089px] m-auto'}>
                <div className={'flex flex-col gap-4 md:gap-10'}>
                    <h3 className={'text-2xl md:text-6xl font-bold text-zinc-800 leading-7'}>{title}</h3>
                    <div className={'flex flex-row gap-x-3 md:gap-x-5'}>
                        <figure className={'w-px h-11/12 bg-[#D9D9D9]'}></figure>
                        <h5 className={'text-zinc-800 text-lg md:text-2xl font-normal leading-relaxed tracking-tight'}>{smallDescription}</h5>
                    </div>
                    <div className={'space-y-3'}>
                        <Carousel placeholder={''}>
                        {cover.map((image, index) => <img key={index} alt={'photo'} className={'object-cover w-full h-max'} src={image}/>)}
                        </Carousel>
                        <a className={'text-base font-thin leading-9 tracking-tight text-[#707268]'}>Фото: {underTitlePhoto}</a>
                    </div>
                    <a className={'text-zinc-800 text-base md:text-xl font-thin leading-[34px] md:leading-[36px] md:tracking-[2%]'}>{text}</a>
                     <div className={'flex flex-row justify-between'}>
                         <Link to={`/news/${+id-1}`} onClick={() => scroller.scrollTo('currentEvents', {smooth: false})}>
                         <div className={`flex-row items-center gap-3 ${+id===1 ? 'hidden': 'flex'}`}>
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="24" height="24" fill="white"/>
                                 <path d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21" stroke="#6B6A6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                             <a className={'hidden md:block text-[#6B6A6D] text-xl md:text-2xl font-light leading-9 tracking-wide'}>Прошлая статья</a>
                         </div>
                         </Link>
                         <Link to={`/news/${+id+1}`}  onClick={() => scroller.scrollTo('currentEvents', {smooth: false})}>
                         <div className={`flex-row items-center gap-3 ${+id===news.length ? 'hidden' : 'flex'}`}>
                             <a className={'hidden md:block text-[#6B6A6D] text-xl md:text-2xl font-light leading-9 tracking-wide'}>Следующая статья</a>
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#6B6A6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                         </div></Link>
                     </div>
                    <figure className={'h-px w-full bg-[#D9D9D9]'}/>
                    <div className={'flex flex-row justify-between items-center'}>
                        <a target='_blank' href={source[1]} className={'hover:text-base-zinc transition duration-200 cursor-pointer text-base sm:text-2xl text-[#9C9F91] font-normal'}>{source[0]}</a>
                        <a className={'text-base sm:text-2xl text-[#9C9F91] font-light tracking-wide'}>{date.toLocaleString("ru-RU", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCardFull;