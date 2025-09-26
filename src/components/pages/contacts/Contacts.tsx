import Hero from "../../blocks/Hero/Hero";
import Contacts from "../../blocks/Contacts/contact";
import Faq from "../../blocks/faq/faq";
import { YMaps } from "@pbe/react-yandex-maps";

export default function ContactsPage() {
  return (
    <>
      <Hero 
        title="КОНТАКТЫ"
        
      /><Faq/>
          <div id="contacts" />
                  
        <YMaps query={{ apikey: "3393c833-d9af-455e-aeac-c97893c9816d" }}>
        <Contacts />
      </YMaps>
    </>
  );
}
