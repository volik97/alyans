import {v4 as uuidv4} from "uuid";
import {NavLink} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import projects from "../../../content/projects.ts";
import {categoryReducer} from "../../store/reducers/categoryReducer.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {scroller} from "react-scroll";
function NewTerritory() {
    const {setCategory} = categoryReducer.actions
    const dispatch = useAppDispatch()
    return (
        <div id='newTerritory' className="relative h-fit pt-20 lg:pt-32 xl:pt-20 ultraXl:pt-32 overflow-clip">
            <div className="flex flex-col items-center first:items-start xl:first:items-center">
                <h1 className="relative text-[32px] lg:text-6xl xl:text-8xl xl:pt-5 font-thin text-base-gray px-2 z-10">Новые территории</h1>
            </div>
            <div className={'relative pt-11 xl:pt-20 xl:pb-28 xl:px-11 max-w-[1726px] m-auto flex flex-col xl:flex-row justify-between gap-20 '}>
                <div className={'relative h-96 order-1 xl:order-2 xl:w-1/2'}>
                    <img alt={'mapRU'} src={'/Images/map.png'} className={'absolute h-96 object-left object-cover -right-36 sm:-right-52 sm:-top-6 lg:right-0 lg:object-center xl:object-left xl:top-20 xl:left-80 xl:scale-[2] z-10 scale-150'}/>
                    <img alt={'gradientBackground'} src={'/Images/gradient.png'} className={'absolute h-3/4 xl:h-full xl:-left-96 top-44 scale-[6] -rotate-[30deg] xl:-rotate-6 object-center object-cover'}/>
                </div>
                <div className={'relative xl:w-1/2 flex flex-col gap-10 px-4 order-2 xl:order-1'}>
                <p className={'xl:text-3xl text-xl text-base-gray font-thin leading-normal z-10'}>
                    Наша компания имеет более чем двадцатилетний опыт работы в строительстве модульных зданий и принимала участие в самых разнообразных проектах. Мы успешно реализовывали типовые общежития, штабы строительства, административные комплексы, а также выполняли необычные задачи, например, строительство лаборатории для испытания материалов или мини-отеля.
                </p>
                    <a className={'xl:text-3xl text-xl text-base-gray font-thin leading-normal z-10'}>
                        Мы работаем по всей России, включая Москву и область, Геленджик, Петербург и Ростов-на-Дону. Имеем многолетний опыт непосредственно на территориии республики Крым. Мы уверены, что вы останетесь довольны нашими услугами и станете нашим клиентом.
                    </a>
                    <NavLink key={uuidv4()} to="/moduls" className={'z-10'}>
                        <p

                            onClick={() => {
                                dispatch(setCategory('Новые территории'));
                                setTimeout(() => {
                                scroller.scrollTo('modules', { smooth: false });
                            });}}
                            className="font-regular rounded-none text-[16px] ultraXl:text-[18px] px-6 py-3 xl:w-72 xl:h-14 tracking-[0.32px] ultraXl:tracking-wider bg-[#3A5199] text-[#D5D6D2] flex flex-col justify-center uppercase text-center transition duration-200
                hover:bg-[#D5D6D2]
                hover:text-[#3A5199]"                        >
                            Перейти в каталог
                        </p>
                        </NavLink>

                </div>

            </div>
            <div
                className=" h-screen relative flex flex-col justify-between items-center xl:pt-10 gap-y-8"
            >
                <h2
                    className="font-thin text-4xl mt-24 md:mt-20 sm:text-5xl md:text-6xl text-center text-base-gray ultraXl:text-7xl"
                >
                    Реализованные проекты модульных зданий на новых территориях
                </h2>
                <Swiper
                    speed={1200}
                    parallax={true}
                    pagination={{
                        type: "bullets",
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="w-full h-[80%]"
                >
                    {projects.map(({ index, title, image, smallDescription }) => (
                        <SwiperSlide
                            style={{
                                backgroundImage: `linear-gradient(0deg, #2F2E33 0%, rgba(47, 46, 51, 0) 60%), ${image}`,
                            }}
                            key={index}
                            className="bg-cover bg-center bg-no-repeat"
                        >
                            <div className="h-full px-10 md:p-10 flex flex-col justify-end gap-y-5 text-left md:gap-y-10">
                                <h1
                                    data-swiper-parallax="-400"
                                    className="font-ultraBold mb-20 text-center sm:text-left sm:mb-0 text-base-gray text-4xl md:text-7xl lg:text-8xl ultraXl:text-[200px] bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
                                >
                                    {title}
                                </h1>
                                <p
                                    className="font-thin hidden sm:block h-[168px] md:h-32 text-xl md:text-2xl lg:text-3xl ultraXl:text-[50px] ultraXl:leading-normal text-base-gray"
                                    data-swiper-parallax="-200"
                                >
                                    {smallDescription}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewTerritory;