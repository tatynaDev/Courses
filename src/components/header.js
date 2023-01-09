import React from 'react';
import logo from "../img/логотип.svg"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header">
                        <div style={{display:"flex", alignItems:"center"}}>
                            <NavLink to={"/MainPage"}><img src={logo} alt=""/></NavLink>
                            <div className="header--right">
                                <NavLink style={{margin:"15px"}} to={'/AboutSchool'}>О школе</NavLink>
                                <Link style={{margin:"15px"}}>Наши курсы</Link>
                                <NavLink style={{margin:"15px"}} to={'/AboutUs'}>О нас</NavLink>
                            </div>
                        </div>
                    <div className="header--left">
                        <button style={{margin:"0 20px"}}>Войти</button>
                        <button style={{margin:"0 20px"}}>Подписаться </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;