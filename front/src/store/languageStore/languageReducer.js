const initialState = {
    language: null,
    text: {},
}

export default function languageReducer(state = initialState, action){
    switch (action.type) {
        case 'LANG-EN':
            return {
                language: 'en',
                text: action.text,
            }
        case 'LANG-RU':
            return {
                language: 'ru',
                text: action.text,
            }
        default:
            return state
    }
}