import React from 'react'
import './styles/index.sass'
import RouterView from './router'
import { connect } from 'react-redux'
import { initLanguage } from './store/languageStore/languageActions'

function App(props) {

  props.initLang(window.navigator.language.slice(0, 2))

  return (
    <div className="App">
      <RouterView />
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
      initLang: (lang) => dispatch(initLanguage(lang)),
  }
}

export default connect(null, mapDispatchToProps)(App)
