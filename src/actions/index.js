import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchTechs = () => (dispatch) => {
    dispatch({type: FETCH_START})
    axiosWithAuth()
    .get('/api/items')
    .then(res => dispatch({ type:FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type:FETCH_FAILURE, payload: err }))
}

export const FETCH_ITEM_START = "FETCH_ITEM_START"
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS"
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE"

export const fetchTechDetails = (id) => (dispatch) => {
    dispatch({type: FETCH_ITEM_START})
    axiosWithAuth()
    .get(`/api/items/${id}`)
    .then(res => dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ITEM_FAILURE, payload: err }))
}

export const ADD_TECH_START = "ADD_TECH_START"
export const ADD_TECH_SUCCESS = "ADD_TECH_SUCCESS"
export const ADD_TECH_FAILURE = "ADD_TECH_FAILURE"

export const addTech = (tech) => (dispatch) => {
    dispatch({ type: ADD_TECH_START })
    axiosWithAuth()
    .post('/api/items', tech)
    .then(res => dispatch({ type: ADD_TECH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_TECH_FAILURE, payload: err }))
}