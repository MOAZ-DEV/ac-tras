import { useState } from 'react';
import './styling/secondCtaLayout.scss';

export const SecondCtaLayout = (_props: any) => {
    const [hoveredBox, setHoveredBox] = useState(false);

    return <>
        <div className="secondCtaLayout">
            <div className="cta">
                <span className="H2">Uncompromising <br />Quality And Reliability</span>
                <div className="bodyWrap">
                    <span className="RB3">
                        We take pride in our commitment to uncompromising quality and reliability. We adhere to rigorous standards throughout our manufacturing process, ensuring that every air conditioner leaving our facility meets the highest industry benchmarks.
                    </span>
                    <span className="RB3">
                        Choose AC for air conditioners that combine the latest processing solutions with decades of work experience, delivering exceptional quality, reliability, and performance. Experience the difference of cooling solutions engineered to exceed your expectations.
                    </span>
                </div>
            </div>

            <div className="boxesWarp">
                <div className="ctaBox" onMouseOver={() => setHoveredBox(true)} aria-selected={hoveredBox}>
                    <svg width="341" height="27" viewBox="0 0 341 27" fill={!hoveredBox? "#EBEBEB":"none"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M340.017 26L313.586 1H1V26" stroke="#FF3030" />
                    </svg>

                    <div className="contentWrap">
                        <span className="H3">Explore Our Cutting-Edge Technology</span>
                        <span className="RB3">Discover the advanced processing solutions we employ to create high-performance air conditioners. Click the button below to learn more about the innovative technologies that set AC apart from the competition.
                        </span>
                        <button className="pri">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="ctaBox" onMouseOver={() => setHoveredBox(false)} aria-selected={!hoveredBox}>
                <svg width="341" height="27" viewBox="0 0 341 27" fill={hoveredBox? "#EBEBEB":"none"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M340.017 26L313.586 1H1V26" stroke="#FF3030" />
                    </svg>

                    <div className="contentWrap">
                        <span className="H3">Learn About Our Work Experience
                        </span>
                        <span className="RB3">Learn how our decades of work experience have shaped our expertise in the cooling industry. Click the button below to delve into the wealth of knowledge we bring to every air conditioner we manufacture.
                        </span>
                        <button className="pri">Learn More</button>
                    </div>
                </div>
 </div>
        </div>
    </>
}
/*


*/