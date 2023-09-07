import "./styling/footerLayout.scss";
import fbSvg from '../assets/Fb.svg';
import InSvg from '../assets/In.svg';
import TwSvg from '../assets/Tw.svg';
export const FooterLayout = (_props: any) => {

    return <div className="footerLayout">
        <footer>

<div className="menuWrap">
    <ul>
        <span>Product</span>
        <li>Data Governance</li>
        <li>Virtual Events</li>
        <li>Virtual Users</li>
        <li>Behavioral Analytics</li>
        <li>Connect</li>
    </ul>
    <ul>
        <span>Explore</span>
        <li>Resources</li>
        <li>Blog</li>
    </ul>
    <ul>
        <span>Company</span>
        <li>About us</li>
        <li>Partners</li>
        <li>Customers</li>
        <li>Contact us</li>
    </ul>
</div>
<div className="subscribeWrap">
    <span>Subscribe</span>

    <form action="" method="get">
        <input type="email" placeholder="Email address" />
        <input type="submit" value="Subscribe" />
    </form>
    <span className="RB5">Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just insight</span>
</div>
</footer>
<div aria-details="devider" />
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
    </div>
}
/*








*/