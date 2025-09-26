import {IconButton, Navbar} from "@material-tailwind/react";

import {NavLink} from "react-router-dom";
import React from "react";
import Logo from "../../ui/logo.tsx";



function Header() {

    const [openNav, setOpenNav] = React.useState(false);



    const classicMenu: JSX.Element = (
        <div className={'flex lg:flex-row flex-col gap-x-10 gap-y-8'}>
                        <NavLink to="/">
                            <p className={'font-thin text-base-gray text-xl lg:text-2xl hover:scale-105 transition duration-200'}>Главная</p>
                        </NavLink>
                        <NavLink to={'/moduls'}>
                            <p className={'font-thin text-base-gray text-xl lg:text-2xl hover:scale-105 transition duration-200'}>Портфолио</p>
                        </NavLink>
                        <NavLink to={'/news'}>
                            <p className={'font-thin text-base-gray text-xl lg:text-2xl hover:scale-105 transition duration-200'}>Новости</p>
                        </NavLink>
                        <NavLink to={'/contacts'}>
                            <p className={'font-thin text-base-gray text-xl lg:text-2xl hover:scale-105 transition duration-200'}>Контакты</p>
                        </NavLink>
                    </div>
    )

    return (
        <>
            <Navbar placeholder={''} className="fixed top-0 z-20 border-none rounded-none max-w-full bg-[rgba(47,46,51,0.90)] py-3 px-5 lg:py-[15px] lg:px-[42px ]">
                <div className="h-full flex items-center justify-between">
                    <div className='w-full flex justify-between lg:gap-10 items-center py-[7px]'>
                        <IconButton
                            placeholder={''}
                            variant="text"
                            className="order-2 lg:order-none h-6 w-6 md:h-6 md:w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                                <svg className={'md:h-8 md:w-8'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.75 9H20.25M3.75 15.75H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>


                            )}
                        </IconButton>
                        <Logo className={"hidden lg:block order-1 lg:order-none "} />
                        <div className={'hidden lg:flex'}>
                            {classicMenu}
                        </div>
                    </div>
                </div>
            </Navbar>
            
            {/* Мобильное боковое меню */}
            <div className={`fixed top-[62px] shadow-lg right-0 h-full w-80 bg-[rgba(47,46,51,0.90)] py-20 px-8 z-30 backdrop-saturate-200 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${openNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                        {classicMenu}
                </div>
            </div>
        </>
    );
}

export default Header;
