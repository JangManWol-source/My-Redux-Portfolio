import {createSlice} from '@reduxjs/toolkit'

let lastMode = localStorage.getItem('last_mode')
let lastColor = localStorage.getItem('last_txt_color')
let lastTheme = localStorage.getItem('last_theme')
if (lastMode === null) {
    lastMode = 'var(--dark)'
}
if(lastColor === null){
    lastColor = 'var(--light)'
}
if (lastTheme === null) {
    lastTheme = false
}
const toggles = createSlice({
    name: 'toggle',
    initialState: {
        drawerIsOpen: false,
        isNightMode: lastTheme, mode: lastMode, textColor: lastColor
    },
    reducers: {
        
        toggleDrawer(state) {
            state.drawerIsOpen = !state.drawerIsOpen
        },
        toggleMode(state, action){
            state.isNightMode = !state.isNightMode
            console.log(state.isNightMode)
            console.log(action)
            if(state.isNightMode){
                state.mode = 'var(--dark)'
                state.textColor = 'var(--light)'
            }
            if (!state.isNightMode) {
                    state.mode = 'var(--light)'
                    state.textColor = 'var(--dark)'
            }
            
     
            localStorage.setItem('last_mode', state.mode)
            localStorage.setItem('last_theme', state.isNightMode)
            localStorage.setItem('last_txt_color', state.textColor)
        }
    }
})

export const {toggleDrawer, toggleMode} = toggles.actions
export default toggles.reducer
