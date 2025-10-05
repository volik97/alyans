import { YMaps } from '@pbe/react-yandex-maps';
import Contacts from '../../blocks/Contacts/contact';
import Hero from '../../blocks/Hero/Hero';
import UsProjects from '../../blocks/UsProjects/UsProjects';
import Faq from '../../blocks/faq/faq.tsx';
import Advantages from '../../blocks/Advantages/Advantages.tsx';
import FormCallback from '../../blocks/form/FormCallback.tsx';

export default function MainPage() {
    return (
        <>
            <Hero title='МОДУЛЬНЫЕ' subtitle='БЫСТРОВОЗВОДИМЫЕ' description='ЗДАНИЯ' />
            <UsProjects />
            <Advantages />
            <Faq />
            <FormCallback />
            <div id='contacts' />
            <YMaps query={{ apikey: '3393c833-d9af-455e-aeac-c97893c9816d' }}>
                <Contacts />
            </YMaps>
        </>
    );
}
