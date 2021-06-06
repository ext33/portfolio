import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MainPage.sass'
import { connect } from 'react-redux'
import ParticlesBg from 'particles-bg'

function MainPage(props) {
    return (
        <div className="flex page main-page animate__animated animate__fadeIn">
            <ParticlesBg type="cobweb" /> 
            <div className="flex main-page__promo">
                <div className="main-page__promo-title">
                    e x t 3 3
                </div>
                <div className="main-page__promo-desc">
                    ~javascript ~react <br /> frontend {props.text.main.dev}
                </div>
                <a href='https://github.com/ext33' target="_blank" rel="noreferrer" className="main-page__promo-logo">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        text: state.languageReducer.text
    }
}

export default connect(mapStateToProps, null)(MainPage)
