import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchTechs = (dispatch) => {
    dispatch({type: FETCH_START})
    axiosWithAuth()
    .get('/api/items')
    .then(res => dispatch({ type:FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type:FETCH_FAILURE, payload: err }))
}