import {Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";
import {useState} from "react";

interface IIcon {
    id:number,
    open: number
}
function Icon({id, open}: IIcon){
    return (
        <svg className={`${id === open ? "-rotate-45" : ""} h-9 w-9 transition-transform ease-in-out duration-500`} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <rect width="38" height="38" rx="19" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M19 5.9375C19.3149 5.9375 19.617 6.06261 19.8397 6.28531C20.0624 6.50801 20.1875 6.81006 20.1875 7.125V17.8125H30.875C31.1899 17.8125 31.492 17.9376 31.7147 18.1603C31.9374 18.383 32.0625 18.6851 32.0625 19C32.0625 19.3149 31.9374 19.617 31.7147 19.8397C31.492 20.0624 31.1899 20.1875 30.875 20.1875H20.1875V30.875C20.1875 31.1899 20.0624 31.492 19.8397 31.7147C19.617 31.9374 19.3149 32.0625 19 32.0625C18.6851 32.0625 18.383 31.9374 18.1603 31.7147C17.9376 31.492 17.8125 31.1899 17.8125 30.875V20.1875H7.125C6.81006 20.1875 6.50801 20.0624 6.28531 19.8397C6.06261 19.617 5.9375 19.3149 5.9375 19C5.9375 18.6851 6.06261 18.383 6.28531 18.1603C6.50801 17.9376 6.81006 17.8125 7.125 17.8125H17.8125V7.125C17.8125 6.81006 17.9376 6.50801 18.1603 6.28531C18.383 6.06261 18.6851 5.9375 19 5.9375Z" fill="black"/>
            </g>
        </svg>
    )
}

function Faq() {
    const [open, setOpen] = useState(0)
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    return (
        <section
            id="faq"
            className="relative w-full h-max xl:pt-10 px-4 flex flex-col gap-16 justify-center items-center"
        >
            <h1
                className="font-thin text-4xl mt-24 md:mt-20 sm:text-5xl md:text-6xl text-center text-base-gray ultraXl:text-7xl"
            >
                Часто задаваемые вопросы
            </h1>
            <div className={'space-y-3 max-w-[1228px]'}>
            {/*  1  */}
            <Accordion placeholder={''} open={open === 1} icon={<Icon id={1} open={open}/>} className={'w-full bg-[#2A292E]'} >
                <AccordionHeader placeholder={''} onClick={() => handleOpen(1)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                    Требуется разрешение на капстроительство?
                </AccordionHeader>
                <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                    Разрешение на капстроительство не требуется, т.к. модульные здания признаются
                    движимым имуществом, сооружением (п.п. 10.2 п. 10 ст. 1 Градостроительного кодекса РФ).
                </AccordionBody>
            </Accordion>
                {/*  2  */}
                <Accordion placeholder={''} open={open === 2} icon={<Icon id={2} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(2)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Каким документам соответствуют модульные здания?                 </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Соответствуют действующим СНиП, ГОСТ, СН, СП, ППР, ППБ, СанПиН, ТСН, ПУЭ и др.
                    </AccordionBody>
                </Accordion>
                {/*  3  */}
                <Accordion placeholder={''} open={open === 3} icon={<Icon id={3} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(3)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Можно ли поставить на баланс как движимое имущество?                   </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Можно поставить на баланс как движимое имущество, т.е. закупка модулей проходит по договору купли-продажи.
                    </AccordionBody>
                </Accordion>
                {/*  4  */}
                <Accordion placeholder={''} open={open === 4} icon={<Icon id={4} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(4)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Имеется возможность изменения объёма?                   </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Возможно оперативное увеличение или уменьшение строительных объёмов.
                    </AccordionBody>
                </Accordion>
                {/*  5  */}
                <Accordion placeholder={''} open={open === 5} icon={<Icon id={5} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(5)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Возможна  перепланировка и перенос здания?                  </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Здание быстро и успешно переносится на новое место либо производится его перепланировка для удовлетворения новых потребностей заказчика.
                    </AccordionBody>
                </Accordion>
                {/*  6  */}
                <Accordion placeholder={''} open={open === 6} icon={<Icon id={6} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(6)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Существуют ограничения на габариты здания?                  </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Размеры модулей ограничены только транспортными габаритами и изготавливаются под нужды клиента.
                    </AccordionBody>
                </Accordion>
                {/*  7  */}
                <Accordion placeholder={''} open={open === 7} icon={<Icon id={7} open={open}/>} className={'w-full bg-[#2A292E]'} >
                    <AccordionHeader placeholder={''} onClick={() => handleOpen(7)} className={'text-base-gray font-medium border-none text-lg md:text-3xl hover:text-base-gray py-4 px-2 md:py-5 md:px-6'}>
                        Возможен ли подбор цветового решения для фасада и конфигурации здания?                  </AccordionHeader>
                    <AccordionBody className={'md:text-2xl text-lg text-base-gray md:px-6 px-2 font-thin leading-2 md:leading-8 tracking-widest'}>
                        Конструкция модулей позволяет создать фасады с уникальными цветовыми решениями, воспроизвести входную группу любой конфигурации и вписать её в городскую застройку.
                    </AccordionBody>
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;