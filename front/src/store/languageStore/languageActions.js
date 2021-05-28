import {en, ru} from './content'

export function setLanguageEn() {
    return async (dispatch) => {
        dispatch({type: 'LANG-EN', text: en})
    }
}

export function setLanguageRu() {
    return async (dispatch) => {
        dispatch({type: 'LANG-RU', text: ru})
    }
}

export function initLanguage(lang) {
    return async (dispatch) => {
        if(lang === 'ru') 
            dispatch({type: 'LANG-RU', text: ru})
        else
            dispatch({type: 'LANG-EN', text: en})
    }
}