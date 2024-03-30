import ReactDOM from "react-dom";
import {useState} from "react";
import {type Swiper as SwiperType} from "swiper"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs,} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function FullPageSlider({image,  handleClose, images}: {images: string[], image?: string, handleClose: (a:boolean) => void}) {
    const indexCurrentSlide = image && images.indexOf(image);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    return ReactDOM.createPortal(
             <div onClick={(event) => {event.stopPropagation(); handleClose(false)}}  className={'fixed top-0 w-screen h-screen bg-black z-50 flex flex-row items-center justify-center'}>
                 <div onClick={(event) => event.stopPropagation()} className={'relative md:flex flex-col w-full px-5 py-10 gap-y-2.5 '}>
                     <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="#fff"
                         className="h-9 w-9 self-end"
                         viewBox="0 0 24 24"
                         stroke="#fff"
                         strokeWidth={2}
                         onClick={() => handleClose(false)}
                     >
                         <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             d="M6 18L18 6M6 6l12 12"
                         />
                     </svg>
                     <Swiper
                         thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                         initialSlide={indexCurrentSlide ? indexCurrentSlide : 0}
                         spaceBetween={10}
                         navigation={true}
                         modules={[FreeMode, Navigation, Thumbs]}
                         className='h-[65vh]'>
                         {images.map((item, index) => <SwiperSlide className={''} key={index}><a href={item} target={'_blank'}><img alt={''} draggable={false} src={item} className={''}/></a></SwiperSlide>)}
                     </Swiper>
                     <Swiper
                         onSwiper={setThumbsSwiper}
                         spaceBetween={10}
                         slidesPerView={3}
                         freeMode={true}
                         watchSlidesProgress={true}
                         modules={[FreeMode, Navigation, Thumbs]}
                         className="mySwiper"
                     >
                         {images.map((item, index) => <SwiperSlide key={index}><img alt={''} src={item} className={''}/></SwiperSlide>)}
                     </Swiper>
                 </div>
             </div>, document.body);}

export default FullPageSlider;