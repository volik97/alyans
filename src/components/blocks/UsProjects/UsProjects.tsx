import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import projects from "../../../content/projects.ts";
export default function UsProjects() {
  return (
    <div
      id="usProjects"
      className="h-screen relative flex flex-col justify-between items-center xl:pt-10 gap-y-8"
    >
      <h2
          className="font-thin text-4xl mt-24 md:mt-20 sm:text-5xl md:text-6xl text-center text-base-gray ultraXl:text-7xl"
      >
        Наши проекты
      </h2>
      <Swiper
        speed={1200}
        parallax={true}
        pagination={{
          type: "progressbar",
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
                className="font-ultraBold text-base-gray text-4xl md:text-7xl lg:text-8xl ultraXl:text-[200px] bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
              >
                {title}
              </h1>
              <p
                  className="font-thin h-[168px] md:h-32 text-xl md:text-2xl lg:text-3xl ultraXl:text-[50px] ultraXl:leading-normal text-base-gray"
                data-swiper-parallax="-200"
              >
                {smallDescription}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
