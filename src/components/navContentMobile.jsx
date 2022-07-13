import React from 'react'
import sublinks from '../data'

import './../styles/navContentMobile.css'
import {GrFormClose} from 'react-icons/gr'


export default function NavContentMobile({setIsMenuActive}) {
    return (
        <div className="menu-mobile-container">
            {sublinks.map((nav,index) =>{
                return (
                    <ul key={index} className='mobile-menu-item' >
                        <strong className='mobile-menu-category' >{nav.page}</strong>
                        <div>
                        {nav.links.map((links, index) =>{
                            const {label, icon, url} = links
                            return(
                                <li key={index} className="mobile-menu-links" > 
                                    <div className="mobile-menu-icon">{icon}</div>
                                    <a href={url}>{label}</a>
                                </li>
                                
                            )
                        })}
                        </div>
                    </ul>
                )
            })}
            <button onClick={() => setIsMenuActive(false)} className="exit-nav-mobile">
                <GrFormClose/>
            </button>
            
        </div>
    )
}
