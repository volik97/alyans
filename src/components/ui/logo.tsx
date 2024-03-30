import {scroller} from "react-scroll";
import {Link} from "react-router-dom";

function Logo({className} : {className : string}) {
    return (
        <Link to="/">
            <img
                onClick={() => {
                    setTimeout(() => {
                        scroller.scrollTo('hero', { smooth: true });
                    });
                }}
                alt={'logo'}
                src="/Images/newLogo.svg"
                className={className}
            />
            <svg className={'block lg:hidden md:h-10 md:w-10'} width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.16007 23.8331H21.4401C22.9134 23.8331 24.1067 22.6397 24.1067 21.1664V2.88639C24.1067 1.41306 22.9134 0.219727 21.4401 0.219727H3.16007C1.68674 0.219727 0.493408 1.41306 0.493408 2.88639V21.1664C0.493408 22.6397 1.68674 23.8331 3.16007 23.8331ZM12.1467 5.27973L16.0734 17.6397L16.9734 17.7464V18.2931H13.2267V17.7464L14.2401 17.6264L13.3067 14.5064H9.7734L8.8534 17.4131L10.0134 17.6397V18.2931H7.40006V17.6397L8.00673 17.5131L12.1467 5.27973ZM11.5867 8.76639L10.0467 13.6397H13.0467L11.5867 8.76639Z" fill="white"/>
            </svg>

        </Link>
    );
}

export default Logo;