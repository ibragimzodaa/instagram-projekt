import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import "./style.css";

const Layout = () => {
    let {pathname} = useLocation();
    return <>
        <header className="aHeader">
            <div>
                <nav>
                    <img src="" alt="" />
                    <Link to={"/services"}>
                        <p>Services</p>
                    </Link>
                    <Link to={"/cs"}><p>Case Studies</p></Link>
                    <Link to={"/about"}><p>About Us</p></Link>
                    <Link to={"/blog"}><p>Blog</p></Link>
                    <Link to={"/contacts"}><p>Contacts</p></Link>
                </nav>
                <button className="human">Talk to a Human</button>
            </div>
        </header>
        <div>
            <Outlet></Outlet>
        </div>
        <footer>

        </footer>
    </> 
}

export default Layout