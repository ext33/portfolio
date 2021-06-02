import React from 'react'
import { connect } from 'react-redux'
import './AboutPage.sass'
import reactLogo from '../../assets/react-icon.svg'
import vueLogo from '../../assets/vue-logo.svg'
import nodeLogo from '../../assets/nodejs-icon.svg'
import vsLogo from '../../assets/vs-logo.png'

function AboutPage(props) {
    return (
        <div className="flex page about-page animate__animated animate__fadeIn">
            <div className="about-page__title">
                {props.text.about.title}
            </div>
            <div className="about-page__desc">
                {props.text.about.desc}
            </div>
            <div className="flex about-page__stack">

                <div className="flex about-page__stack-item">
                    <div className="about-page__stack-item-icon">
                        <img src={reactLogo} alt="react" />
                    </div>
                    <div className="about-page__stack-item-desc">
                        {props.text.about.react}
                    </div>
                </div>

                <div className="flex about-page__stack-item">
                    <div className="about-page__stack-item-desc">
                        {props.text.about.vue}
                    </div>
                    <div className="about-page__stack-item-icon">
                        <img src={vueLogo} alt="vue" />
                    </div>
                </div>

                <div className="flex about-page__stack-item">
                    <div className="about-page__stack-item-icon">
                        <img src={nodeLogo} alt="node" />
                    </div>
                    <div className="about-page__stack-item-desc">
                        {props.text.about.node}
                    </div>
                </div>

                <div className="flex about-page__stack-item">
                    <div className="about-page__stack-item-desc">
                        {props.text.about.vsc}
                    </div>
                    <div className="about-page__stack-item-icon">
                        <img src={vsLogo} alt="vs-code" />
                    </div>
                </div>

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