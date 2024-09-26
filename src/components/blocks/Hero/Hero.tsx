
export default function Hero() {
  return (
      <div id={'hero'} className={'relative h-fit md:h-screen flex justify-center items-center overflow-clip'}>
          <img className={'w-screen h-screen object-cover'} src={'https://альянспромодули.рф/images/banner.jpg'}/>
        {/*<video className="w-screen h-screen object-cover" controls={false} autoPlay muted loop playsInline><source src="/hero.mp4" type="video/mp4" />*/}
        {/*   Your browser does not support the video tag.</video>*/}
        <div style={{backgroundImage: 'linear-gradient(0deg, #2F2E33 5%, rgba(47, 46, 51, 0) 100%)'}} className={'absolute w-full h-full flex flex-col items-center justify-center'}>

                        <div className="text-center flex flex-col  ultraXl:pb-0 justify-center gap-5 h-full basis-4/5">
                           <h1
                               className="font-ultraBold tracking-wide text-base-gray text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[116px] ultraXl:text-[12rem]"
                          >
                            МОДУЛЬНЫЕ
                          </h1>
                          <h1
                              className="font-ultraBold tracking-tight text-base-gray text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[116px] ultraXl:text-[12rem]"
                          >
                            БЫСТРОВОЗВОДИМЫЕ
                          </h1>
                          <h1
                              className="font-ultraBold tracking-wide text-base-gray text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[116px] ultraXl:text-[12rem]"
                          >
                            ЗДАНИЯ
                          </h1>
                        </div>
        </div>
      </div>
  );
}
