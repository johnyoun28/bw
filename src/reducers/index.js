import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/index'

const initialState = {
    projects: [],
    isLoading: true,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_START":
        return {
            ...state,
            isLoading: true,
            err: '',
        }
        case "FETCH_SUCCESS":
            return {
                ...state,
                projects: action.payload,
                isLoading: false,
                err: '',
            }
            case "FETCH_FAILURE":
                return {
                    ...state,
                    isLoading: false,
                    err: action.payload
                }
        default:
            return state
    }
}