import React, {useContext, useState} from 'react'



const CreatGlobalContext = React.createContext()

export const useGlobalContext = () =>{
    return useContext(CreatGlobalContext)
}

export default function ContextProvider({children}) {
    const [isFloatNavActive, setIsFloatNavActive] = useState(false)
    const [navMove, setNavMove] = useState({})

    const showFloatNav = (location) =>{
        setNavMove(location)
        setIsFloatNavActive(true)
    }
    const closeFloatNav = () =>{
        setIsFloatNavActive(false)
    }

    return (
        
        <CreatGlobalContext.Provider
            value={{
            isFloatNavActive,
            showFloatNav,
            closeFloatNav,
            navMove,
            setNavMove
            }}>
                {children}
        </CreatGlobalContext.Provider>
            
        
    )
}
