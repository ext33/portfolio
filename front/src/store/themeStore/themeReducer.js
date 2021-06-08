const initialState = {
    theme: false
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH-THEME':
            const newTheme = state.theme
            return {
                theme: !newTheme
            }
        default:
            return state
    }
}