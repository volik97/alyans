import {PatternFormat} from "react-number-format";
import React, {useRef, useState} from "react";
import Captcha from 'react-google-recaptcha'
export default function Form({closeForm, subject}: {closeForm?: (a:boolean) => void, subject?: string}) {
    const recaptchaRef = useRef<Captcha>(null)
    const [successSend, setSuccessSend] = useState(false)
    const [dataForm, setDataForm] = useState({
        subject: subject,
        tel: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const currentUrl = () => {
        const urls = ['https://www.skalliance.pro/', 'https://www.skalliance.pro/#/','https://skalliance.pro/','https://skalliance.pro/#/' ]
        for (const url of urls) {
            if (url === window.location.href){
                return true
            }
        }
    }
    const handleOnChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;
        setDataForm((prevState) => {
            return { ...prevState, [id]: value };
        });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const captcha = await recaptchaRef.current?.executeAsync();
        const res = await fetch("https://skalliance.pro/captcha", {
            method: "POST",
            body: JSON.stringify({ captcha }),
            headers: { "Content-type": "application/json" },
        });
        const {success} = await res.json();
        if(success) {
            const res = await fetch("https://skalliance.pro/sendEmail",
                {
                    method: "POST",
                    body: JSON.stringify(dataForm),
                    headers: { "Content-type": "application/json" },
                })
            if(res.status === 200){
                setSuccessSend(true)
            }
        }
    }

  if(!successSend){
      return (

          <form
              onSubmit={(e) => handleSubmit(e)}
              onClick={e => e.stopPropagation()}
              className={`relative group min-w-[280px] ${window.location.href === 'https://www.skalliance.pro/' || window.location.href === 'https://www.skalliance.pro/#/' ? 'max-w-[620px]' : 'max-w-[840px]'} gap-3 md:gap-6 flex flex-col justify-start items-start w-full h-fit px-2 pt-5 pb-4 md:px-[60px] md:pb-[60px] md:pt-10 bg-white`}>

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
                  <h3 className={'font-medium text-2xl md:text-4xl text-[#2F2E33]'}>Заказать проект</h3>
                  <p className={'text-[#8F9DB2]/70 font-regular text-base md:text-2xl leading-tight tracking-[2%]'}>Заполните данные и мы вам презвоним в ближайшее время.</p>
              </div>
              <figure className={'w-full h-px bg-[#D9D9D9]'}/>
              <div className={'w-full grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:gap-x-10 md:gap-y-3'}>
                  <div className={'flex flex-col'}><label htmlFor={'firstName'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Имя</label><input onChange={handleOnChange} pattern={"[а-яА-ЯёЁ]+"} required placeholder={''} className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'} id={'firstName'}/></div>
                  <div className={'flex flex-col'}><label htmlFor={'lastName'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Фамилия</label><input onChange={handleOnChange} pattern={"[а-яА-ЯёЁ]+"} required placeholder={''} className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'} id={'lastName'}/></div>
                  <div className={'flex flex-col'}><label htmlFor={'tel'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Номер Телефона</label>
                      <PatternFormat
                          type="tel"
                          format="+7 (###) ###-##-##"
                          mask="_"
                          required={true}
                          id={'tel'}
                          onChange={handleOnChange}
                          className={'px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'} value={''}/></div>
                  <div className={'flex flex-col'}><label htmlFor={'email'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>E-mail</label><input type={'email'} pattern={'^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$'} onChange={handleOnChange} required placeholder={''} className={'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-600/10 px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'} id={'email'}/></div>

              </div>
              {currentUrl() &&
                  <div className={'w-full flex flex-col'}>
                      <label htmlFor={'subject'} className={'text-base tracking-wider font-medium text-[#2F2E33] px-1 pt-2 pb-1'}>Опишите свой проект</label>
                      <textarea id={'subject'} onChange={handleOnChange} className={'px-4 w-full py-3 md:p-4 border border-[#717990] focus:bg-[#DFE6F6] hover:bg-[#DFE6F6] outline-none focus:border-base-zinc hover:border-base-zinc text-base tracking-wide'}></textarea>
                  </div>}
              <p className={'text-[#8F9DB2]/70 font-normal text-base md:text-2xl leading-tight tracking-[2%]'}>
                  Оставляя заявку вы соглашаетесь с Пользовательским соглашением.
              </p>
              <div className={'w-full'}>
                  <button type={'submit'} className={'group-invalid:pointer-events-none group-invalid:opacity-30 text-center w-full float-right max-w-[300px] font-medium cursor-pointer tracking-wider rounded-none text-[16px] ultraXl:text-[18px] px-6 py-5 ultraXl:w-72 ultraXl:h-14 ultraXl:tracking-wider bg-[#3A5199] text-[#D5D6D2] flex-col items-center justify-center transition duration-200 hover:bg-[#D5D6D2] hover:text-[#3A5199]'}>ОТПРАВИТЬ</button>
              </div>

              <Captcha
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.SITE_KEY_RECAPTCHA!}/>
          </form>)
  }
  else {
      return (
          <div className={`relative group min-w-[280px] ${window.location.href === 'https://www.skalliance.pro/' || window.location.href === 'https://www.skalliance.pro/#/' ? 'max-w-[620px]' : 'max-w-[840px]'} gap-3 md:gap-6 flex flex-col justify-start items-start w-full h-fit px-2 pt-5 pb-4 md:px-[60px] md:pb-[60px] md:pt-10 bg-white`}>
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
                  <p className={'text-[#8F9DB2]/70 font-regular text-base md:text-2xl leading-tight tracking-[2%]'}>Мы ознакомимся с вашей заявкой и перезвоним вам
                      в ближайшее время.</p>
              </div>
              <img src={'/Images/200.webp'} alt={'Success 200'} className={'max-h-[286px] m-auto'}/>
          </div>
      )
  }
}
