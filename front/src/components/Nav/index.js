import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from "react-router-dom"
import './Nav.sass'
import { connect } from 'react-redux'
import { setLanguageEn, setLanguageRu } from '../../store/languageStore/languageActions'
import { setTheme } from '../../store/themeStore/themeActions'


function Nav(props) {

    const currentLocation = useLocation()

    const [language, setLanguage] = useState({
        enLangStyles: '', 
        ruLangStyles: '',
    })

    const [location, setLocation] = useState({
        styles: {
            "home": "",
            "work": "",
            "about": ""
        }
    })

    useEffect(()=>{
        if (props.lang === 'en') 
            setLanguage({
                enLangStyles: 'focus',
                ruLangStyles: '',
            })
        else 
            setLanguage({
                enLangStyles: '',
                ruLangStyles: 'focus',
            })
    }, [props.lang])

    useEffect(() => {
        if (currentLocation.pathname === '/')
            setLocation({
                styles: {
                    "home": "focus",
                    "work": "",
                    "about": ""
                }
            })
        else if (currentLocation.pathname === '/work')
            setLocation({
                styles: {
                    "home": "",
                    "work": "focus",
                    "about": ""
                }
            })
        else if (currentLocation.pathname === '/about')
            setLocation({
                styles: {
                    "home": "",
                    "work": "",
                    "about": "focus"
                }
            })
        else
            setLocation({
                styles: {
                    "home": "",
                    "work": "",
                    "about": ""
                }
            })
    }, [currentLocation])

    function toggleNav() {
        var x = document.getElementById("nav")
        if (x.className === "flex nav animate__animated animate__fadeIn") 
            x.className += " responsive"
        else 
            x.className = "flex nav animate__animated animate__fadeIn"
    }

    return (
        <div className="flex nav animate__animated animate__fadeIn" id="nav">
            <div className="flex nav__icon-container">
                <button className="nav__theme-icon" onClick={() => props.changeTheme()}>
                    <FontAwesomeIcon icon={["fas", "adjust"]} />
                </button>
                <button className="nav__icon" onClick={() => toggleNav()}>
                    <FontAwesomeIcon icon={["fas", "bars"]} />
                </button>
            </div>
            <div className="flex nav__links" id="nav__links">
                <NavLink activeClassName={location.styles.home} to='/'>{props.text.nav.home}</NavLink>
                <NavLink activeClassName={location.styles.work} to='/work'>{props.text.nav.work}</NavLink>
                <NavLink activeClassName={location.styles.about} to='/about'>{props.text.nav.about}</NavLink>
                <div className="flex nav__lang-btn">
                    <button className={language.enLangStyles} onClick={() => props.switchToEn()}>en</button> 
                    &nbsp; | &nbsp;
                    <button className={language.ruLangStyles} onClick={() => props.switchToRu()}>ru</button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        lang: state.languageReducer.language,
        text: state.languageReducer.text
    }
}

function mapDispatchToProps(dispatch){
    return {
        switchToEn: () => dispatch(setLanguageEn()),
        switchToRu: () => dispatch(setLanguageRu()),
        changeTheme: () => dispatch(setTheme()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
