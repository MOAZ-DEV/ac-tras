import './styling/headerLayout.scss';
import logoSvg from '../assets/logo.svg';
import callSvg from '../assets/call.svg';
import menuSvg from '../assets/menu.svg';
import closeSvg from '../assets/close.svg';
import fbSvg from '../assets/Fb.svg';
import InSvg from '../assets/In.svg';
import TwSvg from '../assets/Tw.svg';
import srsopPng from '../assets/srsop.png';
import { useState } from 'react';
export const HeaderLayout = (_props: any) => {

    const [menuIsActive, setMenu] = useState(false);
    return <>
        <div className="headerLayout">

            <nav>
                <span className="logo">
                    <img src={logoSvg} alt="Ac" loading="lazy" />
                </span>
                <ul>
                    <li aria-selected="true">Home</li>
                    <li>Company</li>
                    <li>Services & Industries</li>
                    <li>News & Media</li>
                    <li>Shop</li>
                </ul>
                <div className="btnsWrap">
                    <button className="sec">
                        <img src={callSvg} alt="Call Us" loading="lazy" />
                        +20 100 0000 000</button>
                    <button className="pri">Get A Query</button>
                    <button className="menuBtn" onClick={() => setMenu(!menuIsActive)}>
                        <img src={!menuIsActive ? menuSvg : closeSvg} alt="Menu" />
                    </button>
                </div>
            </nav>
            {menuIsActive ? <div className="fullMenu">
                <ul>
                    <li aria-selected="true">Home</li>
                    <li>Company</li>
                    <li>Services & Industries</li>
                    <li>News & Media</li>
                    <li>Shop</li>
                </ul>
                <div aria-details='devider' ></div>
                <div className="btnsWrap">
                    <button className="sec">
                        <img src={callSvg} alt="Call Us" loading="lazy" />
                        +20 100 0000 000</button>
                    <button className="pri">Get A Query</button>

                </div>
                <div aria-details='devider' />
                <div className="metaFooter">
                    <div className="smWrap">
                        <img src={fbSvg} alt="Facebook" />
                        <img src={InSvg} alt="LinkedIn" />
                        <img src={TwSvg} alt="Twitter" />
                    </div>
                    <div className="resWrap">
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div> : null}

            <div className="cta">
                <span className="BB5">
                    Ac - Stay Cool, Stay Comfortable
                </span>
                <span className="H1">
                    Stay cool and comfortable all year round with our high-performance air conditioners.
                </span>
                <span className="RB1">
                    Shop now to find the perfect cooling solution for your space, or learn more about our cutting-edge technology and expert services. Choose CoolBreeze and elevate your indoor comfort to new heights.
                </span>
                <div className="btnsWrap">
                    <button className="pri BB3">Explore Our Products</button>
                    <button className="sec BB3">More About Us</button>
                </div>
            </div>
        </div>
        <div className="overlayWrap">
            <div className="overlayPop">
                <svg className="topGraphic" width="634" height="25" viewBox="0 0 634 25" fill="none">
                    <path d="M0 0H605.639L634 25H0V0Z" fill="white" />
                    <path d="M0 0H605.639L634 25H0V0Z" fill="white" />
                </svg>
                <span className="imgWrap">
                    <img src={srsopPng} alt="Schedule Repair Service" loading='lazy' />
                </span>

                <div className="wraper">
                    <span className="H4">
                        Schedule Repair Service
                    </span>
                    <span className="RB4">
                        Schedule a repair service appointment with us today. Our skilled technicians will diagnose the issue and provide efficient repairs, ensuring your air conditioner operates at its best.
                    </span>
                    <span className="BB4" aria-selected="true">
                        Start A Schedule
                    </span>
                </div>
            </div>
        </div>
    </>
        ;
}