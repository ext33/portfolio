export function setTheme() {
    return async (dispatch) => {
        dispatch({type: 'SWITCH-THEME'})
    }
}