import React from 'react'
import { connect } from 'react-redux'
import './WorkPage.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bnImage from '../../assets/bn.png'
import wdImage from '../../assets/wd.png'
import Footer from '../../components/Footer'

function WorkPage(props) {
    return (
        <div className="flex page work-page animate__animated animate__fadeIn">
            <div className="work-page__title">
                {props.text.work.title}
            </div>
            <div className="work-page__desc">
                {props.text.work.desc}
            </div>
            <div className="flex work-page__items">

                <div className="flex work-page__item">
                    <div className="flex work-page__item-title">
                        <p>{props.text.work.items.beautyNet.title}</p>
                        <a href={props.text.work.items.beautyNet.link} target="_blank" rel="noreferrer" className="main-page__promo-logo">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </div>
                    <div className="work-page__item-desc">
                        {props.text.work.items.beautyNet.desc}
                    </div>
                    <div className="flex work-page__item-image">
                        <img src={bnImage} alt=''/>
                    </div>
                </div>

                <div className="flex work-page__item">
                    <div className="flex work-page__item-title">
                        <p>{props.text.work.items.wsopDesign.title}</p>
                        <a href={props.text.work.items.wsopDesign.link} target="_blank" rel="noreferrer" className="main-page__promo-logo">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </div>
                    <div className="work-page__item-desc">
                        {props.text.work.items.wsopDesign.desc}
                    </div>
                    <div className="flex work-page__item-image">
                        <img src={wdImage} alt=''/>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        text: state.languageReducer.text
    }
}

export default connect(mapStateToProps, null)(WorkPage)
