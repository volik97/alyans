export default function Advantages() {
  return (
    <div
      id="advantage"
      className="relative w-full px-4 xl:pt-10 flex flex-col gap-16 justify-center items-center overflow-hidden"
    >
      <a
          className="font-thin text-4xl mt-24 md:mt-20 sm:text-5xl md:text-6xl text-center text-base-gray ultraXl:text-7xl"
      >
          Преимущества приобретения
          модульных зданий
      </a>
        <div className="w-full max-w-[1640px] flex flex-wrap xl:flex-nowrap gap-5">
            <div className={'grid grid-col-1 grid-rows-4 md:grid-rows-3 gap-5'}>
                <div className="bg-cover bg-center w-full md:col-span-2" style={{backgroundImage: 'url("/Images/advantageImg/design.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Проектирование</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Мы разрабатываем детальные паспорта модульных зданий с учётом особенностей региона и сборочных чертежей, включая расчёт силового каркаса, теплопотери и параметры панелей.
                        </p>
                    </div>
                </div>
                <div className="bg-cover bg-center w-full md:row-span-2 md:col-start-1 md:row-start-2" style={{backgroundImage: 'url("/Images/advantageImg/waterSupply.webp")'}}>
                    <div className={'h-[390px] md:h-[800px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Водоснабжение</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Определение необходимого количества и типа сантехнического оборудования, расчет объема и диаметра труб, выбор источника водоснабжения и монтаж оборудования.                        </p>
                    </div>
                </div>

                <div className="bg-cover bg-center w-full md:col-start-2 md:row-start-3" style={{backgroundImage: 'url("/Images/advantageImg/electricNet.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Электрические сети</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Проектирование электроснабжения, проведение электрических кабелей и установка электрооборудования.                        </p>
                    </div>
                </div>

                <div className="bg-cover bg-center w-full md:col-start-2 md:row-start-2 " style={{backgroundImage: 'url("/Images/advantageImg/gasSupply.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Газоснабжение</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Проведение газопровода включает в себя прокладку труб, установку газового оборудования и его подключение, а также проверку системы на работоспособность и герметичность.                        </p>
                    </div>
                </div>

            </div>
            <div className={'grid grid-col-1 grid-rows-4 md:grid-rows-3 gap-5'}>
                <div className="bg-cover bg-center w-full md:row-span-2 md:col-start-1 md:row-start-1 " style={{backgroundImage: 'url("/Images/advantageImg/heating.webp")'}}>
                    <div className={'h-[390px] md:h-[800px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Отопление</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Установка и настройка элементов отопительной системы, таких как котлы, радиаторы, трубопроводы, насосы и контроллеры.                       </p>
                    </div>
                </div>
                <div className="bg-cover bg-center w-full md:col-start-2 md:row-start-1 " style={{backgroundImage: 'url("/Images/advantageImg/deliveryAndInstallation.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5  bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Доставка и монтаж</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Компания “Альянс” осуществляет доставку и монтаж модульных зданий в любую точку страны, в том числе в Республику Крым, ДНР, ЛНР, Херсонскую и Запорожскую области.                        </p>
                    </div>
                </div>
                <div className="bg-cover bg-center w-full md:col-start-2 md:row-start-2" style={{backgroundImage: 'url("/Images/advantageImg/chifMotage.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5  bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Шеф-монтаж</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Мы предоставим укомплектованную бригаду опытных специалистов для осуществления монтажа инженерных сетей и дальнейшей пуско-наладочой работы.                        </p>
                    </div>
                </div>
                <div className="bg-cover bg-center w-full md:col-span-2 md:col-start-1 md:row-start-3" style={{backgroundImage: 'url("/Images/advantageImg/alarmSystems.webp")'}}>
                    <div className={'h-[390px] p-6 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-gray-900'}>
                        <h3 className="font-semibold text-2xl text-base-gray">Пожарная и охранная сигнализация</h3>
                        <p className="font-thin text-lg text-white tracking-wider">
                            Разработка проекта сигнализации, закупка оборудования, прокладка кабелей и установка датчиков, установка и настройка приемно-контрольного прибора, тестирование системы и обучение персонала.                       </p>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className={'grid-cols-2 grid-rows-1 w-screen h-fit'}>*/}
        {/*    <div className={'grid-cols-2 grid-rows-3 gap-4'}>*/}
        {/*            <div className={'col-span-2 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*            <div className={'row-span-2 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*            <div className={'col-span-1 row-span-1 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*            <div className={'col-span-1 row-span-1 p-4 rounded-lg bg-stripes-sky'}></div>*/}

        {/*    </div>*/}
        {/*    <div className={'grid-cols-2 grid-rows-3 gap-4'}>*/}
        {/*        <div className={'col-span-2 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*        <div className={'row-span-2 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*        <div className={'col-span-1 row-span-1 p-4 rounded-lg bg-stripes-sky'}></div>*/}
        {/*        <div className={'col-span-1 row-span-1 p-4 rounded-lg bg-stripes-sky'}></div>*/}

        {/*    </div>*/}
        {/*    /!*<div className={'grid-cols-2 grid-rows-3 gap-4'}>*!/*/}
        {/*    /!*    <div>*!/*/}

        {/*    /!*    </div>*!/*/}
        {/*    /!*    <div></div>*!/*/}
        {/*    /!*    <div></div>*!/*/}
        {/*    /!*    <div></div>*!/*/}
        {/*    /!*</div>*!/*/}

        {/*</div>*/}

    </div>
  );
}
