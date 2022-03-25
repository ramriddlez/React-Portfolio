import { createContext, useReducer } from 'react'


export const ThemeContext = createContext()

const INIT_STATE = { darkMode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};


export const ThemeProvider = (props) => {

    const [state, dispatch] = useReducer(themeReducer, INIT_STATE)

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )

}