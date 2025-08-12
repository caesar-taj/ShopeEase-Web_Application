import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo1.png"

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    
    //add event listenar
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 200)
        {
            SetHeaderFixed(true)
        }else
        {
            SetHeaderFixed(false)
        }
    })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/*Header start from here*/}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
        {/*Bottom of the Header*/}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"}> 
                            <img src={logo} alt="" />
                            </Link>
                        </div>
                        {/* Menu area */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/superdeals">SuperDeals</Link></li>
                                    <li><Link to="/shopeease business">ShopeEase Business</Link></li>
                                    <li><Link to="/home & garden">Home & Garden</Link></li>
                                    <li><Link to="/hair extensions & wigs">Hair Extensions & Wigs</Link></li>
                                </ul>
                            </div>
                            {/* Sign in and log in */}
                            <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                <Link to="login" className='d-none d-md-block'>Log In</Link>
                                {/* for Menu toggle */}
                                <div onClick={() =>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                {/* Social toggler */}
                                <div className="ellepsis-bar d-md-none" onClick={()=> setSocialToggle(!socialToggle)}>
                                   <i class="fi fi-ss-info"></i>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems