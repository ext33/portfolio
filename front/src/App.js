import React, { useRef, useEffect } from 'react'
import './styles/index.sass'
import 'animate.css'
import RouterView from './router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { initLanguage } from './store/languageStore/languageActions'

import Nav from './components/Nav'

function App(props) {

  let initialize = useRef(false)

  useEffect(() => {
    defineTheme(props.theme)
  }, [props.theme])
  
  if (initialize.current === false){
    props.initLang(window.navigator.language.slice(0, 2))
    initialize.current = true
  }

  function defineTheme(theme) {
    const html = document.documentElement
    if (theme) 
        html.setAttribute('data-theme', 'dark')
    else 
        html.removeAttribute('data-theme', 'dark')
  }

  return (
    <div className="App animate__animated animate__fadeIn">
      <Nav />
      <RouterView />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    theme: state.themeReducer.theme
  }
}

function mapDispatchToProps(dispatch){
  return {
      initLang: (lang) => dispatch(initLanguage(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
