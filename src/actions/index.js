import axios from 'axios'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchProjects = (dispatch) => {
    dispatch({type: FETCH_START})
    axios.get('https://bw-rw-funding.herokuapp.com/api/projects')
    .then(res => dispatch({ type:FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type:FETCH_FAILURE, payload: err }))
}