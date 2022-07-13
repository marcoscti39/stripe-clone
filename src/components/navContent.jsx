import React,{useEffect, useState} from 'react'
import './../styles/navContent.css'

import { useGlobalContext } from '../context'

import sublinks from '../data'
export default function NavContent({floatNav, navCategory}) {
    const { isFloatNavActive, closeFloatNav, navMove: {linkMiddle, linkY}, setNavMove} = useGlobalContext()

    useEffect(() =>{
        floatNav.current.style.left = `${linkMiddle}px`
        floatNav.current.style.top = `${linkY - 3}px`


    },[navCategory])
    return (
        <nav ref={floatNav} style={{left: '50%', top: '4.5rem'}} onMouseLeave={() => closeFloatNav()} className={`float-nav ${isFloatNavActive && "show"}`} >
            {sublinks.map((subNav,index) =>{
                if(subNav.page === navCategory){
                    return (
                        <React.Fragment key={index}>
                            <h2 className='float-title'>{subNav.page}</h2>
                            <ul className='float-nav-list'>
                                {subNav.links.map((link, index) =>{
                                    const {label, icon, url} = link
                                    return (
                                        <li key={index} >
                                            {icon}
                                            <a href={url}>{label}</a>
                                        </li>
                                    )
                                })}
                            </ul>

                        </React.Fragment>
                    
                    )
                }
            })}
        </nav>
    
    )
}
