import React from 'react'
import { connect } from 'react-redux'
import './AboutPage.sass'

function AboutPage(props) {
    return (
        <div className="flex page about-page animate__animated animate__fadeIn">
            <div className="about-page__title">
                {props.text.about.title}
            </div>
            <div className="about-page__desc">
                {props.text.about.desc}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        text: state.languageReducer.text
    }
}

export default connect(mapStateToProps, null)(AboutPage)