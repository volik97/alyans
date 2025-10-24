import Hero from '../../blocks/Hero/Hero';

export default function About() {
    return (
        <>
            <Hero title='О КОМПАНИИ' />
            <div className='w-full h-full flex flex-col items-center justify-center bg-white'>
                <div className='w-full max-w-[1728px] h-full flex flex-col items-start pt-[38px] pb-[57px] px-8 lg:px-[75px] justify-center bg-white'>
                    <h1 className='font-thin text-4xl md:text-6xl lg:text-[94px] text-black pb-2.5'>
                        ООО “Альянс”
                    </h1>
                    <p className='font-thin  text-xl md:text-3xl text-black'>
                        <span className='font-bold inline'>
                            Производственно - строительная компания “Альянс”
                        </span>{' '}
                        - многопрофильная компания, оказывающая полный комплекс услуг от
                        проектирования до оснащения быстровозводимых модульных конструкций и сдачи
                        их в эксплуатацию.{' '}
                    </p>
                    <p className='font-thin  text-xl md:text-3xl text-black'>
                        С 2014 года успешно осуществляет проектирование, производство, поставку,
                        сборку, монтаж быстровозводимых модульных зданий на территориях Южного
                        федерального округа, Донецкой Народной Республики, Запорожской области.
                    </p>
                    <p className='font-thin  text-xl md:text-3xl text-black'>
                        Мы строим объекты в сферах здравоохранения, образования, культуры, спорта.
                    </p>
                    <br />
                    <br />
                    <p className='font-bold text-xl md:text-3xl text-black pb-2.5'>
                        Наши Заказчики
                    </p>
                    <br />
                    <p className='font-thin  text-xl md:text-3xl text-black'>
                        100% реализованных нами объектов – это исполнение государственных и
                        муниципальных контрактов в рамках Федерального закона от 05.04.2013 №44-ФЗ
                        «О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения
                        государственных и муниципальных нужд».
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full max-w-[1728px] flex flex-col 2xl:flex-row 2xl:gap-20 items-center justify-between gap-[93px] pt-[93px] px-8 lg:px-[75px]'>
                    <img
                        src='/Images/about/about_page_how_we_work.png'
                        alt='Как мы работаем'
                        className='w-full h-full max-w-[623px] '
                    />
                    <h1 className='font-thin w-fit text-4xl md:text-6xl 2xl:text-[94px] text-white pb-2.5'>
                        КАК МЫ РАБОТАЕМ
                    </h1>
                </div>
                <div className='w-full max-w-[1728px] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 pt-[40px] lg:pt-[93px] lg:px-[75px]'>
                    {/* Блок 1 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6 '>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[7.5rem]'>
                            Проектируем модульные конструкции
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Мы разрабатываем детальные паспорта модульных зданий с учётом
                            особенностей региона и сборочных чертежей, включая расчёт силового
                            каркаса, теплопотери и параметры панелей.
                        </p>
                    </div>

                    {/* Блок 2 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6'>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[7.5rem]'>
                            Разрабатываем все инженерные системы
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Газоснабжение, водоснабжение, электрические сети, системы отопления,
                            вентиляции и кондиционирования, пожарная и охранная сигнализации.
                        </p>
                    </div>

                    {/* Блок 3 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6'>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[7.5rem]'>
                            Изготавливаем, доставляем и производим монтаж
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Компания "Альянс" имеет собственное производство, где изготавливает
                            составляющие модульной конструкции. Затем, благодаря отлаженной системе
                            логистики, осуществляет доставку в любую точку страны, в том числе, в
                            новые субъекты Российской Федерации, где затем производит монтаж
                            соблюдая все необходимые нормы и сроки.
                        </p>
                    </div>

                    {/* Блок 4 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6'>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[10rem]'>
                            Осуществляем шеф-монтаж и дальнейшие пусконаладочные работы
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Компания "Альянс" предоставляет укомплектованную бригаду опытных
                            специалистов для осуществления монтажа инженерных сетей и дальнейшей
                            пусконаладочной работы.
                        </p>
                    </div>

                    {/* Блок 5 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6'>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[10rem]'>
                            Осуществляем сдачу объекта в эксплуатацию
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Получаем все разрешительные документы, необходимые для ввода нового
                            модульного здания в эксплуатацию и подписываем итоговый акт
                            приема-передачи с заказчиком.
                        </p>
                    </div>

                    {/* Блок 6 */}
                    <div className='bg-[#2F2E33] rounded-lg flex flex-col gap-8 p-6'>
                        <h3 className='font-medium text-white text-4xl xl:min-h-[10rem]'>
                            Осуществляем все гарантийные обязательства
                        </h3>
                        <p className='font-thin text-[#D5D6D2] text-2xl leading-relaxed'>
                            Компания "Альянс" осуществляет поддержку заказчика на протяжении всего
                            периода гарантийного срока.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
