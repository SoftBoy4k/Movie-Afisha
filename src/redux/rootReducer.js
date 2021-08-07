import { CHANGE_DATE, CHANGE_TIME } from "./types"

const initialState = {
    date: [],
    time: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_DATE:
            return {...state, date: action.payload}
        case CHANGE_TIME:
            return {...state, time: action.payload}
        default: return state
    }
}