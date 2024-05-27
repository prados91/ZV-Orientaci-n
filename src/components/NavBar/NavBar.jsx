import { useState } from "react";
import { Link, } from "react-router-dom";

import logoWeb from '../../assets/images/logoWeb.png'

import './NavBar.css'
const NavBar = () => {

    const [navbarblur, setnavbarblur] = useState(false);

    const showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    };

    const hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    };


    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);


    return (
        <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
            <Link to="/">
                <img src={logoWeb} alt="Logo de la web" className={navbarblur ? "navbar_logo blur_img" : "navbar_logo"} />
            </Link>
            <div className="Hamburger" onClick={showMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="NavbarLinks">
                <li onClick={hideMenu}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to="/form">Orientación</Link>
                </li>
            </ul>
        </nav >
    );

}
export default NavBar

