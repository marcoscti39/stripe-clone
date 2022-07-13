import React,{useState, useRef, useEffect} from 'react'

import {FiMenu} from 'react-icons/fi'
import logo from "../images/logo.svg"
import "./../styles/header.css"
import NavContent from './navContent'

import { useGlobalContext } from '../context'


import NavContentMobile from './navContentMobile'

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [ navCategory, setNavCategory] = useState('')

    const floatNav = useRef('')

    const {closeFloatNav, showFloatNav} = useGlobalContext()


    function changeNavLocation(e){
        setNavCategory(e.target.textContent)

        const linkLocation = e.target.getBoundingClientRect()
        const linkMiddle = (linkLocation.left + linkLocation.right) / 2
        const linkY = linkLocation.bottom

        showFloatNav({linkMiddle, linkY})
        
    }
   
    return (
        <header>
            <div className="header-container" >
                <img className="header-logo" src={logo} alt="logo stripe" />

                <nav className={`header-nav nav-mobile ${isMenuActive ? "active": "disable"}`}
                onMouseLeave={() => closeFloatNav()}>

                    <NavContent floatNav={floatNav} navCategory={navCategory}/>
                    {isMenuActive && <NavContentMobile setIsMenuActive={setIsMenuActive} />}

                    <ul className="nav-list">
                        <li>
                            <a onMouseOver={(e) => changeNavLocation(e)}
                             href="">products</a>
                        </li>
                   
                        <li>
                            <a 
                            onMouseOver={(e) => changeNavLocation(e)}
                            href="">developers</a>
                         </li>
                   
                        <li>
                            <a 
                            onMouseOver={(e) => changeNavLocation(e)}
                            href="">company</a>
                        </li>

                    </ul>
                </nav>

                <button onClick={() => setIsMenuActive(true)} className="menu-mobile-btn">
                    <FiMenu/>
                </button>
                <button className="header-sign-in-btn">
                    Sign in
                </button>
            </div>
            
        </header>
    )
}
