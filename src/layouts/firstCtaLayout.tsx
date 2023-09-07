import './styling/firstCtaLayout.scss';
import firstctaPng from '../assets/firstcta.png'
export const FirstCtaLayout = (_props: any) => {

    return <>
        <div className="firstCtaLayout">
            <div className="textWrap">
                <span className="BB5" aria-selected>Discover Our State-of-the-Art Manufacturing Facility</span>
                <span className="H1">
                    Crafting Superior Air Conditioners Which is Excellence in Cooling
                </span>

                <div className="bodyWrap">
                    <span className="BB3">
                        Step inside our world-class manufacturing facility and witness the dedication and expertise that goes into crafting our air conditioners. Click the button below to take a virtual tour and see the meticulous craftsmanship behind our products. </span>
                    <span className="RB3">
                        Discover the innovative manufacturing process behind AC air conditioners. From advanced cooling technologies to sustainable practices, learn how we engineer our products to provide optimal comfort while minimizing environmental impact. Click the button below to explore our manufacturing process.
                    </span>
                </div>
                <div className="btnsWrap">
                    <button className="sec">Learn About Our Manufacturing Process</button>
                    <button className="pri">Explore Our Factory</button>
                </div>
            </div>
            <span className="imgWrap">
                <img src={firstctaPng} alt="Factory" />
            </span>
        </div>
    </>
}
/**





 */