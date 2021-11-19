import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    ADD_TECH_START,
    ADD_TECH_SUCCESS,
    ADD_TECH_FAILURE,
    DELETE_TECH_SUCCESS,
    EDIT_TECH_START,
    EDIT_TECH_SUCCESS

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
            case "ADD_TECH_START":
                return {
                    ...state,
                    isLoading: true,
                    err: ''
                }
            case "ADD_TECH_SUCCESS":
                return {
                    ...state,
                    techs: [...state, action.payload],
                    isLoading: false
                }
            case "ADD_TECH_FAILURE":
                return {
                    ...state,
                    isLoading: false,
                    err: action.payload
                }
            case "DELETE_TECH_SUCCESS":
                return {
                    ...state,
                    techs: action.payload
                }
            case "EDIT_TECH_START":
                return {
                    ...state,
                    isLoading: true
                }
            case "EDIT_TECH_SUCCESS":
                return {
                    ...state
                }
        default:
            return state
    }
}