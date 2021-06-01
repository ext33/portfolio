import React from 'react'
import { connect } from 'react-redux'
import './WorkPage.sass'

function WorkPage(props) {
    return (
        <div className="flex page work-page animate__animated animate__fadeIn">
            <div className="about-page__title">
                {props.text.work.title}
            </div>
            <div className="about-page__desc">
                {props.text.work.desc}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        text: state.languageReducer.text
    }
}

export default connect(mapStateToProps, null)(WorkPage)
