import { combineReducers } from 'redux'
import languageReducer from './languageStore/languageReducer'
import themeReducer from './themeStore/themeReducer'

export default combineReducers({
    languageReducer,
    themeReducer,
})