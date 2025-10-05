import Form from '../../ui/form.tsx';

function FormCallback({ contacts }: { contacts?: boolean }) {
    return (
        <section
            id={'form'}
            style={{
                backgroundImage:
                    'url("https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/images/formImage.webp")',
            }}
            className={`bg-cover bg-none h-fit mt-24 md:mt-20 flex items-center bg-right ${contacts && 'flex-col xl:flex-row  justify-center'}`}
        >
            {contacts && (
                <div className=' w-full h-full pt-[80px] xl:pt-0 xl:h-[663px] max-w-[620px] md:max-w-[872px] xl:max-w-fit md:px-4'>
                    <div className='w-full h-full border border-black bg-white flex flex-col gap-6 px-[60px] pt-10 pb-[60px] items-center justify-between md:items-start'>
                        <h3 className='font-medium text-2xl md:text-4xl text-[#2F2E33]'>
                            Контакты
                        </h3>
                        <div className='flex flex-col items-center md:items-start gap-3 ultraXl:gap-5'>
                            <h1 className='font-regular text-lg md:text-xl ultraXl:text-3xl text-[#2F2E33]'>
                                Контактный телефон
                            </h1>
                            <a
                                href='tel:+78632007308'
                                className='font-thin text-lg md:text-xl hover:text-base-zinc ultraXl:text-3xl text-[#8F9DB2]/70'
                            >
                                +7 (863) 200-73-08
                            </a>
                        </div>
                        <div className='flex flex-col items-center md:items-start gap-3 ultraXl:gap-5'>
                            <h1 className='font-regular text-lg md:text-xl ultraXl:text-3xl text-[#2F2E33]'>
                                Почта
                            </h1>
                            <a
                                href='mailto:sk_alliance@bk.ru'
                                className='font-thin text-lg md:text-xl ultraXl:text-3xl hover:text-base-zinc text-[#8F9DB2]/70'
                            >
                                sk_alliance@bk.ru
                            </a>
                        </div>
                        <div className='flex flex-col items-center md:items-start gap-3 ultraXl:gap-5'>
                            <h1 className='font-regular text-lg md:text-xl ultraXl:text-3xl text-[#2F2E33]'>
                                Офис
                            </h1>
                            <a
                                target='_blank'
                                href='https://yandex.ru/maps/-/CDUfaD6K'
                                className='font-thin md:text-left text-center text-lg md:text-xl ultraXl:text-3xl text-[#8F9DB2]/70 hover:text-base-zinc'
                            >
                                344056, г. Ростов-на-Дону, пер. Иртышский, №50
                            </a>
                        </div>
                        <div className='flex flex-col items-center md:items-start gap-3 ultraXl:gap-5'>
                            <h1 className='font-regular text-lg md:text-xl ultraXl:text-3xl text-[#2F2E33]'>
                                Часы работы
                            </h1>
                            <a className='font-thin text-lg md:text-xl ultraXl:text-3xl text-[#8F9DB2]/70'>
                                Пн-пт: 09:00 – 18:00
                                <br />
                                Сб-вс: выходной
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <div className={'py-10 md:py-20 md:px-4 xl:px-14 xl:py-40'}>
                <Form />
            </div>
        </section>
    );
}

export default FormCallback;
