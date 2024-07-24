import {PatternFormat} from "react-number-format";
import React, {useEffect, useRef, useState} from "react";
import Captcha from 'react-google-recaptcha'
export default function Form({ closeForm, subject }: { closeForm?: (a: boolean) => void, subject?: string }) {
    const recaptchaRef = useRef<Captcha>(null);
    const [successSend, setSuccessSend] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [dataForm, setDataForm] = useState({
        subject: subject,
        tel: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        const telPattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        const isTelValid = dataForm.tel === '' || telPattern.test(dataForm.tel);
        const isEmailValid = dataForm.email === '' || /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i.test(dataForm.email);

        if ((dataForm.tel || dataForm.email) && isTelValid && isEmailValid) {
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(true);
        }
    }, [dataForm]);

    const currentUrl = () => {
        const urls = ['https://www.skalliance.pro/', 'https://www.skalliance.pro/#/', 'https://skalliance.pro/', 'https://skalliance.pro/#/'];
        return urls.includes(window.location.href);
    }

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;
        setDataForm((prevState) => {
            return { ...prevState, [id]: value };
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!dataForm.tel && !dataForm.email) {
            setErrorMessage("Заполните либо номер телефона, либо e-mail.");
            return;
        }

        const telPattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (dataForm.tel && !telPattern.test(dataForm.tel)) {
            setErrorMessage("Введите корректный номер телефона.");
            return;
        }

        setErrorMessage(null);

        const captcha = await recaptchaRef.current?.executeAsync();
        const res = await fetch("https://skalliance.pro/captcha", {
            method: "POST",
            body: JSON.stringify({ captcha }),
            headers: { "Content-type": "application/json" },
        });
        const { success } = await res.json();
        if (success) {
            const res = await fetch("https://skalliance.pro/sendEmail", {
                method: "POST",
                body: JSON.stringify(dataForm),
                headers: { "Content-type": "application/json" },
            });
            if (res.status === 200) {
                setSuccessSend(true);
            }
        }
    }

    if (!successSend) {
        return (
            <form
                onSubmit={handleSubmit}
                onClick={e => e.stopPropagation()}
                className={`relative group min-w-[280px] ${currentUrl() ? 'max-w-[620px] border border-black' : 'max-w-[840px] border border-black'} gap-3 md:gap-6 flex flex-col justify-start items-start w-full h-fit px-2 pt-5 pb-4 md:px-[60px] md:pb-[60px] md:pt-10 bg-white`}
            >
                {closeForm && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-7 w-7 self-end cursor-pointer hover:scale-110"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={() => closeForm(false)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>}
                <div className={'space-y-2'}>
                    <h3 className={'font-medium text-2xl md:text-4xl text-[#2F2E33]'}>Задать вопрос по направлению «Модули»</h3>
                    <p className={'text-[#8F9DB2]/70 font-regular text-base md:text-2xl leading-tight tracking-[2%]'}>Заполните данные, и мы Вам презвоним в ближайшее время.</p>
                </div>
                <figure className={'w-full h-px bg-[#D9D9D9]'} />
                <div className={'w-full grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:gap-x-10 md:gap-y-3'}>
                    <div className={'flex flex-col col-span-2'}>
                        <label htmlFor={'firstName'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Как к Вам обращаться</label>
                        <input
                            onChange={handleOnChange}
                            pattern={"[а-яА-ЯёЁ]+"}
                            required
                            placeholder={'Иванов Иван Иванович'}
                            className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}
                            id={'firstName'}
                        />
                    </div>
                    {/*<div className={'flex flex-col col-span-2'}>*/}
                    {/*    <label htmlFor={'lastName'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Фамилия</label>*/}
                    {/*    <input*/}
                    {/*        onChange={handleOnChange}*/}
                    {/*        pattern={"[а-яА-ЯёЁ]+"}*/}
                    {/*        required*/}
                    {/*        placeholder={''}*/}
                    {/*        className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}*/}
                    {/*        id={'lastName'}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className={'flex flex-col'}>
                        <label htmlFor={'tel'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Номер Телефона</label>
                        <PatternFormat
                            type="tel"
                            format="+7 (###) ###-##-##"
                            mask="_"
                            required={false}
                            id={'tel'}
                            placeholder={'+7 (999) 999-99-99'}
                            onChange={handleOnChange}
                            className={'px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}
                            value={dataForm.tel}
                        />
                    </div>
                    <div className={'flex flex-col'}>
                        <label htmlFor={'email'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>E-mail</label>
                        <input
                            type={'email'}
                            pattern={'^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$'}
                            onChange={handleOnChange}
                            required={false}
                            placeholder={'email@example.ru'}
                            className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}
                            id={'email'}
                            value={dataForm.email}
                        />
                    </div>
                </div>
                {currentUrl() &&
                    <div className={'w-full flex flex-col'}>
                        <label htmlFor={'subject'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Опишите свой проект</label>
                        <textarea
                            id={'subject'}
                            onChange={handleOnChange}
                            className={'px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}
                        ></textarea>
                    </div>}
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <p className={'text-[#8F9DB2]/70 font-normal text-base md:text-2xl leading-tight tracking-[2%]'}>
                    Оставляя заявку вы соглашаетесь с Пользовательским соглашением.
                </p>
                <div className={'w-full'}>
                    <button
                        type={'submit'}
                        disabled={isSubmitDisabled}
                        className={`text-center w-full float-right max-w-[300px] font-medium cursor-pointer tracking-wider rounded-none text-[16px] ultraXl:text-[18px] px-6 py-5 ultraXl:w-72 ultraXl:h-14 ultraXl:tracking-wider bg-[#3A5199] text-[#D5D6D2] flex-col items-center justify-center transition duration-200 hover:bg-[#D5D6D2] hover:text-[#3A5199] ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        ОТПРАВИТЬ
                    </button>
                </div>
                <Captcha
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.SITE_KEY_RECAPTCHA!}
                />
            </form>
        );
    } else {
        return (
            <div className={`relative group min-w-[280px] ${currentUrl() ? 'max-w-[620px]' : 'max-w-[840px]'} gap-3 md:gap-6 flex flex-col justify-start items-start w-full h-fit px-2 pt-5 pb-4 md:px-[60px] md:pb-[60px] md:pt-10 bg-white`}>
                {closeForm && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-7 w-7 self-end cursor-pointer hover:scale-110"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={() => closeForm(false)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>}
                <div className={'space-y-2'}>
                    <h3 className={'font-medium text-2xl md:text-4xl text-[#2F2E33]'}>Ваша заявка успешно отправлена!</h3>
                    <p className={'text-[#8F9DB2]/70 font-regular text-base md:text-2xl leading-tight tracking-[2%]'}>Мы ознакомимся с вашей заявкой и перезвоним вам в ближайшее время.</p>
                </div>
                <img src={'/Images/200.webp'} alt={'Success 200'} className={'max-h-[286px] m-auto'} />
            </div>
        );
    }
}
