import socialMedia from "../../../content/SocialMedia.ts";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
      <hr className="my-6 w-2/4 border-base-gray opacity-20 " />
      <div className="flex flex-row gap-6">
        {socialMedia.map(item => (
          <a key={uuidv4()} href="#">
            <img alt={''} src={`${Object.values(item)}`} className="w-9 ultraXl:w-12" />
          </a>
        ))}
      </div>
      <hr className="my-6 w-2/4 border-base-gray opacity-20 " />
      <div className="flex flex-col items-center md:flex-row gap-2 md:gap-10">
        <a
          href="#"
          className="font-thin text-xl ultraXl:text-3xl text-base-gray"
        >
          © ООО «Альянс», 2024
        </a>
        <a
          href="#"
          className="font-thin text-xl text-center ultraXl:text-3xl text-base-gray"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
