import {Collapse, IconButton, Navbar} from "@material-tailwind/react";
import {scroller} from "react-scroll";
import {NavLink} from "react-router-dom";
import React from "react";
import Logo from "../../ui/logo.tsx";
import {v4 as uuidv4} from "uuid";
import {categoryReducer} from "../../store/reducers/categoryReducer.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
const mainMenu = [
    { usProjects: "Наши проекты" },
    { advantage: "Преимущества" },
    {faq: 'Часто задаваемые вопросы'},
    { contacts: "Контакты" },
]


function Header() {
    const {setCategory} = categoryReducer.actions
    const dispatch = useAppDispatch()
    const [openNav, setOpenNav] = React.useState(false);
    const handlerCloseNav = () => {
        if (openNav) {
            return setOpenNav(false);
        }
    };

    const menuContacts = (
        <div className={'hidden lg:block'}>
            <div className={'flex flex-col gap-5'}>
                <h5 className={'font-thin text-base-gray text-xl'}>Контактные данные</h5>
                <div className={'flex flex-col gap-y-4'}>
                    <a

                        href="tel:+78632007308"
                        className="font-thin text-[22px] ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                    >
                        +7 (863) 200-73-08
                    </a>
                    <a

                        href="mailto:sk_alliance@bk.ru"
                        className="font-thin text-[22px] ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                    >
                        sk_alliance@bk.ru
                    </a>
                </div></div>
        </div>
    )
    const menuUseful = (
        <div>
            <div className={'flex flex-col gap-5 max-w-[200px] lg:max-w-[300px]'}>
                <h5 className={'font-thin text-base-gray text-xl'}>Полезное</h5>
                <div className={'flex flex-col gap-y-4'}>
                    <NavLink to={'/news'}>
                        <p
                            onClick={() => {
                                handlerCloseNav();
                                setTimeout(() => {
                                    scroller.scrollTo('news', { smooth: false });
                                });
                            }}
                            className="font-thin text-[22px] ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                        >
                            Новости
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
    const menuPages:JSX.Element = (
        <div>
            <div className={'flex flex-col gap-5 max-w-[200px] lg:max-w-[300px]'}>
                <h5 className={'font-thin text-base-gray text-xl'}>Проекты</h5>
                <div className={'flex flex-col gap-y-4'}>
                    <NavLink to={'/moduls'}>
                        <p
                                onClick={() => {
                                    dispatch(setCategory('Все'));
                                    handlerCloseNav();

                                    setTimeout(() => {
                                        scroller.scrollTo('modules', { smooth: false });
                                    });
                                }}
                                className="font-thin text-[22px] ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                            >
                                Каталог
                            </p>
                    </NavLink>
                    <NavLink to="/newTerritory">
                        <p
                            onClick={() => {
                                handlerCloseNav();
                                setTimeout(() => {
                                    scroller.scrollTo('newTerritory', { smooth: false });
                                });
                            }}
                            className="font-thin text-[22px] ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                        >
                            Новые территории
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
    const menuMain: JSX.Element = (
        <div className={'flex flex-col gap-5 max-w-[200px] lg:max-w-[300px]'}>
            <h5 className={'font-thin text-base-gray text-xl'}>Главная</h5>
            <div className={'flex flex-col gap-y-4'}>
                {mainMenu.map((item) => {
                    return <NavLink key={uuidv4()} to="/">
                                <p
                                    onClick={() => {
                                        handlerCloseNav();
                                        setTimeout(() => {
                                            scroller.scrollTo(Object.keys(item)[0], { smooth: true });
                                        });
                                    }}
                                    color="inherit"
                                    className="font-thin text-[22px] leading-snug ultraXl:text-[28px] cursor-pointer tracking-[0.32px] transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
                                >
                                    {Object.values(item)}
                                </p>
                            </NavLink>
                })}
            </div>
        </div>
    )
    return (
        <Navbar placeholder={''} onMouseLeave={() => handlerCloseNav()} className="fixed top-0 z-20 border-none rounded-none max-w-full bg-[rgba(47,46,51,0.90)] py-3 px-5 lg:py-[15px] lg:px-[42px ]">
            <div className="h-full flex items-center justify-between">
                <div className='w-full flex justify-between lg:justify-start lg:gap-10 items-center'>
                    <IconButton
                        placeholder={''}
                        variant="text"
                        className="order-2 lg:order-none h-6 w-6 md:h-10 md:w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg className={'md:h-10 md:w-10'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.8">
                                    <path d="M3.75 9H20.25M3.75 15.75H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>


                        )}
                    </IconButton>
                    <Logo className={"hidden lg:block order-1 lg:order-none "}/>
                </div>
                    <NavLink key={uuidv4()} to="/newTerritory">
                        <p

                            onClick={() => {
                                handlerCloseNav();
                                setTimeout(() => {
                                    scroller.scrollTo('newTerritory', { smooth: false });
                                });
                            }}
                            className="whitespace-nowrap font-regular hidden lg:flex rounded-none leading-[1,16] text-[16px] ultraXl:text-[18px] px-7 pt-4 pb-3.5 ultraXl:w-72 ultraXl:h-14 tracking-[0.32px] ultraXl:tracking-wider bg-[#3A5199] text-[#D5D6D2] flex-col justify-center uppercase text-center transition duration-200
                            hover:bg-[#D5D6D2]
                            hover:text-[#3A5199]"                        >
                            Новые территории
                        </p>
                    </NavLink>
            </div>
            <Collapse  open={openNav} className="">
                <div className={'relative sm:px-10 pt-12 pb-4 flex sm:flex-row flex-col justify-start items-start gap-x-20 gap-y-10'}>
                    {menuMain}
                    {menuPages}
                    {menuUseful}
                    <figure className={'hidden lg:block w-px lg:h-[250px] ultraXl:h-[289px] bg-base-gray'}></figure>
                    {menuContacts}
                </div>
            </Collapse>
        </Navbar>
    );
}

export default Header;
