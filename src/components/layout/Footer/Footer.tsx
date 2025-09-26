// import socialMedia from "../../../content/SocialMedia.ts";
import { NavLink } from "react-router-dom";
import {scroller} from "react-scroll";

export default function Footer() {
  return (
    <footer className="relative p-6 py-12 flex flex-col gap-y-1 justify-between items-center">
      <NavLink to="/">
        <img
            alt={'logo'}
            onClick={() => {
                setTimeout(() => {
                    scroller.scrollTo('hero', { smooth: true });
                })}}
          src="/Images/newLogo.svg"
          className="cursor-pointer"
        />
      </NavLink>
      <hr className="my-6 w-full border-base-gray opacity-5 " />
      
      {/* Контакты */}
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-60 items-center">
        <div className="flex flex-col items-center xl:items-start gap-2">
          <h3 className="font-thin text-lg text-base-gray">Номер телефона</h3>
          <a
            href="tel:+78632007308"
            className="font-thin text-xl ultraXl:text-2xl text-base-gray hover:text-base-zinc transition-colors"
          >
            +7 (863) 200-73-08
          </a>
        </div>
        
        <div className="flex flex-col items-center xl:items-start gap-2">
          <h3 className="font-thin text-lg text-base-gray">Почта</h3>
          <a
            href="mailto:sk_alliance@bk.ru"
            className="font-thin text-xl ultraXl:text-2xl text-base-gray hover:text-base-zinc transition-colors"
          >
            sk_alliance@bk.ru
          </a>
        </div>
        
        <div className="flex flex-col items-center xl:items-start gap-2">
          <h3 className="font-thin text-lg text-base-gray">Наш адрес</h3>
          <a
            target="_blank"
            href="https://yandex.ru/maps/-/CDUfaD6K"
            className="font-thin text-xl ultraXl:text-2xl text-base-gray hover:text-base-zinc transition-colors text-center md:text-left"
          >
            344056, г. Ростов-на-Дону, пер. Иртышский, №50
          </a>
        </div>
      </div>
      
      <hr className="my-6 w-full border-base-gray opacity-5 " />
      {/* <div className="flex flex-row gap-6">
        {socialMedia.map(item => (
          <a key={uuidv4()} href="#">
            <img alt={''} src={`${Object.values(item)}`} className="w-9 ultraXl:w-12" />
          </a>
        ))}
      </div>
      <hr className="my-6 w-2/4 border-base-gray opacity-20 " /> */}
      <div className="flex flex-col items-center md:flex-row gap-2 md:max-w-[1227px]  justify-between w-full">
        <a
          className="font-thin text-xl ultraXl:text-2xl text-base-gray"
        >
          © ООО «Альянс», {new Date().getFullYear()}
        </a>
        <a
          target="_blank"
          href="/privacy.pdf"
          className="font-thin text-xl text-center ultraXl:text-2xl text-base-gray"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
