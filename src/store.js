import {createStore} from 'redux'

// INITIAL STATE
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    img: '',
    mortgage: null,
    rent: null
}


// ACTION TYPES
export const STEP_ONE = "STEP_ONE"
export const STEP_TWO = "STEP_TWO"
export const STEP_THREE = "STEP_THREE"
export const CANCEL_INPUTS = "CANCEL_INPUTS"


// REDUCER
function reducer(state = initialState, action) {
    switch(action.type) {
        case STEP_ONE:
            return {
                ...state,
                name: action.payload.name, 
                address: action.payload.address, 
                city: action.payload.city, 
                state: action.payload.state,
                zip: action.payload.zip
            }
        case STEP_TWO:
            return {
                ...state,
                img: action.payload
            }
        case STEP_THREE:
            return {
                ...state,
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            }
        case CANCEL_INPUTS:
            return initialState
        default:
            return state
    }
}

// CREATE STORE
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)