import ReactDOM from "react-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {type Swiper as SwiperType} from "swiper"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs,} from "swiper/modules";
import {Carousel} from "@material-tailwind/react";
import {useState} from "react";
import FullPageSlider from "./fullPageSlider.tsx";
import Form from "./form.tsx";
interface IItem  {

        id: string,
        img?:string,
        title:string,
        description:string,
        category:string[],
        date: Date | string,
        floors?: string,
        square?: string,
    deadlines?: string,
    catalog?: string[],
    location?: string,
}
function  ModalCardFull({
                       isOpen,
                       onClose, item,
                   }: {
    isOpen: boolean;
    onClose: () => void;
    item: IItem
}) {
    const refactorDate = item.date = new Date(item.date)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const [isOpenFullImage, setIsOpenFullImage] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<string | null>(null)
    if (!isOpen) return null;
    return (
        ReactDOM.createPortal(
            <div onClick={() => onClose()} className={'cardFull fixed top-0 flex pt-14 sm:pt-20 justify-center items-start 2xl:items-center w-screen h-screen bg-[#434248] bg-opacity-70 backdrop-blur-sm overflow-y-scroll'}>

                <div className={'relative w-full max-w-[1315px] bg-white md:flex md:flex-row'}>
                   <div className={'z-50 absolute right-0 m-4 cursor-pointer hover:scale-110'} >
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={onClose}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg></div>
                    <div onClick={e => e.stopPropagation()} className={'relative w-full h-fit max-w-[1315px] md:flex md:flex-row'}>
                        <Carousel placeholder={''} className={'w-full md:hidden'}>
                            {item.catalog ?

                            item.catalog.map((item, index) => <img key={index} alt={''} onClick={() => {setIsOpenFullImage(true); setCurrentSlide(item)}} src={item} className={'w-full h-96 object-cover'}/>)
                            :
                            <img alt={''} src={item.img} className={'w-full h-[35vh] object-cover'}/>}
                        </Carousel>
                        {/*<Swiper  pagination={true} modules={[Pagination]} className="w-full md:hidden">*/}

                        {/*    {item.catalog ?*/}

                        {/*        item.catalog.map((item, index) => <SwiperSlide zoom={true} key={index}><img alt={''} onClick={() => setIsOpenFullImage(item)} src={item} className={'w-full h-96 object-cover'}/></SwiperSlide>)*/}
                        {/*        :*/}
                        {/*        <SwiperSlide zoom={true}><img alt={''} src={item.img} className={'w-full h-[35vh] object-cover'}/></SwiperSlide>}*/}

                        {/*</Swiper>*/}
                        <div className={'hidden h-fit relative md:flex flex-col px-5 py-10 w-1/2'}>
                            <Swiper
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                     spaceBetween={10}
                                     navigation={true}
                                     modules={[FreeMode, Navigation, Thumbs]}
                                     className="mySwiper2">
                                {item.catalog ?

                                    item.catalog.map((item, index) => <SwiperSlide key={index}><img alt={''} draggable={false} onClick={() => {setIsOpenFullImage(true); setCurrentSlide(item)}} src={item} className={'cursor-zoom-in object-cover'}/></SwiperSlide>)
                                    :
                                    <SwiperSlide><img alt={''} src={item.img} draggable={false} className={'cursor-zoom-in select-none object-cover'}/></SwiperSlide>}

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {item.catalog ?

                                item.catalog.map((item, index) => <SwiperSlide key={index}><img alt={''} src={item} className={'cursor-pointer object-cover'}/></SwiperSlide>)
                                :
                                <SwiperSlide><img alt={''} src={item.img} className={'cursor-pointer select-none object-cover'}/></SwiperSlide>}

                            </Swiper>
                        </div>
                        <div></div>
                    <div className={'md:min-w-[300px] md:w-1/2 pt-5 md:pt-10 px-5 pb-10 flex flex-col justify-between relative'}>
                    <div className={'gap-5 xl:gap-[30px] flex flex-col'}>
                        <div className={'space-y-5'}>
                            <div className={'flex flex-col space-y-5'}>
                                <a className={'font-regular text-2xl xl:text-4xl text-[#2F2E33]'}>{item.title}</a>
                            <a className="text-[#9C9F91] font-thin text-lg">
                            {refactorDate.toLocaleString("ru-RU", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                            })}
                            </a></div>
                        <div className={'flex flex-row flex-wrap gap-2'}>
                            {item.category.map((item, index) => <div key={index}
                                className={'px-2.5 pt-1 pb-0.5 flex items-center justify-center bg-white rounded-2xl border border-[#9C9F91]'}>
                                <a className={'text-[#9C9F91] font-thin text-lg'}>{item}</a></div>)}
                        </div>
                    </div>

                    <figure className={'bg-[#d9d9d9] h-0.5 relative'}/>
                        <a className={'font-thin text-lg md:text-xl text-[#2f2e33] leading-loose tracking-tight'}>
                            {item.description}
                        </a>
                        <a className={'font-thin text-lg md:text-xl text-[#2f2e33] leading-loose tracking-tight'}>
                            Этажность: {item.floors}<br/>
                            Площадь: {item.square}<br/>
                            Срок поставки и сборки: {item.deadlines}<br/>
                            Адрес: {item.location}
                        </a></div>
                        <a onClick={() => setIsOpenForm(true)} className={'mt-10 mb-2.5 font-medium cursor-pointer rounded-none text-[16px] ultraXl:text-[18px] px-6 py-5 tracking-[0.32px] ultraXl:tracking-wider bg-[#3A5199] text-[#D5D6D2] flex-col justify-center uppercase text-center transition duration-200 hover:bg-[#D5D6D2] hover:text-[#3A5199]'}>ЗАКАЗАТЬ ПРОЕКТ</a>
                    </div>

                    </div>

                </div>
                {isOpenFullImage && currentSlide && item.catalog ? <FullPageSlider images={item.catalog} image={currentSlide} handleClose={setIsOpenFullImage}/> : null}
                {isOpenForm && ReactDOM.createPortal(<div onClick={(e) => {e.stopPropagation(); setIsOpenForm(false)}} className={'z-50 top-0 fixed w-full min-w-screen h-screen flex flex-col justify-center items-center bg-gray-700/50'}><Form closeForm={setIsOpenForm} subject={item.title}/></div>, document.body)}
            </div>
    , document.body));
}

export default ModalCardFull;