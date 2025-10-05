import Hero from '../../blocks/Hero/Hero';
import FormCallback from '../../blocks/form/FormCallback';

export default function ContactsPage() {
    return (
        <>
            <Hero title='КОНТАКТЫ' />
            <FormCallback contacts />
            <div id='contacts' />
        </>
    );
}
