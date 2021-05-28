import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom"
import './Nav.sass'
import { connect } from 'react-redux'
import {setLanguageEn, setLanguageRu} from '../../store/languageStore/languageActions'


function Nav(props) {

    const [language, setLanguage] = useState({
        enLangStyles: '', 
        ruLangStyles: ''
    })

    useEffect(()=>{
        if (props.lang === 'en') setLanguage({
            enLangStyles: 'focus',
            ruLangStyles: ''
        })
        else setLanguage({
            enLangStyles: '',
            ruLangStyles: 'focus'
        })
    }, [props])

    return (
        <div className="flex nav">
            <div className="nav__theme-icon">
                <FontAwesomeIcon icon={["fas", "adjust"]} />
            </div>
            <div className="flex nav__links">
                <NavLink to='/'>{props.text.nav.home}</NavLink>
                <NavLink to='/work'>{props.text.nav.work}</NavLink>
                <NavLink to='/about'>{props.text.nav.about}</NavLink>
                <div className="nav__lang-btn">
                    <button className={language.enLangStyles} onClick={() => props.switchToEn()}>en</button> | <button className={language.ruLangStyles} onClick={() => props.switchToRu()}>ru</button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
