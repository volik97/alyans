import { YMaps } from "@pbe/react-yandex-maps";
import Contacts from "../../blocks/Contacts/contact";
import Hero from "../../blocks/Hero/Hero";
import UsProjects from "../../blocks/UsProjects/UsProjects";
import Faq from "../../blocks/faq/faq.tsx";
import Advantages from "../../blocks/Advantages/Advantages.tsx";
import FromMainPage from "../../blocks/form/fromMainPage.tsx";

export default function MainPage() {
  return (
    <>
      <Hero />
      <UsProjects />
      <Advantages />
        <Faq/>
        <FromMainPage/>
        <div id="contacts"/>
      <YMaps query={{ apikey: "3393c833-d9af-455e-aeac-c97893c9816d" }}>
        <Contacts />
      </YMaps>
    </>
  );
}
