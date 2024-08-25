import Form from "../../ui/form.tsx";


function FromMainPage() {
    return (
        <section id={'form'} style={{backgroundImage: 'url("https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/images/formImage.webp")'}} className={'bg-cover bg-none h-fit mt-24 md:mt-20 flex items-center bg-right'}>
            <div className={'md:py-20 md:px-4 xl:px-14 xl:py-40'}><Form/></div>
        </section>
        )
}

export default FromMainPage;