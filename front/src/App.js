import React, { useRef } from 'react'
import './styles/index.sass'
import 'animate.css'
import RouterView from './router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { initLanguage } from './store/languageStore/languageActions'
import Nav from './components/Nav'

function App(props) {

  let initialize = useRef(false)
  
  if (initialize.current === false){
    props.initLang(window.navigator.language.slice(0, 2))
    initialize.current = true
  }


  return (
    <div className="App animate__animated animate__fadeIn">
      <Nav />
      <RouterView />
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
      initLang: (lang) => dispatch(initLanguage(lang)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App))
