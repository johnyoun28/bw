import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE
} from '../actions/index'

const initialState = {
    techs: [],
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
                techs: action.payload,
                isLoading: false,
                err: '',
            }
            case "FETCH_FAILURE":
                return {
                    ...state,
                    isLoading: false,
                    err: action.payload
                }
            case "FETCH_ITEM_START":
                return {
                    ...state,
                    isLoading: true,
                    err: ''
                }
            case "FETCH_ITEM_SUCCESS":
                return {
                    ...state,
                    techs: action.payload,
                    isLoading: false,
                    err: ''
                }
            case "FETCH_ITEM_FAILURE":
                return {
                    ...state,
                    isLoading: false,
                    err: action.payload
                }
        default:
            return state
    }
}